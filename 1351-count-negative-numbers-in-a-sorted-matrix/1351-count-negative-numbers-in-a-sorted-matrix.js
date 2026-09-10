/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0
    
    for (let row of grid) {
        for (let num of row) {
            if (num < 0) {
                count++;
            }
        }
    }

    return count;
};