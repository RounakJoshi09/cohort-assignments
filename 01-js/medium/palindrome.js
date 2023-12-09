/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
   const normalizedStr = str.toLowerCase();

   const alphanumericStr = normalizedStr.replace(/[^a-z0-9]/g, '');
 
   for (let i = 0; i < alphanumericStr.length / 2; i++) {
     if (alphanumericStr[i] !== alphanumericStr[alphanumericStr.length - 1 - i]) {
       return false; // Characters don't match; not a palindrome
     }
   }
 
   return true;
}

module.exports = isPalindrome;
