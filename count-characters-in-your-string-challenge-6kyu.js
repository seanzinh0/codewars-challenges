/**
 * The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
 *
 * What if the string is empty? Then the result should be empty object literal, {}.
 */

function count(string) {
    // TODO
    let hashMap = {};
    let strArr = string.split("");
    for(let i = 0; i < strArr.length; i++){
        let target = strArr[i];
        if (hashMap[target]){
            hashMap[target] += 1;
        } else {
            hashMap[strArr[i]] = 1;
        }
    }
    return hashMap;
}

/**
 * Since I learned hashmap for twosum I wanted to apply it to this problem since the result is an object
 * I first created an empty hash map
 * Then I turned the string into an array
 * I looped through that array and set the target variable to strArr[i] to get the value
 * Next, check if hashmap has the target already and if it does add 1 to the value and if it isn't in the hashmap add the strArr[i] in and set the value to 1
 * Last return the hashmap
 */