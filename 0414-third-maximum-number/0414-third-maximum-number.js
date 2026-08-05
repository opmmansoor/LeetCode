/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let org = new Set(nums)
    let arr = [...org]
    arr.sort((a,b)=>b-a)
    if(arr.length>=3){
        return arr[2]
    }else{
        return Math.max(...arr)
    }
};