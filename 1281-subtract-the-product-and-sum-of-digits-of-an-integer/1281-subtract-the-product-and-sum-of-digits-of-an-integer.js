/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let spr = n.toString().split("").map(Number)
    let mult = spr.reduce((sum,num)=>sum*num,1)
    let sumDig = spr.reduce((sum,num)=>sum+num,0)
    return mult-sumDig
};