const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.jsx')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Add animate-on-scroll fade-up to common elements if they don't have it
  const regex = /className=["']([^"']*(card|block|grid|hero-title|hero-subtitle|section-title|hero-text|feature|pricing)[^"']*)["']/g;
  
  content = content.replace(regex, (match, classNames) => {
    if (!classNames.includes('animate-on-scroll')) {
      changed = true;
      return `className="${classNames} animate-on-scroll fade-up"`;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Added animations to ${file}`);
  }
});
