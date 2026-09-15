/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let org = new Set(nums)
    return org.size !== nums.length
};