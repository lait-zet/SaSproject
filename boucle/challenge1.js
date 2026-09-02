const input = require('prompt-sync')();

const n = Number(input("entre quelque nombre : "))
let i = 1
let result ;
while(i <= 10){
    result = n * i;
    i++;

    console.log(result)
}
