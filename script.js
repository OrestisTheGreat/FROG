const startButton =
    document.getElementById("startButton");


const gameArea =
    document.getElementById("gameArea");


const countryName =
    document.getElementById("countryName");


const map =
    document.getElementById("map");


const frog =
    document.getElementById("frog");


const birthday =
    document.getElementById("birthday");


const trivia =
    document.getElementById("trivia");



let currentCountry = "Belgium";



startButton.addEventListener("click", function() {

    startButton.style.display = "none";

    gameArea.style.display = "block";


    drawMap();

    showCountry();

});




function drawMap() {


    map.innerHTML = "";


    Object.keys(countries).forEach(function(country) {


        const node = document.createElement("button");


        node.className = "countryNode";


        node.textContent = "🐸 " + country;


        node.style.left =
            countries[country].position.x + "px";


        node.style.top =
            countries[country].position.y + "px";



        node.addEventListener("click", function() {


            if (
                countries[currentCountry]
                .neighbours
                .includes(country)
            ) {

                currentCountry = country;

                showCountry();

            }

        });


        map.appendChild(node);


    });


}




function showCountry() {


    countryName.textContent =
        "🇪🇺 " + currentCountry;


    frog.textContent =
        countries[currentCountry].frog;


    birthday.textContent =
        countries[currentCountry].birthdayWish;


    trivia.textContent =
        "📚 Trivia: " +
        countries[currentCountry].trivia;


}
