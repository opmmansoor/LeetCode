/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jew = jewels.replaceAll("",",")
    let count = 0
    for (let jewel of stones){
        if(jew.includes(jewel)){
        count++
    }
    }
    
    return count
};