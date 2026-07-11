/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {

     let b = word[0].toUpperCase()
     let a = word.toLowerCase()
     let c = a.replace(a[0],b)
    if (word === word.toUpperCase() || word === word.toLowerCase() || word === c) {
      return true;
    }else{
        return false;
    }    
};