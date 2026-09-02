const prompt = require('prompt-sync')();

let revenu = parseInt(prompt("entrez votre revenu annuel"));
let score = parseInt(prompt("entrez votre score de credit"));
let duree = parseInt(prompt("entrez la duree du pret"));

if (revenu >= 30000 && score >= 700 && duree <= 10) {
    console.log("eligible");
}
else if (revenu >= 30000 && score >= 650 && duree <= 15) {
    console.log("eligible avec conditions");
}
else {
    console.log("non eligible");
}