/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let ind = word.indexOf(ch)
    let first = word.slice(0,ind+1).split("").reverse().join("")
    let end = word.slice(ind+1)
    return first+end

};