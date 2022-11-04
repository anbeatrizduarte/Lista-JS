// 3. Escreva um programa que calcule e apresente o valor do volume de um caixa retangular utilizando a fórmula VOLUME = COMPRIMENTO * LARGURA * ALTURA.

const prompt = require('prompt-sync')();

let altura = prompt('Digite a altura: ');
let comprimento = prompt('Digite o comprimento: ');
let largura = prompt('Digite a largura: ');

let volume = comprimento * altura * largura;

console.log(`O volume da caixa: ${volume}`);