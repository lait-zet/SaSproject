const input = require('prompt-sync')();

const userInput1 = input("veuillez entrer premiere caracter : ")
const userInput2 = input("veuillez entrer deuxieme caracter : ")

if (userInput1 > userInput2 || userInput1 < userInput2)
{
    console.log("les deux caracter sont different")
}
else
    console.log("les deux caracter sont identique")