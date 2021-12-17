// firstTest.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test



import orderedPopulatedArray from '../../test.js';
import filteredData from '../../test.js';



describe("gathering data from the input file", () => {
  it("validation of text file", () => {
    cy.readFile("./cypress/fixtures/car_input.txt").then(function (value) {
      console.log(value);
      console.log(orderedPopulatedArray);
    });
  });

  it("finding registration plates", () => {
    cy.fixture("./car_input").then((data) => {});
  });

  it("writing a test file", () => {
    cy.writeFile("./test/extractedData.txt", "cheese");
  });
});

describe("gathering information from the website", () => {
  // it.skip("purely for testing purposes", () => {
  //     const plates = ['DN09HRM','BW57BOW', 'KT17DLX', 'SG18HTN' ];

  //     for (let i = 0; i <plates.length; i++){
  //         cy.visit('/')
  //         cy.get('#vrm-input').type(plates[i])
  //         cy.get('.jsx-1164392954 ').click().then (page => {
  //             if (cy.get('body').contains('found')){
  //                 console.log('cheese')
  //             }
  //         })

  //     }

  //     console.log(plates);
  // })

  // it.skip("Entering the Car Registration", () => {
  //   const plates = ["DN09HRM", "BW57BOW", "KT17DLX", "SG18HTN"];

  //   const details = ["DN09HRM", "BMW", "320D Se", "Black", "2009"];

  //   const errorMessage = "Vehicle Not Found";

  //   for (let i = 0; i < plates.length; i++) {
  //     cy.visit("/");
  //     cy.get("#vrm-input").type(plates[i]);
  //     cy.get(".jsx-1164392954 ").click();
  //     cy.wait(3000)


  //       cy.get('.jsx-2222053380').then((body) => {
  //         cy.wait(2000)
  //           if (body.text().includes('View Mileage History')){
  //               cy.log(`${plates[i]} is a valid registration plate`)
                
  //           } else {
  //               cy.log(`${plates[i]} is not a valid registration plate`)
  //           }
  //       })

  //       cy.wait(2000)
  //       console.log(plates[i])
  //   }

  // });

    it.skip("Tesing car registration", () => {
      
      const plates = ["DN09HRM", "BW57BOW", "KT17DLX", "SG18HTN"];
      const validPlateMessage = "View Mileage History"

      // for (let i = 0; i < plates.length; i++){
      //   cy.visit("/");
      //   cy.get("#vrm-input").type(plates[i]);
      //   cy.get(".jsx-1164392954 ").click();
      //   cy.wait(5000)

      //   cy.get('body').then((body) => {
      //     cy.wait(2000)
      //     if (body.text().includes(validPlateMessage)){
      //       cy.log(`${plates[i]} is a valid registration plate`)
      //     } else {
      //       cy.log(`${plates[i]} is not a valid registration plate`)

      //     }

      //   })
      // }

      for (let i=0;i<plates.length;i++){
        cy.visit("/");
        cy.get("#vrm-input").type(plates[i]);
        cy.get(".jsx-1164392954 ").click();
        cy.wait(5000)

        cy.get('#m > div.jsx-79705764 > div:nth-child(6) > div.jsx-1843467667 > div > span > div.jsx-1300138692 > dl:nth-child(2) > dd').then(make => {
          const validMake = make.text() + ',' + make.text()
          cy.log(validMake)
        })

        cy.get('#m > div.jsx-79705764 > div:nth-child(6) > div.jsx-1843467667 > div > span > div.jsx-1300138692 > dl:nth-child(3) > dd').then(model => {
          const validModel = model.text()
          cy.log(validModel)
        })

      }
    })


    it("Testing car registration v2", () => {
      
      const plates = ["DN09HRM", "BW57BOW", "KT17DLX", "SG18HTN"];
      const validPlateMessage = "View Mileage History";
      const dummy = ['DN09HRM,BMW,320D Se,Black,2009','','KT17DLX,Skoda,Superb Sportline Tdi S-A,White,2017','SG18HTN,Volkswagen,Golf Se Navigation Tsi Evo,White,2018'];

      for (let i = 0; i < plates.length; i++){
        cy.visit("/");
        cy.get("#vrm-input").type(plates[i]);
        cy.get(".jsx-1164392954 ").click();
        cy.wait(5000)

        cy.get('body').then((body) => {
          cy.wait(2000)
          if (body.text().includes(validPlateMessage)){
            cy.log(`${plates[i]} is a valid registration plate`)
            const x = body.find('#m > div.jsx-79705764 > div:nth-child(6) > div.jsx-1843467667 > div > span > div.jsx-1300138692 > dl:nth-child(1) > dd').text()
            + ',' + body.find('#m > div.jsx-79705764 > div:nth-child(6) > div.jsx-1843467667 > div > span > div.jsx-1300138692 > dl:nth-child(2) > dd').text()
            + ',' + body.find('#m > div.jsx-79705764 > div:nth-child(6) > div.jsx-1843467667 > div > span > div.jsx-1300138692 > dl:nth-child(3) > dd').text()
            + ',' + body.find('#m > div.jsx-79705764 > div:nth-child(6) > div.jsx-1843467667 > div > span > div.jsx-1300138692 > dl:nth-child(4) > dd').text()
            + ',' + body.find('#m > div.jsx-79705764 > div:nth-child(6) > div.jsx-1843467667 > div > span > div.jsx-1300138692 > dl:nth-child(5) > dd').text()
            cy.log(x)

          if(x == dummy[i]){
            cy.log(`${plates[i]} matches the output`)
          } else {
            cy.log(`${plates[i]} does not match the output`)
          }
          } else {
            cy.log(`${plates[i]} is not a valid registration plate`)

          }

        })
      }

    })
});


          // for (let i=0;i<plates.length;i++){
      //   cy.visit("/");
      //   cy.get("#vrm-input").type(plates[i]);
      //   cy.get(".jsx-1164392954 ").click();
      //   cy.wait(5000)

      //   cy.get('body').then(attr => {
      //     const x = attr.find('#m > div.jsx-79705764 > div:nth-child(6) > div.jsx-1843467667 > div > span > div.jsx-1300138692 > dl:nth-child(1) > dd').text()
      //               + ',' + attr.find('#m > div.jsx-79705764 > div:nth-child(6) > div.jsx-1843467667 > div > span > div.jsx-1300138692 > dl:nth-child(2) > dd').text()
      //               + ',' + attr.find('#m > div.jsx-79705764 > div:nth-child(6) > div.jsx-1843467667 > div > span > div.jsx-1300138692 > dl:nth-child(3) > dd').text()
      //               + ',' + attr.find('#m > div.jsx-79705764 > div:nth-child(6) > div.jsx-1843467667 > div > span > div.jsx-1300138692 > dl:nth-child(4) > dd').text()
      //               + ',' + attr.find('#m > div.jsx-79705764 > div:nth-child(6) > div.jsx-1843467667 > div > span > div.jsx-1300138692 > dl:nth-child(5) > dd').text()
      //     cy.log(x)

      //     if(x == dummy[i]){
      //       cy.log(`${plates[i]} matches the output`)
      //     } else {
      //       cy.log(`${plates[i]} does not match the output`)
      //     }

      //   })


      // }


      // Verification that the registration plate information displayed matches the registration plate submitted
      // if(cy.contains('Vehicle Not Found') === true){
      //     console.log(plates[i] + ' is not a valid registration plate')
      // } else {

    //   if (cy.get(".jsx-3496807389").length > 0) {
    //     cy.get(".jsx-3807182525 ").should("contain", "Vehicle Identity");
    //     cy.get(".jsx-1162687698 ").should("contain", "Registration");
    //     cy.get(".jsx-3496807389").should("contain", plates[i]);
    //   } else if (cy.get("body").contains("Vehicle Not Found")) {
    //     cy.log("this is not a valid registration ");
    //     plates.splice(i, 1);
    //   }

        // cy.get('body').then(body => {
        //     console.log(body.find('.jsx-3496807389'))
        //     if (body.find('.jsx-2427602283').length > 0){
        //         console.log(`${plates[i]} is not a valid registration plate`)
        //     } else {
        //         console.log(`${plates[i]} is a valid registration plate`)
        //     }
        // })

    
        // cy.get('body').then(body => {
        //     if(body.find('.jsx-1162687698').length > 0) {
               
        //         cy.log('This is valid')
        //     } else {
        //         cy.log('This is invalid')
        //     }
        // })

        // cy.get('body').then((el) => {
        //     el.find('jsx-1162687698')
        //     if(Cypress.dom.isVisible(el) === true){
        //         console.log(`${plates[i]} is invalid`)
        //     } else {
        //         console.log(`${plates[i]} is valid`)
        //     }
        // })

        // cy.get('.jsx-3496807389').then((element) => {
        //     if(Cypress.dom.isFocused(element) === true){
        //         cy.log('valid plate')
        //     } else {
        //         cy.log('invalid plate')
        //     }
        // })

        // cy.get('.jsx-4054927204 ').then(element => {
        //     if(Cypress.dom.isVisible(element) === true){
        //         cy.log('The element exists')
        //     } else {
        //         cy.log('Element does not exist')
        //     }
        // })

        // .jsx-2222053380
