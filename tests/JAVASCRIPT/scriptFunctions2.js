//Q We are given array of marks of students,Filter out of the marks of students that score 90+

let marks=[41,59,95,99,96]
let score=marks.filter((val)=>{
  return val>90
})
console.log(score);

//Q Take a number as input frm user.Create an array of numbers from 1 to n.
// Use the reduce function to calculate the sum of the numbers in the array.Use the reduce method to calculate product of all numbers in the array

let n=prompt('Enter a number :');
let arr=[];
for(let i=1;i<=n;i++){
  arr[i-1]=i;
}
console.log(arr);
let sum=arr.reduce((res,curr)=>{
  return res+curr;
})
console.log(sum);
let factorial=arr.reduce((res,curr)=>{
  return res*curr;
})
console.log(factorial);
