const input = require('prompt-sync')();

const n = parseInt(input("entrer votre nombre :"))
let i = 1
while(i < n)
{
    if (i % 2 != 0)
    {
        let check = i - 1
        let isprime = 1
        for (let j = 2 ; j <= check ; j++)
        {
            if(i % j == 0)
            {
                isprime = 0
                break;
            }
        }
        if (isprime)
        {
            console.log(i)
        }
    }
    i++
}


