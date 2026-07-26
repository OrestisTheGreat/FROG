const countries = {

    Belgium: {
        frog: "Bart De Wever 🐸",
        birthdayWish: "Gelukkige verjaardag! May your year be sweeter than Belgian chocolate and smoother than a train arriving on time... somewhere in Europe.",
        trivia: "Belgium has more castles per square kilometre than almost any country in the world.",
        neighbours: ["France", "Netherlands", "Luxembourg", "Germany", "Ireland"]
    },

    France: {
        frog: "Emmanuel Macron 🐸",
        birthdayWish: "Joyeux anniversaire! May your year be filled with great food, beautiful adventures, and not a single queue at the Eiffel Tower.",
        trivia: "The Eiffel Tower grows about 15 cm taller every summer because steel expands in the heat.",
        neighbours: ["Belgium", "Luxembourg", "Germany", "Italy", "Spain", "Ireland"]
    },

    Germany: {
        frog: "Friedrich Merz 🐸",
        birthdayWish: "Alles Gute! May your year run as smoothly as a well-engineered German machine (with only the occasional delayed train).",
        trivia: "Germany once consisted of hundreds of tiny kingdoms, duchies, bishoprics, and free cities under the Holy Roman Empire.",
        neighbours: ["Denmark", "Netherlands", "Belgium", "Luxembourg", "France", "Austria", "Czechia", "Poland"]
    },

    Netherlands: {
        frog: "Rob Jetten 🐸",
        birthdayWish: "Gefeliciteerd! May your year stay above water and always have the wind at your back.",
        trivia: "The Netherlands was once ruled by the Dukes of Burgundy, then the Habsburgs, before winning its independence from Spain.",
        neighbours: ["Belgium", "Germany"]
    },

    Luxembourg: {
        frog: "Luc Frieden 🐸",
        birthdayWish: "Happy birthday! May your year be small on worries but grand on adventures—just like Luxembourg.",
        trivia: "Nearly half of Luxembourg's workforce commutes from neighbouring countries every day.",
        neighbours: ["Belgium", "France", "Germany"]
    },

    Denmark: {
        frog: "Mette Frederiksen 🐸",
        birthdayWish: "Tillykke! May your year be full of hygge, happiness, and plenty of LEGO-worthy memories.",
        trivia: "The LEGO brick was invented in Denmark, and the word 'LEGO' comes from the Danish phrase 'leg godt' ('play well').",
        neighbours: ["Germany", "Sweden"]
    },

    Ireland: {
        frog: "Micheál Martin 🐸",
        birthdayWish: "Lá breithe sona! May your year be filled with good friends, good stories, and a little Irish luck.",
        trivia: "Halloween as we know it began in ancient Ireland with the Celtic festival of Samhain.",
        neighbours: ["France", "Belgium"]
    },

    Spain: {
        frog: "Pedro Sánchez 🐸",
        birthdayWish: "¡Feliz cumpleaños! May your year be as lively as a Spanish fiesta and as bright as the Mediterranean sun.",
        trivia: "Spain hosts La Tomatina, where tens of thousands of people throw tomatoes at each other just for fun.",
        neighbours: ["Portugal", "France"]
    },

    Portugal: {
        frog: "Luís Montenegro 🐸",
        birthdayWish: "Feliz aniversário! May your year bring calm seas, sunny days, and adventures worth singing about.",
        trivia: "Portugal's cork forests produce over half of the world's cork.",
        neighbours: ["Spain"]
    },

    Italy: {
        frog: "Giorgia Meloni 🐸",
        birthdayWish: "Buon compleanno! May your year be filled with unforgettable journeys, amazing food, and perfect gelato weather.",
        trivia: "Italy has a free public wine fountain that's open 24 hours a day.",
        neighbours: ["France", "Austria", "Slovenia", "Malta", "Greece"]
    },

    Austria: {
        frog: "Christian Stocker 🐸",
        birthdayWish: "Alles Gute! May your year be as harmonious as a Viennese waltz and as refreshing as Alpine air.",
        trivia: "Austria is now a small country, but the Habsburgs once ruled one of Europe's largest empires.",
        neighbours: ["Germany", "Czechia", "Slovakia", "Hungary", "Slovenia", "Italy"]
    },

    Czechia: {
        frog: "Andrej Babiš 🐸",
        birthdayWish: "Všechno nejlepší! May your year be full of fairy-tale adventures and legendary celebrations.",
        trivia: "Czechs drink more beer per person than any other country.",
        neighbours: ["Germany", "Poland", "Slovakia", "Austria"]
    },

    Poland: {
        frog: "Donald Tusk 🐸",
        birthdayWish: "Wszystkiego najlepszego! May your year be full of courage, joy, and unforgettable memories.",
        trivia: "The Polish-Lithuanian Commonwealth once stretched from the Baltic almost to the Black Sea.",
        neighbours: ["Germany", "Czechia", "Slovakia", "Lithuania"]
    },

    Slovakia: {
        frog: "Robert Fico 🐸",
        birthdayWish: "Všetko najlepšie! May your year reach new heights like the Tatras.",
        trivia: "Slovakia has hundreds of caves, including spectacular ice caves open to visitors.",
        neighbours: ["Czechia", "Austria", "Hungary", "Poland"]
    },

    Hungary: {
        frog: "Péter Magyar 🐸",
        birthdayWish: "Boldog születésnapot! May your year be warmed by good friends and Hungary's famous thermal baths.",
        trivia: "Budapest sits atop more than 100 thermal springs, earning it the nickname 'City of Spas'.",
        neighbours: ["Austria", "Slovakia", "Romania", "Croatia", "Slovenia"]
    },

    Slovenia: {
        frog: "Janez Janša 🐸",
        birthdayWish: "Vse najboljše! May your year be as peaceful as Lake Bled and as adventurous as the Alps.",
        trivia: "Slovenia was the first former Yugoslav republic to join the euro.",
        neighbours: ["Austria", "Italy", "Croatia", "Hungary"]
    },

    Croatia: {
        frog: "Andrej Plenković 🐸",
        birthdayWish: "Sretan rođendan! May your year be filled with sunshine, crystal-clear seas, and island adventures.",
        trivia: "The necktie originated in Croatia - the word cravat comes from Croat.",
        neighbours: ["Slovenia", "Hungary"]
    },

    Greece: {
        frog: "Orestis the Great 👑🐸",
        birthdayWish: "Ad multos annos! While you were travelling around Europe... I became King of Greece. Please don't overthrow me. Also... could you ask Leonor to date me once you visit Spain? 😉",
        trivia: "Greece has around 6,000 islands and islets - but only about 200 are inhabited.",
        neighbours: ["Bulgaria", "Cyprus", "Italy"]
    },

    Bulgaria: {
        frog: "Rumen Radev 🐸",
        birthdayWish: "Честит рожден ден! May your year bloom with happiness like the famous Rose Valley.",
        trivia: "The first Bulgarian Empire once stretched from the Black Sea to the Adriatic.",
        neighbours: ["Greece", "Romania"]
    },

    Romania: {
        frog: "Nicușor Dan 🐸",
        birthdayWish: "La mulți ani! May your year be full of legendary adventures and mountain-high happiness.",
        trivia: "Romania is home to Europe's largest population of brown bears outside Russia.",
        neighbours: ["Hungary", "Bulgaria"]
    },

    Lithuania: {
        frog: "Gitanas Nausėda 🐸",
        birthdayWish: "Su gimtadieniu! May your year shine brightly and bring plenty of reasons to celebrate.",
        trivia: "Lithuania was the last pagan country in Europe to officially adopt Christianity.",
        neighbours: ["Latvia", "Poland"]
    },

    Latvia: {
        frog: "Andris Kulbergs 🐸",
        birthdayWish: "Daudz laimes! May your year be as refreshing as a walk through Latvia's forests.",
        trivia: "Over half of Latvia is covered by forests, making it one of Europe's greenest countries.",
        neighbours: ["Lithuania", "Estonia"]
    },

    Estonia: {
        frog: "Kristen Michal 🐸",
        birthdayWish: "Palju õnne! May your year be smart, smooth, and just a little bit magical.",
        trivia: "Estonia pioneered online voting and offers almost all government services digitally.",
        neighbours: ["Latvia", "Finland"]
    },

    Sweden: {
        frog: "Ulf Kristersson 🐸",
        birthdayWish: "Grattis! May your year be full of fika breaks, happiness, and exciting adventures.",
        trivia: "Sweden was once one of Europe's great powers before its defeat at the Battle of Poltava in 1709.",
        neighbours: ["Finland", "Denmark"]
    },

    Finland: {
        frog: "Petteri Orpo 🐸",
        birthdayWish: "Hyvää syntymäpäivää! May your year be as relaxing as a Finnish sauna and as peaceful as a summer lake.",
        trivia: "Finland has around 188,000 lakes and more saunas than cars.",
        neighbours: ["Sweden", "Estonia"]
    },

    Cyprus: {
        frog: "Nikos Christodoulides 🐸",
        birthdayWish: "Χρόνια πολλά! May your year be filled with sunshine, warm seas, and endless smiles.",
        trivia: "Cyprus is one of the few countries whose national flag shows a map of the country itself.",
        neighbours: ["Greece"]
    },

    Malta: {
        frog: "Robert Abela 🐸",
        birthdayWish: "Għeluq is-sena t-tajjeb! May your year be as bright as the Maltese sunshine and as unforgettable as its history.",
        trivia: "Malta's prehistoric temples are older than Stonehenge and even the Egyptian pyramids.",
        neighbours: ["Italy"]
    }

};


