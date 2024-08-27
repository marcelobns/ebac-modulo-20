/**
 * Soma de todos os números abaixo de um dado número de partida, que sejam múltiplos dos dois números passados por paramentro.
 *
 * @param {number} mult1 - Primeiro múltiplo a ser considerado.
 * @param {number} mult2 - Segundo múltiplo a ser considerado.
 * @param {number} numero - Número de partida até onde os múltiplos serão somados.
 * @returns {number} A soma dos múltiplos de `mult1` e `mult2` abaixo de `numero`.
 */
export default function sum_multiplos(mult1, mult2, numero) {
    let soma = 0;
    for (let i = 1; i < numero; i++) {
        if (i % mult1 === 0 || i % mult2 === 0) {
            soma += i;
        }
    }
    return soma;
}
