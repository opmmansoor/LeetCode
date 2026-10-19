/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {

    const unique = nums.filter((num) => 
     nums.indexOf(num) === nums.lastIndexOf(num));

        return unique.reduce((num,sum) =>  num + sum,0);
};