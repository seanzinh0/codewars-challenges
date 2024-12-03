/**
 * Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
 *
 * For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
 *
 * The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
 *
 * Based on: https://leetcode.com/problems/two-sum/
 *
 * twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
 * twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
 */

// ORIGINAL SOLUTION
// function twoSum(numbers, target) {
//     for(let i = 0; i < numbers.length; i++){
//         for(let j = i + 1; j < numbers.length; j++)
//             if(numbers[i] + numbers[j] === target){
//                 return [i, j];
//             }
//     }
// }

// REFACTORED USING HASHMAP
function twoSum(numbers, target) {
    let hashMap = {};
    for(let i = 0; i < numbers.length; i++){
        let complement = target - numbers[i];
        if(complement in hashMap){
            return[hashMap[complement], i];
        }
        hashMap[numbers[i]] = i;
    }
}

/**
 * This problem was inherently pretty easy at first
 * I used the "bruteforce" way first where I looped through the array and each sub array and checked that the numbers added together equal the target
 * If it did then return i and j, but this solution uses two loops which isn't the best way to solve the challenge
 * The second solution was tto use a hash map this was something I looked up.
 * Hashmaps contain key value pairs where the key is the index
 * With this solution I looped through the numbers and used a complement to search for the values at target - arr[i] to find what would add up to equal the target
 * Next was to check if the complement is in the hashmap and if it is return the hashmap at the key where there is a complement
 * If no complement is found at the key to be the value of numbers[i] and the value be the index
 * This allows for the array to be mapped out
 * This was fun to learn and I learned how to use hashmaps for solutions
 */