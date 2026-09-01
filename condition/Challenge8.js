const  input= require('prompt-sync')();

const a = Number(input("entre un nombre 1 "))
const b = Number(input("entre un nombre 2 "))
const c = Number(input("entre un nombre 2 "))

const moyenne_geo = (a + b + c ) ** (1 / 3)

console.log(`le moyenne geo est : ${moyenne_geo}`)