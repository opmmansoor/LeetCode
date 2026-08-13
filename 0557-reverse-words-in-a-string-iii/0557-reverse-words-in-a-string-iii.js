/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = s.split(" ")
    let arr = []

    for(let word of result){
        arr.push(word.split("").reverse().join(""))
    }
    return arr.join(" ")
};