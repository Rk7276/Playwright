function myFunction(msg, number) {
  console.log("RK", msg, number)
}
//Call function
myFunction("message ahe", 100);//argument 

function sum(x, y) {
  //x,y are the function local variables
  console.log(x + y);
}
sum(3, 5)

function add(x, y) {
  s = x + y;
  console.log("before Return")
  return s; //return is a keyword at time only one value must return
  console.log("After Return");//Not WORK

}
let val = add(3, 7)
console.log(val);

const Arrowmul = (a, b) => {

  return a * b
}
console.log(Arrowmul(3, 4));


//Q] Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string
/*
let str = "ApnaCollege";
let count=0;
for (let i = 0; i < str.length; i++) {
  let char=str[i].toLowerCase();
  if (
    char==="a"||char==="e"|| char==="i"||char==="o"||char==="u"
  ){
  count ++;
  //console.log(str[i]);
  }
}
 console.log(`vowels count:=${count}`)

for(const char of str){
  console.log(char);
   if (
    char==="a"||char==="e"|| char==="i"||char==="o"||char==="u"
  ){
  count ++;
  }
  console.log(`vowels count:=${count}`)
}
  */

function countVowels(str) {
  let count = 0;
  //ApnaCollege",iterate throgh all each index and check if vowels if yes count++
  for (const char of str) {
    //console.log(char)
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      count++;
    }
  }
  return count;
}
console.log("Total Count"+countVowels("apnacollege"));

const countVow=(str)=>{
let count = 0;
  //ApnaCollege",iterate throgh all each index and check if vowels if yes count++
  for (const character of str) {
    //console.log(char)
    if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
      count++;
    }
  }
  return count;
}

//Q2] If i want to unique vowels and count of those unique vowels

function uniqueVowels(str){
  let unique="";
  for(let i=0;i<str.length;i++){
   const chars= str[i].toLowerCase();
 if (
 (chars === "a" || chars === "e" || chars === "i" || chars === "o" || chars === "u") && !unique.includes(chars)
 )
 {
unique=unique+chars;
 }
  }
  return{
    vowels:unique,
    count:unique.length
  }}
  //call function
  let result=uniqueVowels("apnAcolleggee");
console.log("unique vowels",result.vowels);
console.log("count",result.count);

//-----------USE FOR EACH LOOP(CallBackFunction)

let arr=["pune","Latur"];
// arr.forEach(function printValue(val){//val->value at each index
// console.log(val);
//})
arr.forEach((val,idx,arr)=>{
console.log(val.toLowerCase(),idx,arr);
})
//forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void

//Q]  for the given array of number , print the square of each value using the forEach Loop
let arry=[2,4,6,8,10];
arry.forEach((val)=>{
  console.log(val*val);//use this operator also val**2 
})
//one more method we have
let nums=[67,69,66];
let CalSquare=(num)=>{
  console.log(num*num);
}
nums.forEach(CalSquare);

//Q we are given array of marks studens.Filter out of the marks of students that score 90+

let marks=[41,59,95,99,96]
let score=marks.filter((val)=>{
  return  val>90
})
console.log(score);

//Q Take number n as input from user.Create an array of numbers from 1 to n.Use the reduce method to 
// calculate sum of all numbers in the array .Use the reduce method to calculate product of all numbers in array

let n=prompt("enter a number:");
let array=[];
 for(let i=1;i<=n;i++){
  array[i-1]=i;//1,2,3,4// 1(0),2(1),3(2),4(3)
 }
 console.log(array);

//sum of all numbers
let sumation=array.reduce((pre,cur)=>{
return pre+cur;
})
console.log("Sum of all numbers :"+sumation)
//Factoriaal numbers 
let factorial=array.reduce((pre,cur)=>{
return pre*cur;
})
console.log("factorial Numbers:"+factorial);
