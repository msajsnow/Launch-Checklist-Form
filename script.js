// Write your JavaScript code here!

// submitButton.getElementById("formSubmit").addEventListener("click", function(event){
//    event.preventDefault()
// });

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
            
            div.innerHTML = `
            <h2>Mission Destination</h2>
             <ol>
                <li>Name: ${json.name[5]}</li>
                <li>Diameter: ${json.diameter[5]}</li>
                <li>Star: ${json.star[5]}</li>
                <li>Distance from Earth: ${json.distanceFromEarth[5]}</li>
                <li>Number of Moons: ${json.numberOfMoons[5]}</li>
             </ol>
             <img src="${json.image[5]}">
               `;
         });
      });
   
  
   
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
      if (fuelLevelInput.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatusCheck").style.color = "red";
      }
      if (cargoMassInput.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatusCheck").style.color = "red";
      }else{
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
         document.getElementById("launchStatusCheck").style.color = "green";
      }
   }); 
});

document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} Ready`;
document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} Ready`;

   
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
