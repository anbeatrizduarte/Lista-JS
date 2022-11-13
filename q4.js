//4. Escreva um programa que dado dois números, imprima a soma, o produto, a diferença, o quociente e o resto da divisão dos dois números.

const prompt = require('prompt-sync')();

let prim = parseInt(prompt('Digite o primeiro número: '));
let secon = parseInt(prompt('Digite o segundo número: '));

let soma = prim + secon;
let produto = prim * secon;
let diferença = prim - secon;
let quociente = prim / secon;
let resto = prim % secon;

console.log(`=== RESULTADOS ===`);

console.log(`A soma dos dois números: ${soma}`);
console.log(`O produto dos dois números: ${produto}`);
console.log(`A diferença dos dois números: ${diferença}`);
console.log(`O quociente dos dois números: ${quociente}`);
console.log(`O resto dos dois números: ${resto}`);