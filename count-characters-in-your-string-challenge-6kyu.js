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