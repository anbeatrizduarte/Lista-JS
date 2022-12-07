//Elabore um programa que apresente os quadrados dos n ́umeros inteiros m ́ultiplos de 4 existentes na faixa de valores de 15 a 90.


for (let i = 15; i <= 90 ; i++) {
    if (i % 4 == 0) {
        console.log(i);
    }
}