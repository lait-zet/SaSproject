const prompt = require('prompt-sync')()
function Saisire_remplire_Table(n)
{
    let tabel = []
    for(let i = 0 ; i < n ; i++)
    {
        let a = prompt(`veullier entrer nombre ${i + 1} :` )
        tabel.push(Number(a))
    }
    console.log(`merci d'entrer les donnes , votre table comme suite : ${tabel}`)
    for(let j = 0 ; j < n ; j++)
    {
        for(let k = 0; k < n - j - 1 ; k++)
        {
            if(tabel[k] > tabel[k + 1])
            {
                let temp = tabel[k]
                tabel[k] = tabel[k + 1]
                tabel[k + 1] = temp
            }
        }
    }
    return tabel
}
let n = prompt("Veuiller saisire le nombre d'element d un tableaux : ")
console.log(`Veuillez votre tableux apres modification ${Saisire_remplire_Table(n)}`)


