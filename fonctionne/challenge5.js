const input = require('prompt-sync')();

let n = Number(input("entre quelque nombre : "))


function CalculFactoriel(n)
{
    let result = 1
    while(n >= 1)
    {
        result *= n
        n--
    }
    return result
}

console.log(CalculFactoriel(n))