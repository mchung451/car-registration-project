Given ("The file contains Data", () => {
    cy.readFile('./cypress/fixtures/car_input.txt').then(function(value){
        console.log(value)
    });
});

When ("I search through the Data", fileName => {
    const fs = require('fs')

    let data = fs.readFileSync(fileName)
    data = data.toString()
    data = data.replace(/\s+/g, '');
    cy.log(data)
})