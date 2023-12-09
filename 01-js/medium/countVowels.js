/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let cnt = 0;
    for(let i=0;i<str.length;i++)
    {
      const currentChar = str[i].toLowerCase();
      if(currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u' )
      {
        cnt++;
      }
    }
    return cnt;
}

module.exports = countVowels;