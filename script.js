// Write your JavaScript code here!

// submitButton.getElementById("formSubmit").addEventListener("click", function(event){
//    event.preventDefault()
// });

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
   response.json().then( function(json) {

      function selectRandomEntry(arr) {
         let index = Math.floor(Math.random()*json.length);
         return index;
       }
       let index = selectRandomEntry(json);

      const div = document.getElementById("missionTarget");
         
         // div.innerHTML = `
         // <h2>Mission Destination</h2>
         //  <ol>
         //     <li>Name: ${json[5].name}</li>
         //     <li>Diameter: ${json[5].diameter}</li>
         //     <li>Star: ${json[5].star}</li>
         //     <li>Distance from Earth: ${json[5].distanceFromEarth}</li>
         //     <li>Number of Moons: ${json[5].numberOfMoons}</li>
         //  </ol>
         //  <img src="${json[5].image}">
         //    `;

            div.innerHTML = `
         <h2>Mission Destination</h2>
          <ol>
             <li>Name: ${json[index].name}</li>
             <li>Diameter: ${json[index].diameter}</li>
             <li>Star: ${json[index].star}</li>
             <li>Distance from Earth: ${json[index].distance}</li>
             <li>Number of Moons: ${json[index].moons}</li>
          </ol>
          <img src="${json[index].image}">
            `;
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      console.log(pilotNameInput.value);
      console.log(typeof(fuelLevelInput.value));

      document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value} Ready`;
      document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value} Ready`;

      if (pilotNameInput.value === "" || copilotNameInput.value === "" || !isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)) {
         alert("All fields are required!");
      }
      else if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value) || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
      }
      else if (fuelLevelInput.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
      }
      else if (cargoMassInput.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
         document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color = "red";
      }else{
         document.getElementById("fuelStatus").innerHTML = "Fuel level is high enough for launch";
         document.getElementById("cargoStatus").innerHTML = "Cargo mass is low enough for launch";
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
         document.getElementById("launchStatus").style.color = "green";
      }
      event.preventDefault();
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
