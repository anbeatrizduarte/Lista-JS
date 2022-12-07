//Implementar um programa para resolver o seguinte problema: Jos ́e tem 150 cent ́ımetros e cresce 2 cent ́ımetros por ano. O Pedro tem 110 cent ́ımetros e cresce 3 cent ́ımetros por ano. Em quantos anos Pedro ser ́a maior que Jos ́e?

var pedro = 110;
var joao = 150;
var contador = 0;

do {
    joao = joao + 2;
    pedro = pedro + 3;
    contador = contador + 1;
} while (joao > pedro);

console.log(`Pedro será maior que João em ${contador} anos`);