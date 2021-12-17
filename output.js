const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('./cypress/fixtures/car_output.txt');
  const outputArray = [];

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    if(line !== "" && line !== "REGISTRATION,MAKE,MODEL,COLOR,YEAR"){
        outputArray.push(line)
    } 
  }
  console.log(outputArray)
}

processLineByLine();