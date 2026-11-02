/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;

    for (let item of sentences){
        let words = item.split(" ");
    
     if (words.length > max) {
        max = words.length
     }
    }
    return max;
};