const input = require('prompt-sync')();

n = parseInt(input("entrer votre nombre :"))

if (n % 2 == 0)
{
    console.log("le nombre est paire")
}
else {
    console.log("le nombre est impaire")
}