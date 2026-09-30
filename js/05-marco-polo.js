/**
 * Marco! Polo!
 * Author: Carrie
 *
 * Loops through the numbers 1 to 100 and prints each one, but swaps
 * in a word for certain multiples.
 *
 * Input:  None.
 * Output: 100 lines in the console. Multiples of 3 print "Marco!",
 *         multiples of 5 print "Polo!", multiples of both print
 *         "Marco! Polo!", and every other number prints as is.
 *
 * Notes:  Multiples of both 3 and 5 (like 15, 30, 45) are checked
 *         first so they don't get caught by the single-multiple cases.
 */


const numMax = 100

for (let i = 1; i <= numMax; i++) {
    if (i%3 === 0 && i%5 === 0) {
        console.log('Marco! Polo!')
    }
    else if (i%3 === 0) {
        console.log('Marco!')
    }
    else if (i%5 === 0) {
        console.log('Polo!')
    } else 
        console.log(i)

}