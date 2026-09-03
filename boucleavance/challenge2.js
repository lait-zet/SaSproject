const input = require('prompt-sync')();

n = parseInt(input("entrer votre nombre :"))

let i = 0;
let lenL = 1
while (i < n - 1 )
{
    lenL += 2
    i++
}
lenL++
var p = 1
var s = 0

for (let m = 0; m < n ; m++)
{
    for(let j = 0; j < lenL ; j++)
    {
        let point_rempli = Math.floor((lenL / 2)) - s
        if (j == point_rempli )
        {
            let k = 0
            while(k < p)
            {
                process.stdout.write("*");
                k++
            }
            j += p
            p += 2
            s++
        }
     process.stdout.write(" ");
    }
    console.log()
}