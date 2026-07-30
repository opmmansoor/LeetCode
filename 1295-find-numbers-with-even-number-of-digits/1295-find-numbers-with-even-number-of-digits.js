/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let num = 0;
    for (let a of nums){
        if(a.toString().length %2 === 0){
           num++
        }
    }
    return num
};