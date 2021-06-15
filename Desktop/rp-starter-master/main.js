
// function convertHeight (feet,inches){
// 	return ("feet" * 12 + "inches") * 2.54

// }
// convertHeight (5,10);

// recursion sprint ///////////////////////////
function sum(n){
	if(n===0){
		return 0;
	}
	return n+sum(n-1)
		
}
function factorial(n){
	if(n===1){
		return 1;
	}
	return n*factorial(n-1)
}
function repeatString(str,n){
	if(n===0){
		return ''
	}
	return 'str' + repeatString(str,n-1); 
}

function fib(n){
	if (n===0 || n === 1) {
		return 1;
	}
	return  fib(n-1) + fib (n -2)
}
function multiplyBy10(number,n){
	if (n===0){
		return number 
	}
 
 return 10*multiplyBy10(number,n-1);
 }

function sum(start,end){
	if(start===end){
		return start
	}
return start + sum(start + 1, end)
}


function product(start,end) {
	if(start===end){
		return start
	}
return start * product(start + 1, end)	
}

// Iteration

function sum(n){
 var result = 0 
 while(n>0){

result = result +n
 	n=n-1
 }
 return  result
}

function factorial(n){
	var result =1
	while(n>1){
result=result*n 
    n=n-1
	}
	return result
}

function repeatstring(str, count) {
var result = ""
while (count > 0) {
result = result + str
count=count - 1
}
return result	
}

function multiPlyBy100(number,n) {
var result = 1
while (n>= 1) {
	result =  result * 10 
	n = n - 1
	}

	return result * number
}

function counting(n){
var result=''
 var x=1
while(x<=n){
	result=result+x+','
	x=x+1
}
return result
}
function guests(x,y){
	

}


//arry
var personal=["bb","LOR","fawez","footbal"]

function first(x){
	return x[0];
}
function last(x){
	return  x[x.length-1];
}
function sum1(array){
	var total = 0;
	var i = 0;
	while( i < array.length){
		total=total+array[i]
        i = i+1
	}
	return total;
}
function sum2(array){
	var total= 0
	for ( var i=0 ;  i<array.length;i++){
		total=total+array[i]
		
	}
	return total
}
function max(numbers){
	// declair the largest number and assingn it tp the first number of the arry
	var largest=numbers[0];
	// declaire a counter for the while loop
	var i=0;
	// loop through the array
	while(i<numbers.length){
	// chek if we found a new largest muber 
		if(largest<numbers[i]){
			// uppdate the largest number 
			largest = numbers[i]	
		}
		i=i+1;
	}
	return largest; 
     } 
     function max1(numbers){
     	var largest = numbers[0];
     	for(var i=0;i<numbers.length;i++)
     		if(largest<numbers[i]){
     			largest = numbers[i]
     		}
     		return largest ;
     }
     // Introduction to Objects
     


      var person ={
firstName : 'fawez',
lastName : 'ferjaoui',
age : 27,
homeTown : 'Siliana'
}
person.tvSchow = 'B.B';
person.favoritSport = 'football';
person.favoritMovie = 'L.O.R';
var personValues ={
	firstName : person['firstName'],
	lastName :person['lastName'],
	age : person ['age']

}

var smartWatch ={
	itemName : 'smart watch',
	categirie : 'watch',
	yearRealised : 2019,
	raiting : 4.5,
	price : 4520
}

	

// Data Modeling

var book1 = {
 Title : 'romeoJulliet', 
 Author : 'Shakespeare', 
 MSRP : 50,
 Genre :'romatic',
 NumofPages : 150,
 Description : 'good'}

var  book2 = {
 Title : 'harryPotter', 
 Author : 'J.K. Rowling', 
 MSRP : 80,
 Genre :'scary',
 NumofPages : 155,
 Description : 'good'}




function makeBook(Title,Author,MSRP,Genre,NumofPages,Description){
  var attOfBook = {
 Title : 	Title, 
 Author : Author, 
 MSRP : MSRP,
 Genre :Genre,
 NumofPages : NumofPages,
 Description : Description
  }
return attOfBook
}
	
function displayBook(book)	{
return book.Title + ' ' + book.Author + ' ' + book.NumofPages;
}
var books = ["book1", "book2"] 

function displayBooks(books){
	var display = "";
	for(var i = 0; i < books.length; i++){
		dislay = display + i + ". " + displayBook(books[i]) + "\n";
	}
	return display;
}

function funcCaller(func,arg ){
	//var number > 1 
	//var myNumber = "My Number is" * arg 
	return func (arg)	
}
// funcCaller(funtion(x){ console.log(x)},5)




function x(){

}

var z=2
var x = function (){}

function firstVal(array,func){
	return func(array[0])
}
function cube(value){
	return Math.pow(value,3)
}



