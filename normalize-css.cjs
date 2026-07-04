const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.css')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  const replaceMap = [
    { regex: /@media\s*\(\s*max-width\s*:\s*(768|767|800|900)px\s*\)/g, replacement: '@media (max-width: 768px)' },
    { regex: /@media\s*\(\s*max-width\s*:\s*(1024|1000|1100)px\s*\)/g, replacement: '@media (max-width: 1024px)' },
    { regex: /@media\s*\(\s*min-width\s*:\s*(768|769|800|900)px\s*\)/g, replacement: '@media (min-width: 768px)' },
    { regex: /@media\s*\(\s*min-width\s*:\s*(1024|1000|1100)px\s*\)/g, replacement: '@media (min-width: 1024px)' },
    { regex: /@media\s*\(\s*min-width\s*:\s*(1280|1200|1300)px\s*\)/g, replacement: '@media (min-width: 1280px)' },
    { regex: /@media\s*\(\s*min-width\s*:\s*(480|500|600)px\s*\)/g, replacement: '@media (min-width: 480px)' }
  ];

  replaceMap.forEach(({ regex, replacement }) => {
    if (regex.test(content)) {
      content = content.replace(regex, replacement);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Normalized CSS in ${file}`);
  }
});
