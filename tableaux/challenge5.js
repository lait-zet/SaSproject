const prompt = require('prompt-sync')()
function Multiplication_elments(n, facteur)
{
    let tabel = []
    for(let i = 0 ; i < n ; i++)
    {
        let a = prompt(`veullier entrer nombre ${i + 1} :` )
        tabel.push(Number(a))
    }
    for (let j = 0 ; j < n ; j++)
        tabel[j] *= facteur
    return tabel
}

let n = prompt("Veuiller saisire le nombre d'element d un tableaux : ")
let f = prompt("Veuiller entrer facteur a multuplie : ")
console.log(Multiplication_elments(n,f))


