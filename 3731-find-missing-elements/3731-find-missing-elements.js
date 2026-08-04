/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let find = []
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    for (let i=min; i <= max; i++){
        if(!nums.includes(i)){
            find.push(i)
        }
    }
    
    
    return find
};