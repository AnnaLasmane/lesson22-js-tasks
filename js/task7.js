const vowels = ["a", "e", "i", "o", "u"]

function countVowels(str) {
let counter = 0;

for (let letter of str.toLowerCase()){
    if (vowels.includes(letter)) {
       counter++
    }
}
return counter
}
console.log(countVowels('annaaa'))