const startButton = document.getElementById("startButton");

const gameArea = document.getElementById("gameArea");

const countryName = document.getElementById("countryName");

const map = document.getElementById("map");

const frog = document.getElementById("frog");

const birthday = document.getElementById("birthday");

const trivia = document.getElementById("trivia");


let currentCountry = "Belgium";



startButton.addEventListener("click", function () {

    startButton.style.display = "none";

    gameArea.style.display = "block";


    drawMap();

    showCountry();

});





function drawMap() {


    map.innerHTML = "";


    Object.keys(mapPositions).forEach(function(country) {


        const node = document.createElement("button");


        node.className = "countryNode";


        node.textContent = "🐸";


        node.dataset.country = country;



        node.style.left =
            (mapPositions[country].x / 5) + "px";


        node.style.top =
            (mapPositions[country].y / 5) + "px";



        node.addEventListener("click", function () {


            if (canTravelTo(country)) {


                currentCountry = country;


                showCountry();


                drawMap();


            }


        });



        map.appendChild(node);


    });



    addVanessa();



}





function addVanessa() {


    const player = document.createElement("div");


    player.className = "player";


    player.textContent = "👩🏻‍🦱";


    player.style.left =
        (mapPositions[currentCountry].x / 5 + 20) + "px";


    player.style.top =
        (mapPositions[currentCountry].y / 5 - 20) + "px";


    map.appendChild(player);


}





function canTravelTo(country) {


    return countries[currentCountry]
        .neighbours
        .includes(country);


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


    });


}
