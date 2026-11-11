/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0 

    let sumArray = nums.map((item) => {
        sum = sum + item

        return sum
    })

    return sumArray
};