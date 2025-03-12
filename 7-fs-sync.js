// File module
// Synchrounous or Sequentially

const {readFileSync, writeFileSync} = require('fs');
console.log('start');


const firstText = readFileSync('./content/first.txt', 'utf8');
const secondText = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt', 
    `Here is the results ${firstText}, ${secondText}`, 
    {flag: 'a'}
);
console.log('done with the task');