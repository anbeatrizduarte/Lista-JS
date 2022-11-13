//5. Uma empresa contrata um vendedor a R$ 50,25 por dia. Crie um programa que dado o n ́umero de dias trabalhados pelo vendedor, imprima o valor l ́ıquido a ser pago ao mesmo, sabendo que se ele trabalhou at ́e 10 dias n ̃ao tem direito `a gratifica ̧c ̃ao, se ele trabalhou acima de 10 dias e at ́e 20 dias tem direito `a gratifica ̧c ̃ao de 20%, se ele trabalhou acima de 20 dias tem direito `a gratifica ̧c ̃ao de 30%. Sempre s ̃ao descontados 10% de imposto de renda em cima do valor bruto.

const prompt = require('prompt-sync')();

let dias = parseInt(prompt('Totais de dias que o funcionário trabalhou: '));


let diaria = dias * 50.25;
let bruto = diaria / 10;
let sal = diaria - bruto;
let sal1 = sal / 20;
let sal2 = sal / 30;


console.log();
console.log(`=== SALÁRIO ===`);
console.log();

if (dias <= 10) {
    console.log(sal.toFixed(1));
    console.log(`Salário: R$ ${sal} reais`);

    

} else if (dias > 10 && dias <= 20) {
    console.log(`Salário: R$ ${sal + sal1} reais`);


} else if (dias > 20) {
    console.log(`Salário: R$ ${sal + sal2} reais`);
}


console.log();



