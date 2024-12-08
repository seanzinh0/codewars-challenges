/**
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
 *
 * Examples input/output:
 *
 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 * XO("zzoo") => false
 */

function XO(str) {
    //code here
    let hashBrown = {};
    let strArr = str.toLowerCase().split("");
    for(let i = 0; i < strArr.length; i++){
        let target = strArr[i];
        if(target in hashBrown){
            hashBrown[target] += 1
        }else{
            hashBrown[strArr[i]] = 1;
        }
    }
    return hashBrown.x === hashBrown.o;

}

/**
 * For this solution I used a hashmap to solve it
 * I used the hashmap to store the x's and o's to count the values
 * I then compared the values to check for if they were the same or not
 */