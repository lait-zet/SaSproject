const input = require('prompt-sync')();
let date = input("Entrez une date :");

let d = date.split("/");

let jour = d[0];
let mois = d[1];
let annee = d[2];

if (mois == "09") {
    mois = "Septembre";
}
else {
    console.log("indique vrais mois")
}
console.log(jour + "-" + mois + "-" + annee);

