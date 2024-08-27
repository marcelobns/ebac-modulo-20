/**
 * Encontra o maior e menor valor em um array e retorna seus respectivos indices.
 *
 * @param {number[]} arr - Array de números para fazer a busca dos valores.
 * @returns {{maior: {index: number, valor: number}, menor: {index: number, valor: number}}}
 * Objeto contendo os valores e indices encontrados no array passado por parametro.
 */
export default function get_index(arr) {
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