/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  str = str.toLowerCase().split('')
  str = str.filter(i => alpha.includes(i))
  return str.join('') === str.reverse().join('')
}
module.exports = isPalindrome;
