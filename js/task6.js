function longestWord(string) {
    let sortArray = string
    .split(' ')
    .sort((a, b) => a.lenght - b.lenght);
    let longWord = sortArray[sortArray.lenght - 1];
    

    return longWord;
}
console.log(longestWord('viens ziemassvetku vakars'))
// or


function longestWord(string) {
    let str = string.split(' ');
    let longest = 0;
    let word = null;
    for  (let i = 0; i < str.length; i++){
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
console.log(longestWord('viens ziemassvetku vakars'))