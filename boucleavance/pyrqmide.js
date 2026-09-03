// Import prompt-sync for user input
const input = require('prompt-sync')();


let n = parseInt(input("Entrer votre nombre : "));

for (let i = 1; i <= n; i++) {
    let sp = "";

    
    for (let j = 1; j <= n - i ; j++) {
        sp += " ";
    }

    for (let k = 0; k < (2 * i) - 1; k++) {
        sp += "*";
    }

    console.log(sp);
}