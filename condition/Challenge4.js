const input = require('prompt-sync')();

var vitesse_km = Number(input('vitesse en kilomètres par heure (km/h) : '));

console.log(vitesse_km * 0.27778)