function secondGreatestLowest(num) {  
    num.sort(function(x,y) {  
      return x-y;
    });  
  
    let uniqa = [num[0]];  
    let result = [];  
  
    for(let j=1; j < num.length; j++) {  
      if(num[j-1] !== num[j]) {
        uniqa.push(num[j]);  
      }  
    }
  
    result.push(uniqa[1],uniqa[uniqa.length-2]);
    return result.join(',');  
  
  }  
  
  console.log(secondGreatestLowest([1,2,3,4,5])); 