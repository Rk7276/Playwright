//print 1 to 5

// for(let i=0;i<=5;i++){
//     console.log("RK")
// }
   
//    //Calculate sum 1 to n
//    let sum=0;
//    let n=5;
//    for(i=1;i<=n;i++){
//    sum=sum+i;
//    }    
//    console.log(sum);
   
   //While Loops
//    let i=1;
//    while(i<=5){
//     console.log("Rk");
//     i++;
//    }
    
     //do while Loops
    //  let i=20;
    //  do{
    //     console.log("SS");
    //     i++
    //  }while(i<=6);

      //For Of Loop [update,intialization,updation automatically happens here]

    //   let str="Rushikesh";//iterator-> characters
    //   let size=0;

    //   for(let i of str){
    //     console.log(i);
    //     size++
    //   }
    //   console.log("String Size",size);//9

    // let Students={
    //     name:"Rushi",
    //     age:28,
    //     cgpa:7.27,
    //     isPass:true
    // };
    // for(let key in Students){
    //     console.log("Key",key,"Value",Students[key]);
    // }

    //Q 1] Print all even number 0 to 100;

//     let n=100;
//     for(let i=0;i<=n;i++){
//         if(i%2===0){
//  console.log("Even number:",i)
//         }
           
//     }

//Q2]
// let gameNum=25;

// let userNum=prompt("Guess the game number: ");
// //console.log(userNum);

// while(userNum !=gameNum){
// userNum=prompt("You entered Wrong number, Guess Again: ")//while using prompt use != not !== [beacuse they consider numbers as Strings here]
// }
// console.log("Congratulation !  you eneterd right number");

//String in JS
//Template Literals in JS
// let str= `Rushikesh`;
// let obj={
//   item:"Pen",
//   price:10,
// };
// console.log(str);
// console.log(typeof str);
// let output=`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// let userFullName=prompt("Enter Full UserName without space");
// let username="@"+userFullName+userFullName.length
// console.log(username);
// //console.log(`@${userFullName}${userFullName.length}`);

//-------------------------------------//
//ARRAY IN JS
/*
let heros=["RUSHI","JOHN","DON","MONTY","SONU"]
console.log(heros[0]);
for(let i=0;i<heros.length;i++){
  console.log(heros[i]);
}
//we can use for Of Loop as well to print all values

for(let hero of heros){
  console.log(hero);
}
let cities=["delhi","Latur","Pune","Mumbai","Hyderabad"]

for(let rk of cities){
  console.log(rk.toUpperCase());

}
  */
 //Q] Array Sum of Students marks [85,97,44,37,76,60] Find the Average marks of the entire class

//  let marks=[85,97,44,37,76,60];
//  let sum=0;
//  for(let i=0;i<marks.length;i++){
//   sum=sum+marks[i];
// //console.log(marks[i]);
//  }
//  console.log(sum);
//  let avg=sum/marks.length;
//  console.log(`avg marks of the class=${avg}`);
//  console.log(avg);

 //Use For Of Loop as well
// let marks=[85,97,44,37,76,60];
//  let sum=0;
//  for(let val of marks){
//   sum+=val;
//  }
//   let avg2=sum/marks.length;
// console.log(`avg marks of the class=${avg2}`);

//Q2] for given Array prices of 5 itesm [250,645,300,900,50].All itesm have offer 10% OFF .Change array to store final price after applying offer
/*
let items=[250,645,300,900,50]
//let i=0;
// for(let val of items){
// console.log(`value at index ${i}=${val}`);
// let offer=val/10;
// items[i]=items[i]-offer;
// console.log(`value after offer =${items[i]}`)
// i++;
// }

for(let i=0;i<items.length;i++){
let offer=items[i]/10;
items[i]=items[i]-offer;

}
console.log(items)
*/
//----------------Array Methods---------
// let arr=[1,2,3,4,5,6,7];
//arr.splice(2,2,105,104);
//add element using splice()
// arr.splice(2,0,100);
//delete index
// arr.splice(3,1);
//Replace element
// arr.splice(3,1,101);
//we can use splice() for add,delete,replace

//Q 
//create a array
let companies2=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
//delete first company
//companies1.shift();
//companies.splice(0,1);
companies2.push("Amazon")
companies2.splice(2,1,"ola")



