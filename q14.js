//A s ́erie de Fibonacci  ́e formada pela seguinte sequˆencia: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55... etc. Escreva
//um script que gere a s ́erie de Fibonacci at ́e o vig ́esimo termo.


function fibo() {
    var term = parseInt(document.getElementById('num').value);
    var re = document.getElementById('re');
    var pen = 0; 
    var ult = 1, a;
    var nume = '';

    for (var coun = 1; coun <= term; coun++) {
        if (coun <= 2) {
            nume += 'Termo ' + coun + ': ' + (coun - 1) + '<br />'

        }
        else {
            nume += 'Termo ' + coun + ': ' + (ult + pen) + '<br />'

            a = ult;
            ult = ult + pen;
            pen = a;
        }
    }

    re.innerHTML = nume;
}
