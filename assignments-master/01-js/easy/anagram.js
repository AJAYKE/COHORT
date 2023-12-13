/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  string1 = new Set(str1.toLowerCase().split(''))
  string2 = new Set(str2.toLowerCase().split(''))
  return (string1.size == string2.size && [...string1].every((i) => string2.has(i)))
}
module.exports = isAnagram;
