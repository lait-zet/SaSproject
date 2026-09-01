const input = require('prompt-sync')();


const a = parseFloat(input("Entrer la valeur de a : "));
const b = parseFloat(input("Entrer la valeur de b : "));
const c = parseFloat(input("Entrer la valeur de c : "));


const delta = b ** 2 - (4 * a * c);

if (delta > 0) {
    
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("L'equation admet deux solutions reelles distinctes :");
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
} else if (delta === 0) {
   
    let x = -b / (2 * a);
    console.log("L'equation admet une solution reelle double :");
    console.log(`x = ${x}`);
} else {
    console.log("L'equation n'admet pas de solution reelle.");
}