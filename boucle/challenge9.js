const input = require('prompt-sync')();

let n = Number(input("entre quelque nombre entier : "))

if(n == 0)
{
    console.log(0)
}
if (n == 1)
{
    console.log(1)
}
let i = 1
let a = 0;
let b = 1
let f = null;
while (i < n)
{
    f = a + b 
    a = b
    b = f
    i++
}
console.log(f)