/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    return  Number(String(n).replaceAll("0",""))
}    
    