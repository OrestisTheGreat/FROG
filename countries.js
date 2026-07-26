```js
const countries = {

    Belgium: {
        frog: "Bart De Wever 🐸",
        birthdayWish: "Gelukkige verjaardag! May your year be sweeter than Belgian chocolate and smoother than a train arriving on time... somewhere in Europe.",
        trivia: "Belgium has three official languages and more castles per square kilometre than almost any other country in the world.",
        neighbours: ["France", "Netherlands", "Luxembourg", "Germany"]
    },

    France: {
        frog: "Emmanuel Macron 🐸",
        birthdayWish: "Joyeux anniversaire! May your year be filled with great food, beautiful adventures, and not a single queue at the Eiffel Tower.",
        trivia: "France is the world's most visited country, welcoming around 100 million visitors each year.",
        neighbours: ["Belgium", "Luxembourg", "Germany", "Italy", "Spain"]
    },

    Germany: {
        frog: "Friedrich Merz 🐸",
        birthdayWish: "Alles Gute! May your year run as smoothly as a well-engineered German machine (with only the occasional delayed train).",
        trivia: "Germany is home to over 20,000 castles, from medieval fortresses to fairy-tale palaces.",
        neighbours: ["Denmark", "Netherlands", "Belgium", "Luxembourg", "France", "Austria", "Czechia", "Poland"]
    },

    Netherlands: {
        frog: "Rob Jetten 🐸",
        birthdayWish: "Gefeliciteerd! May your year stay above water and always have the wind at your back.",
        trivia: "Around a quarter of the Netherlands lies below sea level, protected by one of the world's most advanced flood-control systems.",
        neighbours: ["Belgium", "Germany"]
    },

    Luxembourg: {
        frog: "Luc Frieden 🐸",
        birthdayWish: "Happy birthday! May your year be small on worries but grand on adventures—just like Luxembourg.",
        trivia: "Despite its size, Luxembourg has one of the highest GDPs per person in the world.",
        neighbours: ["Belgium", "France", "Germany"]
    },

    Denmark: {
        frog: "Mette Frederiksen 🐸",
        birthdayWish: "Tillykke! May your year be full of hygge, happiness, and plenty of LEGO-worthy memories.",
        trivia: "The LEGO brick was invented in Denmark, and the word 'LEGO' comes from the Danish phrase 'leg godt' ('play well').",
        neighbours: ["Germany"]
    },

    Ireland: {
        frog: "Micheál Martin 🐸",
        birthdayWish: "Lá breithe sona! May your year be filled with good friends, good stories, and a little Irish luck.",
        trivia: "Ireland is known as the Emerald Isle because of its famously green landscapes.",
        neighbours: []
    },

    Spain: {
        frog: "Pedro Sánchez 🐸",
        birthdayWish: "¡Feliz cumpleaños! May your year be as lively as a Spanish fiesta and as bright as the Mediterranean sun.",
        trivia: "Spain has 49 UNESCO World Heritage Sites, making it one of the most culturally rich countries in the world.",
        neighbours: ["Portugal", "France"]
    },

    Portugal: {
        frog: "Luís Montenegro 🐸",
        birthdayWish: "Feliz aniversário! May your year bring calm seas, sunny days, and adventures worth singing about.",
        trivia: "Portugal is home to the world's oldest operating bookstore, opened in Lisbon in 1732.",
        neighbours: ["Spain"]
    },

    Italy: {
        frog: "Giorgia Meloni 🐸",
        birthdayWish: "Buon compleanno! May your year be filled with unforgettable journeys, amazing food, and perfect gelato weather.",
        trivia: "Italy has more UNESCO World Heritage Sites than any other country.",
        neighbours: ["France", "Austria", "Slovenia", "Malta"]
    },

    Austria: {
        frog: "Christian Stocker 🐸",
        birthdayWish: "Alles Gute! May your year be as harmonious as a Viennese waltz and as refreshing as Alpine air.",
        trivia: "Vienna was home to musical legends including Mozart, Beethoven, Schubert, and Strauss.",
        neighbours: ["Germany", "Czechia", "Slovakia", "Hungary", "Slovenia", "Italy"]
    },

    Czechia: {
        frog: "Andrej Babiš 🐸",
        birthdayWish: "Všechno nejlepší! May your year be full of fairy-tale adventures and legendary celebrations.",
        trivia: "Czechia has over 2,000 castles and châteaux—one of the highest numbers in Europe.",
        neighbours: ["Germany", "Poland", "Slovakia", "Austria"]
    },

    Poland: {
        frog: "Donald Tusk 🐸",
        birthdayWish: "Wszystkiego najlepszego! May your year be full of courage, joy, and unforgettable memories.",
        trivia: "The world's largest brick castle, Malbork Castle, is located in Poland.",
        neighbours: ["Germany", "Czechia", "Slovakia", "Lithuania"]
    },

    Slovakia: {
        frog: "Robert Fico 🐸",
        birthdayWish: "Všetko najlepšie! May your year reach new heights like the Tatras.",
        trivia: "Slovakia has more castles and castle ruins per person than almost any other country.",
        neighbours: ["Czechia", "Austria", "Hungary"]
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
        trivia: "Over half of Slovenia is covered by forest, making it one of Europe's greenest countries.",
        neighbours: ["Austria", "Italy", "Croatia", "Hungary"]
    },

    Croatia: {
        frog: "Andrej Plenković 🐸",
        birthdayWish: "Sretan rođendan! May your year be filled with sunshine, crystal-clear seas, and island adventures.",
        trivia: "Croatia has more than 1,200 islands, although only around 50 are permanently inhabited.",
        neighbours: ["Slovenia", "Hungary"]
    },

    Greece: {
        frog: "Orestis the Great 👑🐸",
        birthdayWish: "Ad multos annos! While you were travelling around Europe... I became King of Greece. Please don't overthrow me. Also... could you ask Leonor to date me once you visit Spain? 😉",
        trivia: "Greece is the birthplace of democracy and the Olympic Games.",
        neighbours: ["Bulgaria", "Cyprus"]
    },

    Bulgaria: {
        frog: "Rumen Radev 🐸",
        birthdayWish: "Честит рожден ден! May your year bloom with happiness like the famous Rose Valley.",
        trivia: "Bulgaria is one of Europe's oldest states and has kept the same name since its founding in 681 AD.",
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
        trivia: "The geographical centre of Europe is located near Vilnius, according to one widely accepted calculation.",
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
        neighbours: ["Latvia"]
    },

    Sweden: {
        frog: "Ulf Kristersson 🐸",
        birthdayWish: "Grattis! May your year be full of fika breaks, happiness, and exciting adventures.",
        trivia: "Sweden is the birthplace of Spotify, IKEA, and the Nobel Prize.",
        neighbours: ["Finland"]
    },

    Finland: {
        frog: "Petteri Orpo 🐸",
        birthdayWish: "Hyvää syntymäpäivää! May your year be as relaxing as a Finnish sauna and as peaceful as a summer lake.",
        trivia: "Finland has around 188,000 lakes and more saunas than cars.",
        neighbours: ["Sweden"]
    },

    Cyprus: {
        frog: "Nikos Christodoulides 🐸",
        birthdayWish: "Χρόνια πολλά! May your year be filled with sunshine, warm seas, and endless smiles.",
        trivia: "According to Greek mythology, Aphrodite, the goddess of love, was born off the coast of Cyprus.",
        neighbours: ["Greece"]
    },

    Malta: {
        frog: "Robert Abela 🐸",
        birthdayWish: "Għeluq is-sena t-tajjeb! May your year be as bright as the Maltese sunshine and as unforgettable as its history.",
        trivia: "Malta's prehistoric temples are older than Stonehenge and even the Egyptian pyramids.",
        neighbours: ["Italy"]
    }

};
```

