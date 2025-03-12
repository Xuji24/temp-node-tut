const path = require('path');


console.log(path.sep); // returns my platform specific separator

const filePath = path.join('./content', './subfolder', './test.txt'); //specified path

console.log(filePath);

const base = path.basename(filePath); //base path

//absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);