//Escreva um programa que dado um n ́umero de trˆes d ́ıgitos, separe o n ́umero em seus d ́ıgitos componentes e reconstrua um n ́umero com os componentes na ordem inversa. Exemplo: para entrada de 123, a resposta do programa seria 321.

const prompt = require('prompt-sync')();

let numero = prompt('Digite o número desejado: ');

numero.toString()
const inver = numero.split('');
const rever = inver.reverse();
const juntar = rever.join('');
const final = parseFloat(juntar);

console.log(`Número invertido: ${final}`);

