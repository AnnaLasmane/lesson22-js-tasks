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
console.log
(countVowels('annaaa'))



///janis

function getVowelCount(phrase) {
    const letters = phrase.toLowerCase().split('');
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let letter of letters) {
        if (vowels.indexOf(letter) >= 0) {
            vowelCount++;
        }
    }

    return vowelCount;
}

console.log(getVowelCount('nurses run'));
console.log(getVowelCount('the quick brown fox'));
console.log(getVowelCount('the quIck brOwn fox'));
console.log(getVowelCount('Web Development Tutorial'));