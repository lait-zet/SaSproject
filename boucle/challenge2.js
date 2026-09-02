const input = require('prompt-sync')();

let n = Number(input("entre quelque nombre : "))
let result = 1;
while (n > 0){
    result *= n ;
    n--;
}
console.log(result)

