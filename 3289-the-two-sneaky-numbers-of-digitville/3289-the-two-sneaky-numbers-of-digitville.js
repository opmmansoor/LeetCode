/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let duplicate = nums.filter((num,index)=>{
        return nums.indexOf(num) !== index
    })
    return duplicate
};