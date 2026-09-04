const prompt = require('prompt-sync')()
function Saisire_remplire_Table(n)
{
    let tabel = []
    for(let i = 0 ; i < n ; i++)
    {
        let a = prompt(`veullier entrer nombre ${i + 1} :` )
        tabel.push(Number(a))
    }
    let result = 0
    for(let j of tabel)
        result += j
    return result
}

let n = prompt("Veuiller saisire le nombre d'element d un tableaux : ")

console.log(Saisire_remplire_Table(n))
