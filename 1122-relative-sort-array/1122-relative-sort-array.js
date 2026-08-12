/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let res = []
    for (let num of arr2){
        let value = arr1.filter(x => x === num)
            res.push(...value)
    }
        let remin = arr1.filter(num => !arr2.includes(num))
            remin.sort((a,b)=>a-b)
    return res.concat(remin)
    
};