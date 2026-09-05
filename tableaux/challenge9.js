const prompt = require('prompt-sync')()
function Rechercher_Element(n, element_chercher)
{
    tabel = []
    for(let i = 0 ; i < n ; i++)
    {
        let a = prompt(`veullier entrer nombre ${i + 1} :` )
        tabel.push(Number(a))
    }
    for (let i of tabel)
    {
        if (i == element_chercher)
            return "Trouver"
    }
    return "non trouver"
}

let n = prompt("Veuiller saisire le nombre d'element d un tableaux : ")
let element = prompt("veuiller entrer valeur souhite a chercher : ")

console.log(Rechercher_Element(n,element))