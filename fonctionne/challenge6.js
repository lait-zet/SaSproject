const input = require('prompt-sync')();

let n = Number(input("entre quelque nombre entier : "))


function Fibonacci(n)
{
    if(n == 0)
        return 0
    if (n == 1)
    {
        return 
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
    return f
}

console.log(Fibonacci(n))
