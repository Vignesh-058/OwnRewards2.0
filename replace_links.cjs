const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

const srcPath = path.join(__dirname, 'src');

walk(srcPath, function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace <Link to="/register"> and <Link to="/login"> with <a> tags
    content = content.replace(/<Link\b([^>]*?)to="\/register"([^>]*)>([\s\S]*?)<\/Link>/g, '<a href="https://workspace.ownchat.app/"$1$2>$3</a>');
    content = content.replace(/<Link\b([^>]*?)to="\/login"([^>]*)>([\s\S]*?)<\/Link>/g, '<a href="https://workspace.ownchat.app/"$1$2>$3</a>');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});

console.log("Replacement complete.");
