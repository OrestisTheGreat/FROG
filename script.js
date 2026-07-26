const startButton =
    document.getElementById("startButton");


const gameArea =
    document.getElementById("gameArea");


const map =
    document.getElementById("map");



const countryName =
    document.getElementById("countryName");



const moveCounter =
    document.getElementById("moveCounter");


const visitedCounter =
    document.getElementById("visitedCounter");



const popup =
    document.getElementById("popup");


const popupCountry =
    document.getElementById("popupCountry");


const popupFrog =
    document.getElementById("popupFrog");


const popupBirthday =
    document.getElementById("popupBirthday");


const popupTrivia =
    document.getElementById("popupTrivia");


const continueButton =
    document.getElementById("continueButton");



const victory =
    document.getElementById("victory");


const finalMoves =
    document.getElementById("finalMoves");


const efficiency =
    document.getElementById("efficiency");





let currentCountry = "Belgium";


let visitedCountries = [
    "Belgium"
];


let moves = 0;



const abbreviations = {

    Belgium:"BE",
    France:"FR",
    Germany:"DE",
    Netherlands:"NL",
    Luxembourg:"LU",
    Denmark:"DK",
    Ireland:"IE",
    Spain:"ES",
    Portugal:"PT",
    Italy:"IT",
    Austria:"AT",
    Czechia:"CZ",
    Slovakia:"SK",
    Hungary:"HU",
    Slovenia:"SI",
    Croatia:"HR",
    Greece:"GR",
    Bulgaria:"BG",
    Romania:"RO",
    Lithuania:"LT",
    Latvia:"LV",
    Estonia:"EE",
    Sweden:"SE",
    Finland:"FI",
    Cyprus:"CY",
    Malta:"MT",
    Poland: "PL"

};






startButton.addEventListener(
"click",
function(){


    startButton.style.display="none";


    gameArea.style.display="block";


    drawMap();


    openPopup();


});







function drawMap(){


    map.innerHTML="";



    drawEdges();




    Object.keys(mapPositions).forEach(
    function(country){



        const node =
            document.createElement("button");



        node.className =
            "countryNode";



        if(
            visitedCountries.includes(country)
        ){

            node.classList.add("visited");

        }



        node.innerHTML =
            "🐸<br>" +
            abbreviations[country];



        node.style.left =
            mapPositions[country].x / 5 + "px";


        node.style.top =
            mapPositions[country].y / 5 + "px";




        node.addEventListener(
        "click",
        function(){


            if(
                canTravelTo(country)
            ){


                currentCountry = country;


                moves++;



                if(
                    !visitedCountries.includes(country)
                ){

                    visitedCountries.push(country);

                }



                updateStats();


                drawMap();


                openPopup();



                checkVictory();


            }


        });



        map.appendChild(node);



    });



    addVanessa();


}








function drawEdges(){



    Object.keys(countries).forEach(
    function(country){


        countries[country].neighbours.forEach(
        function(neighbour){



            const line =
                document.createElement("div");



            line.className="edge";



            const x1 =
                mapPositions[country].x / 5;


            const y1 =
                mapPositions[country].y / 5;



            const x2 =
                mapPositions[neighbour].x / 5;


            const y2 =
                mapPositions[neighbour].y / 5;




            const distance =
                Math.sqrt(
                    (x2-x1)**2 +
                    (y2-y1)**2
                );



            const angle =
                Math.atan2(
                    y2-y1,
                    x2-x1
                ) * 180 / Math.PI;



            line.style.width =
                distance + "px";



            line.style.left =
                x1 + "px";


            line.style.top =
                y1 + "px";


            line.style.transform =
                "rotate(" + angle + "deg)";



            map.appendChild(line);



        });


    });


}







function addVanessa(){



    const player =
        document.createElement("div");



    player.className="player";



    player.textContent="👧🏻";



    player.style.left =
        mapPositions[currentCountry].x / 5 + "px";



    player.style.top =
        mapPositions[currentCountry].y / 5 - 30 + "px";



    map.appendChild(player);


}







function canTravelTo(country){


    return countries[currentCountry]
        .neighbours
        .includes(country);


}








function openPopup(){


    popupCountry.textContent =
        "🇪🇺 " + currentCountry;



    popupFrog.textContent =
        countries[currentCountry].frog;



    popupBirthday.textContent =
        "🎂 " +
        countries[currentCountry].birthdayWish;



    popupTrivia.textContent =
        "📚 " +
        countries[currentCountry].trivia;



    popup.classList.remove("hidden");

    const frogSound = new Audio(
    "sounds/" + countries[currentCountry].sound
);

frogSound.play();


}






continueButton.addEventListener(
"click",
function(){

    popup.classList.add("hidden");

});


 






function updateStats(){


    moveCounter.textContent =
        moves;


    visitedCounter.textContent =
        visitedCountries.length;


}








function checkVictory(){


    if(
        visitedCountries.length === 27
    ){


        finalMoves.textContent =
            moves;



        efficiency.textContent =
            Math.round(
                (30 / moves) * 100
            )
            + "%";



        victory.classList.remove("hidden");


    }


}
