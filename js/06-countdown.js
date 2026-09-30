/**
 * Countdown
 * Author: Carrie
 *
 * Counts down from a number the user enters to 0, logging each
 * number along the way.
 *
 * Input:  Starting number, collected with a prompt.
 * Output: Each number from the starting number down to 0 in the
 *         console, one per line.
 *
 * Notes:  Both the starting number and 0 are included. The prompt
 *         repeats until the user enters a whole number of 0 or more.
 */


let numCount

while (true) {
    numCount = parseInt(prompt('Enter a whole number greater than 0'))

    if (!isNaN(numCount) && numCount > 0) {
        break
    }

    console.log('Please enter a whole number greater than 0')
}

for( let i = numCount; i >= 0; i--) {
    console.log(i)
}