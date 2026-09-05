const prompt = require('prompt-sync')()
{
    let tabel = []
    for(let i = 0 ; i < n ; i++)
    {
        let a = prompt(`veullier entrer nombre ${i} :` )
        tabel.push(Number(a))
    }
    return tabel
}

let n = prompt("Veuiller saisire le nombre d'element d un tableaux : ")

console.log(typeof(Saisire_remplire_Table(n)))
