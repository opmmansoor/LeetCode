/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let single = 0
    for( let n of nums){
    single ^= n
    }
    return single
};