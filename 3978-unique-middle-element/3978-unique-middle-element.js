/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMiddleElementUnique = function(nums) {
    let middle = nums[Math.floor(nums.length/2)];

    let count = nums.filter((num) => num === middle).length

    if (count === 1){
        return true
    } else {
        return false;
    }
};