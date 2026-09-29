/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let result = 0;

    for (let letter of s){
        if(letter === "L"){
            count++
        }else{
            count--
        }
        if(count === 0){
            result++
        }
    }
    return result
};