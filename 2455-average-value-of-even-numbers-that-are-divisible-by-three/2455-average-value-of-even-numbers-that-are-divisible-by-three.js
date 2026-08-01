/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {

    let even = nums.filter(num => num %2 === 0)
    let three = even.filter(num =>num %3 === 0)
    let total = three.reduce((sum,num)=>sum+num,0)
    if (three.length == 0){
        return 0
    }else{
         return Math.floor(total/three.length)
    
    }
    
};