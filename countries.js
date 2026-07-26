const countries = {

    Belgium: {
        frog: "Bart De Wever 🐸",
        sound: "frog.mp3",
        birthdayWish: "Happy birthday! By the time we finish forming a government, it'll be your next birthday.",
        trivia: "Belgium has more castles per square kilometre than almost any country in the world.",
        neighbours: ["France", "Netherlands", "Luxembourg", "Germany", "Ireland"]
    },

    France: {
        frog: "Emmanuel Macron 🐸",
        sound: "frog.mp3",
        birthdayWish: "Congratulations on your eTwinning award. Now stop collecting awards and enjoy your birthday.",
        trivia: "The Eiffel Tower grows about 15 cm taller every summer because steel expands in the heat.",
        neighbours: ["Belgium", "Luxembourg", "Germany", "Italy", "Spain", "Ireland"]
    },

    Germany: {
        frog: "Friedrich Merz 🐸",
        sound: "frog.mp3",
        birthdayWish: "Alles Gute! Your itinerary has been approved. Please proceed to your birthday in an orderly fashion.",
        trivia: "Germany once consisted of hundreds of tiny kingdoms, duchies, bishoprics, and free cities under the Holy Roman Empire.",
        neighbours: ["Denmark", "Netherlands", "Belgium", "Luxembourg", "France", "Austria", "Czechia", "Poland"]
    },

    Netherlands: {
        frog: "Rob Jetten 🐸",
        sound: "frog.mp3",
        birthdayWish: "Gefeliciteerd! Here's your tulip. Please keep your feet on the ground. The Netherlands has enough experience fighting things trying to rise above sea level.",
        trivia: "The Netherlands was once ruled by the Dukes of Burgundy, then the Habsburgs, before winning its independence from Spain.",
        neighbours: ["Belgium", "Germany"]
    },

    Luxembourg: {
        frog: "Luc Frieden 🐸",
        sound: "frog.mp3",
        birthdayWish: "Happy birthday! Don't blink or you'll accidentally leave the country.",
        trivia: "Nearly half of Luxembourg's workforce commutes from neighbouring countries every day.",
        neighbours: ["Belgium", "France", "Germany"]
    },

    Denmark: {
        frog: "Mette Frederiksen 🐸",
        sound: "frog.mp3",
        birthdayWish: "Happy birthday! Here's some LEGO. Assembly required.",
        trivia: "The LEGO brick was invented in Denmark, and the word 'LEGO' comes from the Danish phrase 'leg godt' ('play well').",
        neighbours: ["Germany", "Sweden"]
    },

    Ireland: {
        frog: "Micheál Martin 🐸",
        sound: "frog.mp3",
        birthdayWish: "Lá breithe sona! May your year be full of good music, great stories, and only the right kind of Irish luck.",
        trivia: "Halloween as we know it began in ancient Ireland with the Celtic festival of Samhain.",
        neighbours: ["France", "Belgium"]
    },

    Spain: {
        frog: "Pedro Sánchez 🐸",
        sound: "frog.mp3",
        birthdayWish: "¡Feliz cumpleaños! Also... Leonor asked me to tell you she's not interested in Orestis. Sorry.",
        trivia: "Spain hosts La Tomatina, where tens of thousands of people throw tomatoes at each other just for fun.",
        neighbours: ["Portugal", "France"]
    },

    Portugal: {
        frog: "Luís Montenegro 🐸",
        sound: "frog.mp3",
        birthdayWish: "Feliz aniversário! Welcome back! We were wondering when you'd visit us again.",
        trivia: "Portugal's cork forests produce over half of the world's cork.",
        neighbours: ["Spain"]
    },

    Italy: {
        frog: "Giorgia Meloni 🐸",
        sound: "frog.mp3",
        birthdayWish: "Happy birthday! Calories consumed on birthdays don't count. It's the law.",
        trivia: "Italy has a free public wine fountain that's open 24 hours a day.",
        neighbours: ["France", "Austria", "Slovenia", "Malta", "Greece"]
    },

    Austria: {
        frog: "Christian Stocker 🐸",
        sound: "frog.mp3",
        birthdayWish: "Alles Gute! Vienna welcomes you. Mozart, Beethoven, and Strauss were here... unfortunately they cannot hear your piano skills anymore.",
        trivia: "Austria is now a small country, but the Habsburgs once ruled one of Europe's largest empires.",
        neighbours: ["Germany", "Czechia", "Slovakia", "Hungary", "Slovenia", "Italy"]
    },

    Czechia: {
        frog: "Andrej Babiš 🐸",
        sound: "frog.mp3",
        birthdayWish: "Happy birthday! Have a beer. Yes, even for breakfast.",
        trivia: "Czechs drink more beer per person than any other country.",
        neighbours: ["Germany", "Poland", "Slovakia", "Austria"]
    },

    Poland: {
        frog: "Donald Tusk 🐸",
        sound: "frog.mp3",
        birthdayWish: "Wszystkiego najlepszego! Poland has survived partitions, invasions, and centuries of trouble. Your exams should be easier.",
        trivia: "The Polish-Lithuanian Commonwealth once stretched from the Baltic almost to the Black Sea.",
        neighbours: ["Germany", "Czechia", "Slovakia", "Lithuania"]
    },

    Slovakia: {
        frog: "Robert Fico 🐸",
        sound: "frog.mp3",
        birthdayWish: "Všetko najlepšie! May your year reach new heights like the Tatras.",
        trivia: "Slovakia has hundreds of caves, including spectacular ice caves open to visitors.",
        neighbours: ["Czechia", "Austria", "Hungary", "Poland"]
    },

    Hungary: {
        frog: "Péter Magyar 🐸",
        sound: "frog.mp3",
        birthdayWish: "Boldog születésnapot! I forgot your birthday... Anyway, more was lost at Mohács.",
        trivia: "Budapest sits atop more than 100 thermal springs, earning it the nickname 'City of Spas'.",
        neighbours: ["Austria", "Slovakia", "Romania", "Croatia", "Slovenia"]
    },

    Slovenia: {
        frog: "Janez Janša 🐸",
        sound: "frog.mp3",
        birthdayWish: "Vse najboljše! May your year be as peaceful as Lake Bled and as adventurous as the Alps.",
        trivia: "Slovenia was the first former Yugoslav republic to join the euro.",
        neighbours: ["Austria", "Italy", "Croatia", "Hungary"]
    },

    Croatia: {
        frog: "Andrej Plenković 🐸",
        sound: "frog.mp3",
        birthdayWish: "Happy birthday! Yes, we're part of the EU now. You're welcome.",
        trivia: "The necktie originated in Croatia - the word cravat comes from Croat.",
        neighbours: ["Slovenia", "Hungary"]
    },

    Greece: {
        frog: "Orestis the Great 👑🐸",
        sound: "medieval.mp3",
        birthdayWish: "Ad multos annos! While you were travelling around Europe... I became King of Greece. Please don't overthrow me. Also... could you ask Leonor to date me once you visit Spain? 😉",
        trivia: "Greece has around 6,000 islands and islets - but only about 200 are inhabited.",
        neighbours: ["Bulgaria", "Cyprus", "Italy"]
    },

    Bulgaria: {
        frog: "Rumen Radev 🐸",
        sound: "frog.mp3",
        birthdayWish: "Честит рожден ден! We know many Greeks visit Bulgaria... don't worry, we won't judge your shopping bags.",
        trivia: "The first Bulgarian Empire once stretched from the Black Sea to the Adriatic.",
        neighbours: ["Greece", "Romania"]
    },

    Romania: {
        frog: "Nicușor Dan 🐸",
        sound: "frog.mp3",
        birthdayWish: "La mulți ani! Welcome to Romania! Don't worry, the vampires only come out at night... probably.",
        trivia: "Romania is home to Europe's largest population of brown bears outside Russia.",
        neighbours: ["Hungary", "Bulgaria"]
    },

    Lithuania: {
        frog: "Gitanas Nausėda 🐸",
        sound: "frog.mp3",
        birthdayWish: "Su gimtadieniu! Lithuanian is one of the oldest living languages in the world. Good luck pronouncing your birthday wish correctly.",
        trivia: "Lithuania was the last pagan country in Europe to officially adopt Christianity.",
        neighbours: ["Latvia", "Poland"]
    },

    Latvia: {
        frog: "Andris Kulbergs 🐸",
        sound: "frog.mp3",
        birthdayWish: "Daudz laimes! Enjoy Latvia! We promise the forests are beautiful and the weather is only slightly trying to freeze you.",
        trivia: "Over half of Latvia is covered by forests, making it one of Europe's greenest countries.",
        neighbours: ["Lithuania", "Estonia"]
    },

    Estonia: {
        frog: "Kristen Michal 🐸",
        sound: "frog.mp3",
        birthdayWish: "Palju õnne! Estonia has everything online. Even your birthday cake probably has a digital version.",
        trivia: "Estonia pioneered online voting and offers almost all government services digitally.",
        neighbours: ["Latvia", "Finland"]
    },

    Sweden: {
        frog: "Ulf Kristersson 🐸",
        sound: "frog.mp3",
        birthdayWish: "Happy birthday! Have some fika. Then another fika. Then maybe another fika.",
        trivia: "Sweden was once one of Europe's great powers before its defeat at the Battle of Poltava in 1709.",
        neighbours: ["Finland", "Denmark"]
    },

    Finland: {
        frog: "Petteri Orpo 🐸",
        sound: "frog.mp3",
        birthdayWish: "Hyvää syntymäpäivää! Enjoy the sauna. Try not to get sick. Actually, maybe don't stay here too long...",
        trivia: "Finland has around 188,000 lakes and more saunas than cars.",
        neighbours: ["Sweden", "Estonia"]
    },

    Cyprus: {
        frog: "Orestis the Great 👑🐸",
        sound: "medieval.mp3",
        birthdayWish: "You look surprised... You didn't expect the Ένωσις, did you?",
        trivia: "Cyprus is one of the few countries whose national flag shows a map of the country itself.",
        neighbours: ["Greece"]
    },

    Malta: {
        frog: "Robert Abela 🐸",
        sound: "frog.mp3",
        birthdayWish: "Happy birthday! Watch your step - everything here is older than you.",
        trivia: "Malta's prehistoric temples are older than Stonehenge and even the Egyptian pyramids.",
        neighbours: ["Italy"]
    }

};


