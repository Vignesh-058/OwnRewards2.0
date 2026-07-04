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

  if (content.includes('framer-motion')) {
    // Remove import
    content = content.replace(/import\s+{.*?}\s+from\s+['"]framer-motion['"];?\n?/g, '');
    
    // Replace <motion.div with <div
    content = content.replace(/<motion\.([a-zA-Z0-9]+)/g, '<$1');
    content = content.replace(/<\/motion\.([a-zA-Z0-9]+)>/g, '</$1>');
    
    // Strip framer motion props (initial, animate, whileInView, viewport, transition, style if it has x/y/opacity)
    content = content.replace(/\b(initial|animate|whileInView|viewport|transition|whileHover|whileTap|layoutId|layout|exit)={{.*?}}/gs, '');
    content = content.replace(/\b(initial|animate|whileInView|viewport|transition|whileHover|whileTap|layoutId|layout|exit)={.*?}/gs, '');
    
    // Sometimes it's string: layoutId="xyz"
    content = content.replace(/\b(layoutId)=["'].*?["']/g, '');

    // Attempt to inject animate-on-scroll class where motion. was removed.
    // This is tricky with regex if there is already a className. 
    // Just blindly replacing className=" to className="animate-on-scroll fade-up 
    // Actually, maybe it's better to let them be static for now and I'll manually add animations to key elements.
    // The user said: "Animations: @keyframes + IntersectionObserver. Zero animation libraries."
    
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Refactored ${file}`);
  }
});
