/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let arr = nums.filter(num => num !== val);

    for (let i = 0; i < arr.length; i++){
        nums[i] = arr[i]
    }
    return arr.length;
};