/**
 * How can you tell an extrovert from an introvert at NSA?
 * Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
 *
 * I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
 * According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.
 *
 * For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.
 *
 * Test examples:
 *
 * "EBG13 rknzcyr." -> "ROT13 example."
 *
 * "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
 */

function rot13(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let alphabetUpperCase = alphabet.toUpperCase();
    let result = '';
    for (let char of str){
        if(alphabet.includes(char)){
            let index = alphabet.indexOf(char);
            let newIndex = (index + 13) % 26;
            result += alphabet[newIndex];
        }else if (alphabetUpperCase.includes(char)){
            let index = alphabetUpperCase.indexOf(char);
            let newIndex = (index + 13) % 26;
            result += alphabetUpperCase[newIndex];
        }else {
            result += char;
        }
    }
    return result;
}

/**
 * This was a difficult challenge at first but was very rewarding and fun
 * My thought process was since ROT13 means rotating 13 it takes the 13th character after a letter in the alphabet and uses that for deciphering a coded message
 * First I had to create two sets of alphabets, one lower case and one upper case.
 * Then I created an empty string to store the result of the deciphered message.
 * Next was to loop the characters in the string and check if the characters are in the alphabet
 * If so get the index of the current character and add 13 to it and mod 26 so that it wraps the alphabet
 * Then append to the result and return it outside the loop
 */