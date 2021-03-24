function bigLetter(str) {
    let strSplit = str.toLowerCase().split(' ');
    for (let i = 0; i < strSplit.length; i++) {
    
        strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].substring(1);     
    }
   
    return strSplit.join(' '); 
 }
 
 console.log(bigLetter('mums patik saulains laiks'));