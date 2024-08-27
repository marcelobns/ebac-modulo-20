/**
 * Calcula o Máximo Divisor Comum (MDC) entre dois números inteiros.
 * 
 * @param {number} a - O primeiro número inteiro.
 * @param {number} b - O segundo número inteiro.
 * @returns {number} - O Máximo Divisor Comum entre os dois números.
 */
export default function calc_mdc(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        let aux = b;
        b = a % b;
        a = aux;
    }
    return a;
}