// Higher order Function


	var cube = function(x)
{
     return x*x*x
  } 
 var fullname = function (first,last){
 	return first +' ' + last 
 }

 var power = function (base,exp){
   if (exp===0) {
   	return 1
   }
    return base * power(base, exp - 1);
}
 

 var sumCubes = function(numbers) { 
       var total = 0; 
       for (var i = 0; i < numbers.length; i++) { 
             total = total + cube(numbers[i]); 
       } 
       return total; 
 }




  function each(array, cb) { 
       for (var i = 0; i < array.length; i++) { 
             cb(array[i]); 
       } 
 }


function sumSquares(numbers){
	var total =0;
	each(numbers,function(number){
		total += number*number 
	})
	return total
}


 function each(array, func) { 
       for (var i = 0; i < array.length; i++) { 
             func(array[i],i); 
       } 
 }


function sumCube(numbers){
	var total =0;
	each(numbers,function(number){
		total += number*number*number 
	})
	return total
}

function product(number){
	var result=1
	each(number,function(x){
		  result = result * x 
})
	return result 
}

function cubeAll(number){
	var result = []
	each(number,function(y){
		 result.push(Math.pow(y,3))
	} )
	return result 
}

function odds(number){
	var newarray = []
	each(number,function(x){
		if(x%2 !== 0){
			newarray.push(x)
		}
	})
	return newarray
}

function indexeExponentials(number){
	var array = []
	each (number,function(n,i){
		array.push(Math.pow(n,i))
	})
	return array
}

function evenIndexedOddNumbers(number){
	var newArray = []
	each (number,function(n,i){
		if (n%2!==0 && i%2===0){
			newArray.push(n,i)
		}
	})
	      return newArray
}

// function evenIndexedEvenLengths(str)
//    var arr = []
//      each(str,function(s,i){
//  	     if(s.length%2===0 && i%2===0){
//  		     arr.push(s)
//  	      }
//  	          return arr
//      })

//improved map 

function map (coll ,f){
var acc=[];
if (!Array.isArray(coll)) {
	acc={};
}
each (coll,function (element,key){
	acc[key]= f(element ,key);
});
return acc;
}
function incrementValues (object){
	return  map (object, function (value , key){
if (typeof value === 'number' ){
	
return  value+ 1; }
} )
	
}
//2
function uppercaseValues ( object,key  ){
return  map (object ,function (value  , key  ){
	
	if (typeof value == 'string' ){
 return  value.toUpperCase();}
   })
}
function countNestedKeys (object,key){
	var counter = 1;
	return map( object , function (element , key){
		counter ++
		
		return counter
	})
}
function agesToMinutes(array, key){
	var conv = 0
	return map ( array , function (element , key){
		conv = element.age *360*24*60*60;
		console.log (conv)
		return conv ;
}
		)
	}
//more practice
function join (arrayOfObj ){
	var str ='';
return map ( arrayOfObj ,function (element ,key ){
str = (element.firstName)+ ' '+ (element.lastName) ;
return str ;
})
}

 // filter 


function filter(array, predicate){
	var acc =[];
	each(array,function(element){
		if(predicate(element)){
			acc.push(element);
		}


	})
	return acc;
}


function evens(array){
	return filter(array,function(num){
		return (num%2===0);
	})
}


function multiplesOfThree(array){
	return filter(array,function(numbers){
		return (numbers%3===0);
	})
}

function positives(array){
	return filter(array,function(nums){
		return(nums>=0)
	})
}


function evenLength(array){
	return filter(array,function(str){
		return ((str.length)%2===0)
	})
}

function odds(array){
	return filter(array,function(str){
		return ((str.length)%2!==0)
	})
}

function negatives(array){
	return filter(array,function(num){
		return(num<0)
	})
}


function startsWithChar(strings, character){
	var acc= strings.split(' ')
 return filter(acc,function(e){
	console.log (e[0])
		return (e[0]===character)

	})
}


function filter1(array, predicate,key){
	var acc =[];
	each(array,function(element,key){
		if(predicate(element,key)){
			acc.push(element);
		}


	})
	return acc;
}

function evenIndexedEvenLengths(array){
	return filter1(array,function(e,key){
		return (e.length%2===0 && key%2===0)
	
})
}
function filterV(coll, predicate,key){
	if (!Array.isArray(coll)){
	var acc ={};}
	each(coll,function(element,key){
		if(predicate(element,key)){
			acc.push(element);
		}


	})
	return acc;
}

//Introduction to Abstraction 

function select(obj,keys,step,next){
	var obj1= {}
	for(var i=0;i<keys.length;i=step(i)){
	for(var key in obj){
		if(keys[i]===key){
			obj1= next(i)
		}
	}
	}
	return obj1
}





function zip1(a, b) {
  var arr = [];
  for (var key in a) arr.push([a[key], b[key]]);
  return arr;
}

function doSomething(value) {
  if(typeof(value) === 'string') {
    console.log('value is a string')
  } else if(typeof(value) === 'number') {
    console.log('value is a number');
  }else if(typeof(value) === 'object') {
    console.log('value is a object');
  }
}

function sortAscending(arr, obj) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === obj) {
            newArray.push(arr[i])
        }
    }
    return newArray;


