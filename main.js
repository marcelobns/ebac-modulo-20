import calc_mdc from './modules/calc_mdc.js';
import get_index from './modules/get_index.js';
import sum_multiplos from './modules/sum_multiplos.js';

export default function main() {
    console.clear();

    calc_mdc_test();
    get_index_test();
    sum_multiplos_test();
}

function calc_mdc_test(){
    let a = 9;
    let b = 15;
    console.info(`Calculando o MDC entre a(${a}) e b(${b}) = `, calc_mdc(a, b), '\n');
}

function get_index_test(){
    let vetor = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
    let vetorStr = vetor.join(', ');
    console.info(`O índice do maior valor e o índice do menor valor do vetor [${vetorStr}] são:`, get_index(vetor), '\n');
}

function sum_multiplos_test(){
    let mult1 = 5;
    let mult2 = 7;
    let numero = 1000;

    console.info(`A soma de todos os múltiplos de ${mult1} ou ${mult2} abaixo de ${numero} é:`, sum_multiplos(mult1, mult2, numero), '\n');
}

main();