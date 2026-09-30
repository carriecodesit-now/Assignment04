/**
 * Coin Flip Streak Game
 * Author: Carrie
 *
 * Keeps flipping a coin until it lands on Tails, to see how many
 * Heads come up in a row before the streak ends.
 *
 * Input:  None. The game runs on its own.
 * Output: "Heads" or "Tails" in the console for each flip.
 *
 * Notes:  Uses a do while loop, so the coin is always flipped at least
 *         once. The game ends on the first Tails, which can happen on
 *         the very first flip.
 */

let coinFlip

do {
    coinFlip = Math.floor(Math.random() * 2)

    if (coinFlip === 0) {
        console.log('Heads')
    }
    else
        console.log('Tails')

} while (coinFlip === 0)