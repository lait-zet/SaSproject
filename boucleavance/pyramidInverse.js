const input = require('prompt-sync')();

n = parseInt(input("entrer votre nombre :"))


for(let i = n ; i >= 1 ; i--)
{
    space = "";
    for (let j = 0 ; j < n - i ; j++)
    {
        space += " "
    }
    for (let j = 0 ; j < (2 * i) - 1 ; j++)
    {
        space += "*"
    }
    console.log(space)
}