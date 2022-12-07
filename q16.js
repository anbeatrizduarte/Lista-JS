//Elaborar um programa que mostre os resultados da tabuada de um n ́umero inteiro dado.

const prompt = require('prompt-sync')();

let tabu = parseInt(prompt('Insira o número desejado: '));

var num = tabu;
var resposta = resposta;
var tabuada = '';

for (var count = 1; count <= 10; count++)
    tabuada += num + " x " + count + " = " +
        num * count + "\n";

console.log(tabuada);
