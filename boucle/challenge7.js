const input = require('prompt-sync')();

let n = input("entre quelque nombre : ")


let output = null;
let result = "";
while(n != 0)
{
    output = n % 10
    result += `${output}`
    n = Math.floor(n / 10);
}

console.log(result)
