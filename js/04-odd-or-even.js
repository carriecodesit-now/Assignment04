/**
 * Odd or Even
 * Author: Carrie
 *
 * Loops through the numbers 0 to 15 and checks whether each one is
 * odd or even.
 *
 * Input:  None.
 * Output: One line per number in the console, like "0 is even" or
 *         "1 is odd".
 *
 * Notes:  0 counts as even. Both 0 and 15 are included, so there are
 *         16 lines of output.
 */


const numMax = 15

for (let i = 0; i <= numMax; i++) {
    if (i%2 === 0)
        console.log(`${i} is even`)
    else
        console.log(`${i} is odd`)
}