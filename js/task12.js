function isPerfect(number)
{
let divisorSum = 0;
   for(let i = 1;i <= number/2;i++)
     {
         if(number%i === 0)
          {
            divisorSum += i;
          }
     }
   
     if(divisorSum === number && divisorSum !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
 } 
isPerfect(27); 