/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  vowels = ['a','e','i','o','u']
  string = str.toLowerCase().split('')
  total = string.reduce((acc,current)=> {
    return acc +(vowels.includes(current)?1:0)
  },0)
  return total
}
module.exports = countVowels;