//Escreva um programa que dado um n ́umero inteiro e positivo F, calcule o fatorial deste n ́umero.

const prompt = require('prompt-sync')();

let numero = (prompt('Digite o número desejado: '));


var fatorial = numero;
var resultado = fatorial;
for (var i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(`Número fatorado: ${resultado}`);