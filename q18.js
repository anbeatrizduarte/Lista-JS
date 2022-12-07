//Escreva um programa que apresente o somat ́orio de todos os n ́umeros divis ́ıveis por 3 pertencentes ao intervalo [0,100] e o somat ́orio de todos os n ́umeros divis ́ıveis por 5 pertencentes ao intervalo ]100,200].

//n ́umeros divis ́ıveis por 3 pertencentes ao intervalo [0,100]

let soma = 0;
let prim = 0;

console.log(`Somatório de todos os números divisíveis por 3 pertencentes a um intervalo entre 0 e 100`);

for (let prim = 0; prim <= 100 ; prim++) {
    if (prim % 3 == 0) {
        console.log(prim);
        soma = soma + prim;
    }
}

console.log(`Somatório: ${soma}`);

//somat ́orio de todos os n ́umeros divis ́ıveis por 5 pertencentes ao intervalo ]100,200].
console.log();

console.log(`Somatório de todos os números divisíveis por 5 pertencentes a um intervale entre 100 e 200`);

console.log();

for (let secun = 0; secun <= 100 ; secun++) {
    if (secun % 5 == 0) {
        console.log(secun);
        soma = soma + secun;
    }
}

console.log(`Somatório: ${soma}`);
