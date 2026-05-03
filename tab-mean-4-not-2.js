node -e "
const fs = require('fs');
const file = '/home/tahsin005/Downloads/Codes/';
const content = fs.readFileSync(file, 'utf8');
const newContent = content.split('\n').map(line => {
    const match = line.match(/^( +)(.*)$/);
    if (match) {
return ' '.repeat(match[1].length * 2) + match[2];
    }
    return line;
}).join('\n');
fs.writeFileSync(file, newContent);
console.log('Done');
"
