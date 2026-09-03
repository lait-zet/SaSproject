const input = require('prompt-sync')();

let a = Number(input("Veuiller entrer un premiere nombre : "))
let b = Number(input("Veuiller entrer un deuxieme nombre : "))

const option = Number(input("Entre un option \n 1 . Somme \n 2. Substraction \n 3. Multiplication \n 4. Division \n 5. Quitter \n "))

function Sum(a , b)
{
    somme = a + b
    return somme;
}

function Division(a , b)
{
    division = a / b
    return division
}

function Soubstraction(a , b)
{
    substrct = a - b
    return substrct
}
function Multiplication(a , b)
{
    multiplication = a * b
    return multiplication
}

switch (option) {
    case 1:
        console.log("Somme:", Sum(a, b));
        break;
    case 2:
        console.log("Multiplication:", Multiplication(a, b));
        break;
    case 3:
        console.log("Soustraction:", Soubstraction(a, b));
        break;
    case 4:
        console.log("Division:", Division(a, b));
        break;
    case 5:
        console.log("Fin du programme");
        break;
    default:
        console.log("Option non valide");
    }