/**
 * Coin Flip Game Redux
 * Author: Carrie
 *
 * Flips a coin as many times as the user asks and logs each result
 * to the console.
 *
 * Input:  Number of flips, collected with a prompt.
 * Output: "Heads" or "Tails" in the console for each flip.
 *
 * Notes:  The user doesn't pick heads or tails. The game just displays
 *         random results. A non-numeric or zero entry means no flips run.
 */

let coinFlip, numTimes

while (true) {
    numTimes = parseInt(prompt('How many times would you like to flip the coin?'))

    if (!isNaN(numTimes) && numTimes > 0) {
        break
    }

    console.log('Please enter a whole number greater than 0')
}

for (let i = 0; i < numTimes; i++) {

    coinFlip = Math.floor(Math.random() * 2)

    if (coinFlip === 0)
        console.log('Heads')
    else
        console.log('Tails')
}