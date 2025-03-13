// Event Loop
const {readFile, writeFile} = require('fs').promises;

// const util = require ('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(readFile)



// await
const start = async() =>{
    try{
        const first = await readFile('./content/first.txt', 'utf8'); // wait for promise to be finished to be execut ed
        const second = await readFile('./content/second.txt', 'utf8');

        await writeFile(
            './content/result-mind-grenade.txt', 
            `This is Awesome : ${first} ${second}`
        )


        console.log(first, second);
    } catch (error){
        console.log(error);
    }
}

start()

// Promise
// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, result)=>{
//             if(err){
//                 reject(err)
//             }
//             else{
//                 resolve(result)
//             }
        
//         })
//     })
// }

// path of the content, return a promise 
// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err)=> console.log(err))