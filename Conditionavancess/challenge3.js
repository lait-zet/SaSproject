const prompt = require('prompt-sync')();

let accordes = parseInt(prompt("nombre de jours accordes"));
let utilises = parseInt(prompt("nombre de jours utilises"));
let statut = parseInt(prompt("statut : 0 temps partiel, 1 temps plein"));

let restant;

if (utilises > accordes) {
    console.log("alerte : jours utilises depasses");
} 
else {
    if (statut == 1) {
        restant = accordes - utilises;
    }

    else if (statut == 0) {
        restant = accordes / 2 - utilises;
    }
    else
    {
        console.log("nombre de status n est pas indique");
    }

    console.log("jours restants : " + restant);
}