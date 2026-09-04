const input = require('prompt-sync')();

const userInput = input("veuillez ecrit votre preimiere string : ")
let i = userInput.length - 1
let inversestr = "";
while(i >= 0)
{
    inversestr += userInput[i]
    i--
}
console.log(inversestr)