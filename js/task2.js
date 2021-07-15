function checkPalindrom (str) {
    return str == str
    .split('')
    .reverse()
    .join('');
  }
  console.log(checkPalindrom ('ieva'));
  console.log(checkPalindrom ('anna'));

  //janis versija

  function isPalindrome(string) {
    const cleanedUpStirng = string.toLowerCase().replace(/ /g, ''); // atstarpes vajag iznemt

    return cleanedUpStirng.split('').reverse().join('') === cleanedUpStirng;
}

console.log(isPalindrome('nurses run'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('foo'));