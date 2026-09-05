const prompt = require('prompt-sync')()
function Inversion_Tableau(n)
{
    let tabel = []
    for(let i = 0 ; i < n ; i++)
    {
        let a = prompt(`veullier entrer nombre ${i + 1} :` )
        tabel.push(Number(a))
    }
    invers_table = []
    for (let j = tabel.length ; j >= 0 ; j--)
    { 
        invers_table.push(tabel[j - 1])
    }
    return invers_table    
}

let n = prompt("Veuiller saisire le nombre d'element d un tableaux : ")
result = Inversion_Tableau(n)
