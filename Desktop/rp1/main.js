function power(a,b){
  if(b===0){
    return 1;
  }
return a* power(a,b-1)
}
function sum(n){
   if(n===0){
  return 0
}
 return n + sum(n-1)
}
function sum(n){
   if(n===1){
  return 1
}
 return n * sum(n-1)
}
function reeatString(str,count){
   if (count = 0){
      return ''
   } 
   return str*reeatString(str,count-1)
}


function sum(n){
   if(n===1){
      return 1
   }
}