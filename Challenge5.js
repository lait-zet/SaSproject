const input = require('prompt-sync')();

const C = input("temperature en Cellul ");
if(C < 0){
    console.log("l'etat de temperature est : Solide");
}
else if (0 <= C < 100){
    console.log("l'etat de temperature est: Liquide");
}
else{
    console.log("l'etat de temperature est: Gaz");
}

