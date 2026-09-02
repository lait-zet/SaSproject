const input = require('prompt-sync')();

const nl =parseInt(input("entrer le nombre de ligne "))
let lenc = 1
let i = 1
while(i < nl)
{
    lenc += 2
    i++
}
console.log(lenc)

// for(let i = 0 ; i <= nl ; i++)
// {
//     for(let j = 0 ; i <)
// }