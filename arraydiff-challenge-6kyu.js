/**
 * Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
 *
 * It should remove all values from list a, which are present in list b keeping their order.
 *
 * arrayDiff([1,2],[1]) == [2]
 * If a value is present in b, all of its occurrences must be removed from the other:
 *
 * arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

function arrayDiff(a, b) {
    let result = [];
    for(let i = 0; i < a.length; i++){
        if(!b.includes(a[i])){
            result.push(a[i]);
        }
    }
    return result;
}

/**
 * To solve this challenge all I did was set an empty array
 * Then I looped through the first array and checked if the second does not include a[i]
 * If it doesn't push to the result array and return the result
 */