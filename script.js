// Write your JavaScript code here!

// submitButton.getElementById("formSubmit").addEventListener("click", function(event){
//    event.preventDefault()
// });

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      console.log(pilotNameInput.value);
      console.log(typeof(fuelLevelInput.value));

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || !isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)) {
         alert("All fields are required!");
      }
      if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value) || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
      }
      

      // Number.isNaN = Number.isNaN || function isNaN(input) {
      //    return typeof input === 'number' && input !== input;
   //   }
      
   }); 
      
   });



// /* This block of code shows how to format the HTML once you fetch some planetary JSON!
// <h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${}</li>
//    <li>Diameter: ${}</li>
//    <li>Star: ${}</li>
//    <li>Distance from Earth: ${}</li>
//    <li>Number of Moons: ${}</li>
// </ol>
// <img src="${}">
// */
