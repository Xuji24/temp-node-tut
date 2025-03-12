const {readFile, writeFile} = require('fs');
console.log('start');
// read file function for first.txt
// convert it into utf8 format to read it in plain text
readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err); //log the error if there is one
        return; // then return it
    }
    const firstText = result; // store the result in a variable if there no error
    readFile('./content/second.txt', 'utf8', (err, result) =>{ // read file function for second.txt
        if(err){
            console.log(err);
            return;
        }
    const secondText = result; // store results
    writeFile( // write file (if file is existing it will overwrite it else it will create one)
        './content/result-async.txt', 
        `Here is the results ${firstText}, ${secondText}`, 
        (err, result) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with the task');
        }
    )
    })
})
console.log('Starting next...');