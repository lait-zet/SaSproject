const input = require('prompt-sync')();

let n = Number(input("entre quelque nombre entier : "))

function status(n)
{
    if(n % 2 == 0)
        return true
    else
        return false
}

console.log(status(n))

