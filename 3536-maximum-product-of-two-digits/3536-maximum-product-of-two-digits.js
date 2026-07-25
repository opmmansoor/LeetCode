/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let product = n.toString().split("")
    let maximum = 0
    for (let i=0; i<product.length; i++){
        for (let j=i+1; j<product.length; j++){
            let twosum = Number(product[i])*Number(product[j])

            if(twosum > maximum){
                maximum = twosum
            }
        }
    }
    return maximum
};