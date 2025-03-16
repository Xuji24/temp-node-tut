// Streams - extends event emitter 
// Writeatable Stream, used to write sequentially
// Readable, used to read sequentially
// Duplex, used to read and write sequentially
// Transform, used to modify when reading and writing


// For BIG file creation
const { writeFileSync } = require('fs');
for (let i = 0; i  < 100000; i++){
    writeFileSync('./content/big.txt', `hello world ${i}\n`, {flag: 'a'});
}

//default 64kb
//last buffer - remainder
//highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' });

// Creating streams
// const { createReadStream } = require('fs');

// const stream = createReadStream('./content/big.txt', { 
//     highWaterMark: 90000, 
//     encoding: 'utf-8',
// });


// stream.on('data', (result)=>{
//     console.log(result);
// })

// stream.on('error', (err) =>{
//     console.log(err);
// })