/**
 * Well met with Fibonacci bigger brother, AKA Tribonacci.
 *
 * As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
 *
 * So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
 *
 * [1, 1 ,1, 3, 5, 9, 17, 31, ...]
 * But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
 *
 * [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
 * Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
 *
 * Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
 */

function tribonacci(signature,n){
    //your code here
    let start = [...signature];
    let array = [];
    let result = array.concat(start);
    if(n === 0){
        return []
    }
    if(n === 1){
        return [result[0]]
    }
    if(n === 2){
        return [result[0], result[1]]
    }

    for(let i = 0; i < n -3; i++){
        result.push(result[(result.length-1)] + result[(result.length-2)] + result[(result.length-3)])
    }
    return result;
}

/**
 * This challenge was FUN
 * This was building on top of the one we did with Janaya
 * The problem gives you a signature which is going to start the sequence and n amount it wants you to return
 * I first copied the array and made an empty array and merged them into the result array
 * I chose result because if n is 3 it'll return that since there's no sequence to complete
 * Then I checked for 3 conditions of n and returned the appropriate results
 * Next was to loop from 0 to n-3 since 3 values are given and needed for a sequence
 * Then I pushed into the result the calculation that Janaya helped us with to get the next number
 * Last I returned the result
 */