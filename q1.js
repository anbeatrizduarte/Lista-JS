//1. Escreva um programa que dado o valor de uma conta de restaurante, imprima o valor total a ser pago, considerando que o restaurante cobra 10% de taxa para o gar ̧com.

const prompt = require('prompt-sync')();

let gasto = parseInt(prompt('Digite o valor gasto: '));

taxa = gasto / 10;

console.log(`Valor da conta: ${gasto}`);
console.log(`Valor da taxa: ${taxa}`);
console.log(`Valor da conta com a taxa: R$ ${gasto + taxa}`);