const input = require('prompt-sync')();

let n = Number(input("entre quelque nombre entier : "))

function Compte_Rebous(n)
{
    while(n >= 0)
    {
        console.log(n)
        n--
    }
}

Compte_Rebous(n)