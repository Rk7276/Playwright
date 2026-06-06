console.log("hello world");
//alert("welcome to apna college");
console.dir(document.body.childNodes);
console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.dir(document.body.childNodes[1]);
let heading=document.getElementById("heading");
console.dir(heading);

let heading2=document.getElementsByClassName("heading-class");
console.dir(heading2);
console.log(heading2);
//Query Selector
let elements=document.querySelector("p");//Matching fisrt elements
console.dir(elements);

let elementsAll=document.querySelectorAll("p");//Matching all elements
console.dir(elementsAll);


let elementsclass=document.querySelectorAll(".heading-class");//Matching all elements with the class "heading-class"
console.dir(elementsclass);

let elementsid=document.querySelector("#myid");//Matching  elements with the ID "myid"
console.dir(elementsid);

let div=document.querySelector("div");//Matching  elements with the tag name "div"
console.dir(div);



let idx=1;
let divs=document.querySelectorAll(".box");
for(div of divs){
 div.innerText=`new Unique Values ${idx}`;
 idx++;
}
// divs[0].innerText="New Unique Value 1";
// divs[1].innerText="New Unique Value 2";
// divs[2].innerText="New Unique Value 3";
let Box=document.querySelector(".box");
Box.style.backgroundColor="red";
//Q Create a new button element .Give it a text"Click me",Backgroud color white.Insert the button as the fisrt element inside the body tag.
let btn=document.createElement("button");
btn.innerText="Click Me Again";
btn.style.color="white";
btn.style.backgroundColor="red";
document.querySelector("body").prepend(btn);
console.log(btn);

let fruitsDiv = document.getElementById("fruits");

// append at end of #fruits div
//fruitsDiv.append(btn);
// prepend at start of #fruits div
//fruitsDiv.prepend(btn);
//fruitsDiv.before(btn);
fruitsDiv.after(btn);     

let newheading=document.createElement("h1"); 
newheading.innerHTML="<i> Hi ! I am New </i>";
document.querySelector("body").prepend(newheading);
// Q2] Create a<p>tag in html , give it a class and some styling.Now Create a new class in CSS and try to append this class to
//  the <P>element. Did you notice,how you overwrite the class name when you add a new one?Solve this problem using javascript.
let para=document.querySelector("p");
para.getAttribute("class");//getting class name
para.setAttribute("class","newClass"); //overwriting class name
//para.classList.add("newClass"); //adding new class without overwriting existing class name


//Event Object
let button3=document.querySelector("#btn3");
button3.onclick=(evt)=>{
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
    let a=25;
    a++;
    console.log(a);//26
}

let newDiv = document.querySelector(".newDiv");
let body1 = document.querySelector("body");

// Hover → dark
newDiv.addEventListener("mouseenter", () => {
    body1.classList.add("hoverdark");
    body1.classList.remove("hoverlight");

    console.log("current mode is dark");
});

// Mouse leaves → light
newDiv.addEventListener("mouseleave", () => {
    body1.classList.add("hoverlight");
    body1.classList.remove("hoverdark");

    console.log("current mode is light");
});

//Event Listners
let button4=document.querySelector(".btn4");    
button4.addEventListener("click",()=>{
    console.log("button was clicked ");
});

button4.addEventListener("click",()=>{
    button4.ondblclick=()=>{
        console.log("button was double clicked");
    }
    console.log("button was clicked-handled 2 ");
});
//for Remove listener [Callback referece should same for remove]so we have store to any variables fisrt
const handler3=()=>{
    console.log("button was clicked-handled 3 !");
}
button4.addEventListener("click",handler3);

   button4.addEventListener("click",()=>{
        console.log("button was clicked-handled 4 ");
    });
   //remove listener now
   button4.removeEventListener("click",handler3);
    

 //Q Create a toggle button that Changes the screen to dark-mode when clicked & light-mode when clicked again 
 
 
 let modebtn=document.querySelector("#changemode1");
 let body=document.querySelector("body");
 let currmode="light";//dark
 modebtn.addEventListener("click",()=>{
    
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark");
          body.classList.remove("light");
    }else{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }   
    console.log(`current mode is ${currmode}`);
 })

