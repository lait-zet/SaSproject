const input = require('prompt-sync')();

const userInput = input("veuillez ecrit votre preimiere string : ")

let i = 0
while(userInput[i] !== undefined)
{
    i++
}

let inversestr = "";
i--
while(i >= 0)
{
    inversestr += userInput[i]
    i--
}
console.log(inversestr)