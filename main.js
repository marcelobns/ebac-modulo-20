console.clear();

// Início Item 1
function calcMDC(a, b) {
    
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        let aux = b;
        b = a % b;
        a = aux;
    }
    return a;
}
let a = 5;
let b = 0;

console.info(`1. Calculando o MDC entre a(${a}) e b(${b}) = `, calcMDC(a, b), '\n');
// Fim Item 1

// Início Item 2
function getMaiorMenorIndex(arr) {
    let max = arr[0];
    let min = arr[0];
    let maxIndex = 0;
    let minIndex = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }
    return {
        maior: {
            "index": maxIndex,
            "valor": max
        },
        menor: {
            "index": minIndex,
            "valor": min
        }
    };
}

let vetor = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
let vetorStr = vetor.join(', ');

console.log(`2.
  Dado o seguinte array numérico [${vetorStr}].
  Qual é o índice do maior valor e o índice do menor valor?
  Resposta:`, getMaiorMenorIndex(vetor), '\n');
// Fim Item 2


/// Início Item 3
function sumMultiploAbaixo(mult1, mult2, numero) {
    let soma = 0;
    for (let i = 1; i < numero; i++) {
        if (i % mult1 === 0 || i % mult2 === 0) {
            soma += i;
        }
    }
    return soma;
}

let mult1 = 5;
let mult2 = 7;
let numero = 1000;

console.log(`3. A soma de todos os múltiplos de ${mult1} ou ${mult2} abaixo de ${numero} é:`, sumMultiploAbaixo(mult1, mult2, numero), '\n');
//Fim Item 3