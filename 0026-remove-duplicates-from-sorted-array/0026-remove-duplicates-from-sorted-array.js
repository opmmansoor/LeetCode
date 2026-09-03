/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let a = new Set(nums)
    let org = [...a];

    for (let i=0; i < org.length; i++){
        nums[i] = org[i]
    }
  return org.length
};