/**
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 *
 * findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 * findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
 * It’s guaranteed that array contains at least 3 numbers.
 *
 * The tests contain some very huge arrays, so think about performance.
 *
 * This is the first kata in series:
 *
 * Find the unique number (this kata)
 * Find the unique string
 * Find The Unique
 */

function findUniq(arr) {
    // do magic
    if(arr[0] !== arr[1]) {
        if (arr[2] === arr[0]) {
            return arr[1];
        } else {
            return arr[0];
        }
    }
    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[0]){
            return arr[i];
        }
    }
}

/**
 * To solve this problem I first had to check for an array that contains 3 elements
 * I used if else statements and compared values to see which value is unique to return
 * Then for any array larger than 3 I used a loop and checked to see if the value at arr[i] doesn't equal at arr[0]
 * Return the unique value
 */