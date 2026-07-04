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

  const componentName = path.basename(file, '.jsx').toLowerCase();
  let idCounter = 1;

  // Add id to <section>
  content = content.replace(/<section(?!\s+id=)([^>]*)>/g, (match, rest) => {
    changed = true;
    return `<section id="${componentName}-sec-${idCounter++}"${rest}>`;
  });

  // Add id to <button>
  content = content.replace(/<button(?!\s+id=)([^>]*)>/g, (match, rest) => {
    changed = true;
    return `<button id="${componentName}-btn-${idCounter++}"${rest}>`;
  });

  // Add id to <div className="...card...">
  content = content.replace(/<div(?!\s+id=)([^>]*className=["'][^"']*(card|panel|tab)[^"']*["'][^>]*)>/gi, (match, rest) => {
    changed = true;
    return `<div id="${componentName}-div-${idCounter++}"${rest}>`;
  });

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Added IDs to ${file}`);
  }
});
