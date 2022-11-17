
const prompt = require('prompt-sync')();

let seg = parseInt(prompt('Insira o total de segundos: '));

let hora = seg / 3600;
let min = seg / 60;
let segun = seg;

console.log();

console.log(`=== RESULTADOS ===`);

console.log(`Quantidade de horas: ${hora}`);

console.log(`Quantidade de minutos: ${min}`);

console.log(`Quantidade de segundos: ${segun}`);

console.log();