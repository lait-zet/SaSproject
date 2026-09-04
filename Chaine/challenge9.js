function supprime_space(text)
{
    let res = ""
    for (let i = 0; text[i] != undefined ; i++)
    {
        if (text[i] == " ")
            continue
        res += text[i]
    }
    return res
}

const prompt = require('prompt-sync')();
let text = prompt("Veuiller entrer le text : ")

console.log(supprime_space(text))