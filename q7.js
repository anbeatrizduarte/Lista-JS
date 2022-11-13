//7. Escreva um programa que dado o raio de um c ́ırculo, imprima seu diˆametro, o valor de sua circunferˆencia e sua  ́area. Use o valor de 3,14159 para “pi”.

const prompt = require('prompt-sync')();

let raio = parseInt(prompt('Insira o valor do raio do círculo: '));

let diam = raio * 2;
let circun = 2 * 3.14159 * raio;
let area = 3.14159 * Math.pow(raio, 2)

console.log(`Diâmetro do círculo: ${diam}`);
console.log(`Circunferência do círculo: ${circun}`);
console.log(`Àrea do círculo: ${area}`);