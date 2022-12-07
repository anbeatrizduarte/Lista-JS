//Uma loja vende seus produtos no sistema entrada mais duas presta ̧c ̃oes, sendo a entrada maior do que ou igual `as duas presta ̧c ̃oes; estas devem ser iguais, inteiras e as maiores poss ́ıveis. Por exemplo, se o valor da mercadoria for R$ 270,00, a entrada e as duas presta ̧c ̃oes s ̃ao iguais a R$ 90,00; se o valor da
//mercadoria for R$ 302,75, a entrada  ́e de R$ 102,75 e as duas presta ̧c ̃oes s ̃ao iguais a R$ 100,00. Escreva
//um programa que dado o valor da mercadoria, forne ̧ca o valor da entrada e das duas presta ̧c ̃oes, de
//acordo com as regras acima.

const prompt = require('prompt-sync')();

let valorM = parseInt(prompt('Informe o valor da mercadoria: '));

const prest1 = valorM / 3;
const prest2 = prest1;
const valorE = valorM - (prest1 + prest2);

console.log(`Valor de entrada: ${valorE}`);
console.log(`Valor da primeira prestação: ${prest1}`);
console.log(`Valor da segunda prestação: ${prest2}`);