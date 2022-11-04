// 17. Elabore um programa que calcule o somatório de todos os n ́umeros pares pertencentes entre 10 a 100.


let soma = 0;

for (let i=10; i<100; i++){
    if (i % 2==0){
        soma = soma + i;
    }
}

console.log(`Somatorio: ${soma}`);


