//8. Escreva um programa que dado um n ́umero inteiro, informe se ele  ́e par ou  ́ımpar. Use o operador tern ́ario.

const prompt = require('prompt-sync')();

console.log();

let num = parseInt(prompt('Insira um número: '));

console.log();

if (num % 2 == 0){
    console.log(`Resultado PAR`);
}else{
    console.log(`Resultado IMPAR`);
}

console.log();