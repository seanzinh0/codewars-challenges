/**
 * Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
 *
 * For example, a tower with 3 floors looks like this:
 *
 * [
 *   "  *  ",
 *   " *** ",
 *   "*****"
 * ]
 * And a tower with 6 floors looks like this:
 *
 * [
 *   "     *     ",
 *   "    ***    ",
 *   "   *****   ",
 *   "  *******  ",
 *   " ********* ",
 *   "***********"
 * ]
 */

function towerBuilder(nFloors) {
    // build here
    let tower = [];
    for(let i = 0; i < nFloors; i++){
        tower.push(" ".repeat(nFloors - i - 1) + "*".repeat((i * 2) + 1) + " ".repeat(nFloors - i - 1));
    }
    return tower;
}

/**
 * To solve this I first needed to make an empty array to store the tower in
 * Then I looped through the amount of floors
 * For each iteration I pushed a string that contained the space calculated by taking the nFloors minus the current index - 1
 * I calculated the * by multiplying the current i by 2 and adding 1 since each floor needs to be an odd number of stars
 * Last I returned the tower
 */