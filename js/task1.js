function reverseNumber(num){ 
    return num
    .toString()
    .split('')
    .reverse()
    .join('') 
    
    }
     console.log(reverseNumber(34223));
    //

    
    function reverseNumber(number) {
        const string = number.toString();
    
        return string.split('').reverse().join('');
    }
    
    console.log(reverseNumber(12345));