const prompt = require('prompt-sync')();

let age = parseInt(prompt("entrez votre age"));
let annees = parseInt(prompt("antrez les annees de cotisation"));
let montant = parseInt(prompt("entrez le montant epargne"));

let bonus = 0;

if (age >= 65 && annees >= 30 && montant >= 100000) {
    console.log("plan complet avec pension elevee");
} 
else if (age >= 65 && annees >= 20 && montant >= 50000) {
    console.log("plan partiel avec pension moyenne");
} 
else {
    console.log("Plan epargne non encore disponible");
}

if (montant > 50000) {
    bonus = (montant - 50000) / 10000 * 5;
}

console.log("bonus : " + bonus + "%");