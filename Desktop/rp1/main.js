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


function add(a,b){
  return a + b 
}



//
function even(numb){

if(numb%2===0){
  return true 
}
return false 

}

function odd(numb){

if(numb%2!==0){
  return true 
}
return false 

}



function positve(num){

if(num>=0){
  return true
}
return false

}


function negative(num){

if(num<0){
  return true
}
return false

}


 function randInt(n){
 return Math.random()*(n-1)
 }


 function  guessMyNumber(n){
  
   if(n===Math.random()* 5){
    return 'You guessed my number!'
   }
return 'Nope! That wasnt it'

 }

//

function weather(cold){
  if(cold<=15){
    return  'It is cold and raining outside.'
  }
  return 'its warm '
}


function cat(hunger){

if(hunger === 'yes'){
  return  'That cat is hissing and growling.'
}

return 'its not hungry '
 

}

function rentalCar(age){   
   if(age>= 21 ){
           return true  ;     
    }    
     return false ;  
 }


 function rentalCar1(name,age){
  if(age>=21 && name!=='joe'){
    return 'have a nice driving'
  }
     if(age<21&& name!=='joe' || age<21&& name==='joe'){
      return 'you can not drive'
    }
    else if (age>=21 && name ==='joe'){
      return 'you are banned'
    }

}
 
 function scoreToGrade(num){
  if(num>100 || num <0)
    return 'invalid score'

  else if(num>=90){
    return 'A'
  }
   else if(num>=80&&num <90){
      return 'B'
    }
    else  if(num>=70 && num <80){
        return 'C'
      }
       else if(num<70 && num>=0){
        return 'D'
       }


 }

 function rent(name,age,day){
  if(name=== 'fawez'&& age>=20){
    return 'banned'
  }
  else if(age>=20 && name !=='fawez'&& day === 'monday'){
    return' you can drive and you have 20%reduce'
  }
  else if(age>=20 && name !=='fawez'&& day !== 'monday'){

  return 'have nice drive'
}
 }



 function scoreToGrade2(letter,score){

  if(score>=98 && score<=100 || score>=88  && score<=90 || score<=78 && score<=80){
    return letter + '+'
  }
 if (score>=90 && score<=92){
  return letter + '-'
 }


 }



 function capitalize(){
   return string.charAt(0).toUpperCase() + string.slice(1)
 }



 function scoreToGrade1(letter,score){

  var p=0;
  p=score%10;


  if( p === 8 || p === 9){
    return letter + '+';
          }
 else if ( p === 1  || p === 2 || p ===0){
  return letter + '-';
 }
else if (p>2 && p<8){
  return letter
}

  }




function letterGrade(num){
  if(num>100 || num <0)
    return 'invalid score'

  else if(num>=90 && num.length===2){
    return scoreToGrade1('A',num)
  }
   else if(num>=80&&num <90 && num.length===2){
      return scoreToGrade1('B',num)
    }
    else  if(num>=70 && num <80 && num.length===2){
        return scoreToGrade1('C',num)
      }
       else if(num<70 && num>=0 && num.length===2){
        return scoreToGrade1('D',num)
       }


 }


var count = 0


 function counter(){
return count++

 }


 var x;
function randInt(){
    let x = Math.floor((Math.random() * 6) + 1);
  guessMyNumber() ;
 }

function guessMyNumber(x){

    if(x === 3){
        return'You guessed my number!';
    }else{
        return'Nope! That wasnt it!';
        randInt();
    }
}