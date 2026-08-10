/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let arr = []
    let arr2 = []
    for (let i of nums){
    if(i !== 0){
        arr.push(i)
    }else{
        arr2.push(i)
    }
    }
    return nums.splice(0,nums.length,...arr.concat(arr2))
};