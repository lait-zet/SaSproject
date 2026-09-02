const prompt = require('prompt-sync')();
let salaire = parseInt(prompt("entrez le salaire de base"));
let heures = parseInt(prompt("entrez les heures supplementaires"));
let poste = parseInt(prompt("poste : 1 junior, 2 senior"));

let total;

if (poste == 1) {
    total = salaire + salaire * 0.1 + heures * 1.5;
}
else if (poste == 2) {
    total = salaire + salaire * 0.2 + heures * 1.5;
}

console.log("salaire total : " + total + " euros");