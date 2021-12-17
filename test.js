const fs = require('fs') //require fs allows work on a file on local system
const readline = require('readline');
const lineReader = require('line-reader');


const removeWhitespace = fileName => {
    let data = fs.readFileSync(fileName)
    
    data = data.toString()
    data = data.replace(/\s+/g, ''); // This removes all the whitespace
    return data
}

const inputData = removeWhitespace('./cypress/fixtures/car_input.txt');

const filteredData = inputData.match(/[A-Z]{2}[0-9]{2}[A-Z]{3}/g)
console.log(filteredData);



// async function processLineByLine() {
//   const fileStream = fs.createReadStream('./cypress/fixtures/car_output.txt');
//   const outputArray = [];

//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
//   });
//   // Note: we use the crlfDelay option to recognize all instances of CR LF
//   // ('\r\n') in input.txt as a single line break.

//   for await (const line of rl) {
//     if(line !== "" && line !== "REGISTRATION,MAKE,MODEL,COLOR,YEAR"){
//         outputArray.push(line)
//     } 
//   }
//   console.log(outputArray)
// }

// processLineByLine();

/////////////////////////////////////////////////////////////////////////////////////////////

// const array = fs.readFileSync('./cypress/fixtures/car_output.txt').toString().split("\n");
// const actualArray = [];
// for(i in array) {
//     if (i !== "REGISTRATION,MAKE,MODEL,COLOR,YEAR"){
//         actualArray.push(array[i])
//     }

// }

// console.log(actualArray)


var array = fs.readFileSync('./cypress/fixtures/car_output.txt', 'utf8').split('\n');

console.log(array)



