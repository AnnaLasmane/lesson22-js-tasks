function detectDataType(value)
{
let dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detectDataType(999999999));
console.log(detectDataType('Prāta Vētra'));
console.log(detectDataType(true));
console.log(detectDataType(null));
console.log(detectDataType());