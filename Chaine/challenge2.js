const input = require('prompt-sync')();

const userInput = input("entre quel import de caractere : ")

let i = 0
while(userInput[i] !== undefined)
{
    i++
}
console.log(i)