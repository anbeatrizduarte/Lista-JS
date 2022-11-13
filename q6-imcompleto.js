//6. Calcule o salario liquido de um professor. Para elaborar o programa,  ́e necess ́ario possuir alguns dados,tais como o valor da hora aula, n ́umero de horas trabalhadas no mˆes e percentual de desconto do INSS.Em primeiro lugar, deve-se estabelecer o seu sal ́ario bruto para fazer o desconto e ter o valor do salario liquido. Obs.: o programa deve informar o salario bruto e salario liquido do professor.

const prompt = require('prompt-sync')();

let hrau = parseInt(prompt('Insira o valor da hora aula: R$ '));
let hrtra = parseInt(prompt('Insira o número de horas trabalhadas: '));

//calculo do valor bruto
let bruto = hrtra * hrau;

//calculo do valor dos descontos
let sal1 = bruto / 7.5;
let sal2 = bruto / 9;
let sal3 = bruto / 12;
let sal4 = bruto / 14;

//calculos dos valores líquidos


if (bruto <= 1.212) {
    console.log(`Salário bruto do professor: R$ ${bruto} reais`);
}


console.log(`Salário bruto do professor: R$ ${bruto} reais`);









