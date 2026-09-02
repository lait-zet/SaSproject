const input = require('prompt-sync')();

let n = Number(input("entre quelque nombre : "))
let result = 0;
while (n > 0){
    result += n ;
    n--;
}
console.log(result)

