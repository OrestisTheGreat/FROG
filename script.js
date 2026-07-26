const startButton = document.getElementById("startButton");

const gameArea = document.getElementById("gameArea");
const countryName = document.getElementById("countryName");
const message = document.getElementById("message");
const moveButtons = document.getElementById("moveButtons");


let currentCountry = "Belgium";


startButton.addEventListener("click", function () {

    startButton.style.display = "none";
    gameArea.style.display = "block";

    showCountry();

});


function showCountry() {

    countryName.textContent = "🇪🇺 " + currentCountry;


    message.textContent =
        countries[currentCountry].frog +
        " says: " +
        countries[currentCountry].birthdayWish;


    moveButtons.innerHTML = "";


    countries[currentCountry].neighbours.forEach(function(country) {

        const button = document.createElement("button");

        button.textContent = "Travel to " + country;


        button.addEventListener("click", function() {

            currentCountry = country;

            showCountry();

        });


        moveButtons.appendChild(button);

    });

}
