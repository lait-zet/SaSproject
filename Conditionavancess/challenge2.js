const prompt = require('prompt-sync')();

let age = parseInt(prompt("Entrez votre age"));
let type = parseInt(prompt("Type de voiture : 1 sportive, 2 utilitaire, 3 familiale"));
let accidents = parseInt(prompt("Nombre d'accidents"));
let prime = parseInt(prompt("Entrez la prime de base"));

if (age < 25) {
    prime = prime * 1.5;
}

if (age > 65) {
    prime = prime * 1.2;
}

if (type == 1) {
    prime = prime * 2;
}

if (type == 2) {
    prime = prime * 1.2;
}

if (type == 3) {
    prime = prime * 1.1;
}

if (accidents > 1) {
    prime = prime * 1.3;
}

console.log("Prime d'assurance : " + prime);