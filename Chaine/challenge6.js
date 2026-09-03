const input = require('prompt-sync')();

const userInput1 = input("veuillez entrer chaines de caraters : ")
const userInput2 = input("veuillez entrer le caracter shouite a trouvez : ")

let i = 0
let count = 0
while (userInput1[i] != undefined)
{
    if (userInput1[i] == userInput2)
    {
        count++
    }
    i++
}
console.log(count)