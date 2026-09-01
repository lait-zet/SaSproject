const  input= require('prompt-sync')();

const x1 = Number(input("entre un nombre d'axe X1 "))
const x2 = Number(input("entre un nombre d'axe X2 "))

const y1 = Number(input("entre un nombre d'axe Y1 "))
const y2 = Number(input("entre un nombre d'axe Y2 "))

const z1 = Number(input("entre un nombre d'axe Z1 "))
const z2 = Number(input("entre un nombre d'axe Z2 "))

Distance = ((x2-x1) ** 2 + (y2-y1) ** 2 + (z2-z1) ** 2)
console.log(Math.sqrt(Distance))