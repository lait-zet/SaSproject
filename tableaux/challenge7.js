const prompt = require('prompt-sync')()
function  Copie_Tableau(n)
{
    let tabel = []
    for(let i = 0 ; i < n ; i++)
    {
        let a = prompt(`veullier entrer nombre ${i + 1} :` )
        tabel.push(Number(a))
    }
    console.log(`cela d'origine: ${tabel}`)
    let copietable = []
    for(let j = 0 ; j < n ; j++)
    {
        copietable.push(tabel[j])
    }
    return copietable 

}
let n = prompt("Veuiller saisire le nombre d'element d un tableaux : ")
let copietable = Copie_Tableau(n)

console.log(`cela table copied  ${copietable}`)




