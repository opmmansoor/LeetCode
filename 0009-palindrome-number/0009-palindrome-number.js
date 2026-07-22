/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let original = x.toString();
    let reves = original.split("").reverse().join("")
    return original === reves;
};
