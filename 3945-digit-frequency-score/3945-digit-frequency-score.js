/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    let arr = String(n).split("")
    let total = arr.reduce((num,digit) => {
       return num + Number(digit)
  },0)
  return total
};