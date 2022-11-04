//1. Escreva um programa que dado o valor de uma conta de restaurante, imprima o valor total a ser pago, considerando que o restaurante cobra 10% de taxa para o gar ̧com.

//pacote para ler os dados do teclado
const prompt = require('prompt-sync')();

//imprimir na tela (o paseInt serve para dizer que o que vai ser imprimido é texto, string)
let gasto = parseInt(prompt('Digite o valor gasto: '));

//o símbolo / é para dividir
taxa = gasto / 10;

console.log(`Valor da conta: ${gasto}`);
console.log(`Valor da taxa: ${taxa}`);
console.log(`Valor da conta com a taxa: R$ ${gasto + taxa}`);
