function abcOrder(str)
  {
return str
.split('')
.sort()
.join('');
  }
console.log(abcOrder('webmaster'));