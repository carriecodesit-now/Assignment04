/**
 * Hash Triangle
 * Author: Carrie
 *
 * Prints a right triangle of # symbols to the console, starting with
 * one # and adding one more on each line.
 *
 * Input:  None.
 * Output: Seven lines in the console, from "#" up to "#######".
 *
 * Notes:  The triangle is always 7 rows tall.
 */


const numTri = 7
let row = ''

for (let i = 0; i< numTri; i++) {
    row += '#'
    console.log(row)
}