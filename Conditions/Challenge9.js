const input = require('prompt-sync')();
let caractere = input("Entrez un caractere :");

if (caractere >= "a" && caractere <= "z") {
    console.log("Le caractere fait partie de l'alphabet et il est minuscule.");
} else if (caractere >= "A" && caractere <= "Z") {
    console.log("Le caractere fait partie de l'alphabet et il est majuscule.");
} else {
    console.log("Le caractère ne fait pas partie de l'alphabet.");
}