function bigLetter(str) {
    let strSplit = str.toLowerCase().split(' ');
    for (let i = 0; i < strSplit.length; i++) {
    //the => t => T + (the => he)  => T+he => The
            strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].substring(1);     
    }
   
    return strSplit.join(' '); 
 }
 
 console.log(bigLetter('mums patik saulains laiks'));

 /// Jāņa variants


 function sortString(phrase) {
    let wordsArray = phrase.split(' ');
    for (let wordIndex in wordsArray) {
        const word = wordsArray[wordIndex];
        let lettersArray = word.split('');
        lettersArray[0] = lettersArray[0].toUpperCase(); 
        wordsArray[wordIndex] = lettersArray.join('');
    }
    return wordsArray.join(' ');
}

console.log(sortString('nurses run'));
console.log(sortString('the quick brown fox'));