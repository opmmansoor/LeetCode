/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let step1 = nums.reduce((sum,num) => sum+num,0)
    let step = nums.join("").split("")
    let step2 = step.reduce((sum,num) => sum+Number(num),0)
    return step1-step2
};