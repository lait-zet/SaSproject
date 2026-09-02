const input = require('prompt-sync')();

let b = Number(input("entre quelque nombre base: "))
let e = Number(input("entre quelque nombre exposant: "))

let result = 1;
while (e > 0){
    result *= b;
    e--;
}
console.log(result)

