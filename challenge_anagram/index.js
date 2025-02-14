/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const newStr1 = str1.split('').sort().join('')
    const newStr2 = str2.split('').sort().join('')
    return newStr1 === newStr2
}

// function isAnagram(str1, str2) {
//     if(str1.length !== str2.length) return false;
//     const count = {}
//     for(let char of str1){
//         count[char] = (count[char] || 0) + 1
//     }

//     for(let char of str2){
//         if(!count[char]) return false;
//         count[char]--;
//     }
//     return true
// }
console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));



