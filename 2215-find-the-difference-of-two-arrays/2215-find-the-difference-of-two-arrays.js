/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let new1 = []
    let new2 = []

    for (let num1 of nums1){
       
            if (!nums2.includes(num1) & !new1.includes(num1)) {
                new1.push(num1)
            }
        }

         for (let num2 of nums2) {
            if (!nums1.includes(num2) & !new2.includes(num2)){
                new2.push(num2)
            }
    }
    return [new1,new2]
};