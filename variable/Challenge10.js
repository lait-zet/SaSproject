const input = require('prompt-sync')();

const rayon = Number(input("entrer le nombre de rayon "))

const Volume = (4 / 3) * Math.PI * rayon ** 3

console.log(`la volume d'un sphere est :${Volume} `)