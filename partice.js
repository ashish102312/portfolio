// // basic function.
// function display(){
//     return " hi there ";
// }
// console.log(display());
// // arrow function.
// let a = ()=>{
//     return " these re arrow function";
// }
// console.log(a());

// function cal(a,b){
//     console.log("the add value is ")
//     console.log(a+b);
// }
// let a =9;
// let b = 8;
// let add = (a,b)=>{
//     console.log(a+b);
// }
// let sub = (a,b)=>{
//     console.log("the subtract value is ")
//     console.log(a-b);
// }
// let mul = (a,b)=>{
//     console.log("the multiple value is ")
//     console.log(a*b);
// }
// let div = (a,b)=>{
//     console.log("the div value is ")
//     console.log(a/b);
// }

//add without if else
// let add=(num1,num2)=>num1+num2;
// let sub=(num1,num2)=>num1-num2;
// let mul=(num1,num2)=>num1*num2;
// let calculate = (num1, num2, operator) => {
//  return operator(num1,num2);
// };
// console.log(calculate(2,3,add));

// let avg = (a,b,c)=>(a+b+c)/3;
// console.log(avg(2,3,4));

// error handling in javascript
// function div(a,b){
//     try{
//         if(a==b){
//             throw " they both are same it will be zero"
//         }
//         return a/b;
//     }
//     catch(error){
//         return "Error" + error;
//     }
// }
// console.log(div(10,10))

//object and class

// const student ={
//     Firstname: "ashish",
//     Lastname: "bhardwaj",
//     age: 21,
//     class: 3,
//     add: function(){
//         return this.age+this.class;
//     },
//     fullName: function(){
//         return this.Firstname + this.Lastname;
//     }
    
// }

// console.log(student.add());
// console.log(student.fullName());


//currying : in one another functions are they are , main function only woks if uh have all parameters,
// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         };
//     };
// }
// console.log(add(2)(3)(4));
// const add=(a)=>(b)=>(c)=>a+b+c;
// console.log(add(3)(4)(4));

// function SendMail(to){
//     return function(subject){
//         return function(body){
//             return `hey uh have mail from ${to} the main subject is ${subject} conatin is ${body}`
//         }
//     }
// }
// let step1 = SendMail("aashish345@gmail.com");
// let step2 = step1("New order confirmaion");
// console.log(step2("hey here is something for you"));

// const SendEmail = (to)=>(subject)=>(body)=>`hey ${to} there is email ${subject} and it has something for you ${body}`;
// let one = SendEmail("ashish123@gmail.com");
// let two = one("project submittion ");
// console.log(two("dude your project has been submitted check detailes are correct"));

// clousers
// function adder(a){
//     function add(b){
//         console.log(a+b);
//     }
//     return add;
// }
// let adding = adder(10);
// adding(10);
// let adding2 = adder(20);
// adding2(20);

// function fullName(num1){
//     function lastName(num2){
//         console.log(num1,num2);
//     }
//     return lastName;
// }
// let name = fullName("ashish");
// name("bhardwaj");

// document.addEventListener("DOMContentLoaded",function(){
// const haha = document.getElementById("My-name");
// const btn =document.getElementById("My-btn");
// function MainSize (size){
//     function changeSize(){
//         haha.style.fontSize = `${size}px`;
//     }
//     return changeSize;
// }
// let size30 = MainSize(30);
// let size50 = MainSize(50);
// let size60 = MainSize(60);

// btn.addEventListener("click",size50);
// });

// function counter(){
//     let count =1;
//     function inc(){
//         console.log(count++);
//     }
//     return inc;
// }
// const makeCount = counter();
// makeCount();
// makeCount();
// makeCount();

// export function det(name,age){
//     return`hello ${name} and my age is ${age}`;
// }

// combine 2 array with spread operator
// let arr1 = [1,2];
// let arr2 = [8,9];

// let mainArr =[...arr1,...arr2];
// console.log(mainArr);

//extract the name and age from an ovject in single line

// const person = {
//     name: "ashish",
//     age: 21,
//     gender: "male"
// }
// console.log(`hi my name is ${person.name} and my age is ${person.age} and i m ${person.gender}`);

// //loops in javascript
// const n =5;
// for(let i =0;i<n;i++ ){
//     console.log("ashish");
// }
// //while in javascript
// let i=0;``
// while(i<=n){
//     console.log("hi");
//     i++;
// }
// //do while in jacscript
// let b = 1;
// do{
//      console.log("ashish");
//      b++;
// }
// while(b<0){

// }


// for ..in
// const student ={
//     name:"ashish",
//     age: 21,
//     gender:"male"
// }
// for( let hero in student){
//     console.log(` ${hero} => ${student[hero]}`);
    
// }
//for ..of array
// const hero =["ironman", "thor","hulk"];
// for( const names of hero){
// console.log(names);
// }
//for ..of string
// const Str ="hello";
// for( let c of Str){
//     console.log(c)
// }

//array
// const arr = [1,"hello",4,(a,b)=>a+b];
// console.log(arr);

// array printing for ..in
// const arr1 = [1,"hello",4,(a,b)=>a+b];
// for( let k in arr1){
//     console.log(arr1[k]);
// }

// let arr = [1,2,3,4,5];
// console.log(arr);
// arr.push(4,5,6);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.sort();
// console.log(arr);
// //forEach
// arr.forEach((arr,index)=>{
//     console.log(index + " : "+ arr);
// });
// //inculdes
// console.log(arr.includes(7));
// //index of 
// console.log(arr.indexOf(4));
// //splice()
// console.log(arr.splice(1,4));

//filter
// const arr = [1,2,3,4,5,6,7,8,9,20];
// function checkEven(arr){
//     if(arr % 2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// let newle = arr.filter(checkEven);
// console.log("array elements even only : "+newle);
// console.log("index number even : "+arr.filter((arr,idx)=>idx%2==0));
// console.log("index number odd and number shouled be even : "+ arr.filter((a,indx)=>indx%2 !=0 && a%2==0));

// map : we can  only update element but in filter we can update, delete , add more elements.

// let num = [2,5,8,9];
// function square(num){
//     return num * num;
// }
// let sqn = num.map(square);
// console.log(sqn);
// console.log("by using arrow fucntion finding  square : "+num.map(num=>num*num));
// using filter and map
// let sp = num.filter(num=>num%2==0).map(sp => sp*sp);
// console.log(sp);

// // find
// const det =[
//     {
//         id1 : 123,
//         name :  "anil"
//     }
//     ,{
//         id2: 124,
//         name :  "amit"
//     }
//     ,{
//         id3 : 125,
//         name :  "anish"
//     },
//     {
//         id4 : 126,
//         name :  "ashish"
//     }
// ]
// console.log(det.find(id=>id.id1 == 123));
// console.log(det.find(id=>id.id2 == 124));
// let p1= det.find(id=>id.id1 == 123);
// let p2 = det.find(id=>id.id2 == 124);
// let p3 = det.find(name1 => name1.name =="anish" )
// console.log(p1);
// console.log(p2);
// console.log(p3);

// reduce
// const a = [1,2,3,4,5];
// const abc = a.reduce((cur,per,index)=> cur+per,0);
// console.log(abc);

// // sort string
// let arr ="ashish";

// console.log(arr.split("").sort());


// // avg of 
// let a = 45;
// let b = 46;
// let c = 47;
// let d = 48;
// function avg(){
//     return (a+b+c+d)/4;
// }
// console.log(avg());

// // dulpicate 
// let dec =[10,10,20,30,50];
// let rem = dec.reduce((per,cur)=>{
//     if(!per.includes(cur)){
//         per.push(cur);
//     }
//     return per;
// },[]);
// console.log(rem);

// // in a proper list 
// const products = [
//     {name: "laptop", category:"Electronics"},
//     {name: "shirt", category:"Clothing"},
//     {name: "Phone", category:"Electronics"},
//     {name: "shoes", category:"Clothing"},
// ];


//Web API
// console.log("start");
// function display(){
//     console.log("middle");
// }
// const id = setTimeout(display,0);
// console.log("end");
// // display();
// clearTimeout(id);
// let count =0;
// function inc(){
//     count +=1;
//     console.log(count);
// }
// let id = setTimeout(inc,3000);
// clearTimeout(id);
// console.log('settimeout is stopped.');

//INterval

// function set(){
//     const time = new Date();
//     console.log(time);
//     console.log("is it printing")

// }
// const stop =setInterval(set, 3000);
// clearTimeout(stop);

// let count =1;
// function timer(){
//     console.log(count++);
//     if(count==5){
//         clearInterval(stop);
//     }
// }
// const stop = setInterval(timer,2000);

// promises
// const res = fetch("https://dummyjson.com/users");
// console.log(res);
// res.then((hit) => {
//     return hit.json();
// })
// .then((data) => {
//     console.log("Inside then:", data);
// })
// .catch((err) => {
//     console.log("Inside catch:", err);
// });


// let promise = new Promise((resolve,reject)=>{
//     let a = true;
//     if(a){resolve("this is resolve");}
//     else{reject('this is reject')};
// });
// promise.then((data)=>{
//     console.log("inside the then : ", data);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("this is running ");
// })

// create a process for cart checkout page usig callback and promises with asnyc await with the following steps . here each step can  contain a set Timeout with 2 secounds to mimic the asynchornous delay 
// a,getOrderinfo
// b, checkifAvailebale
// c, placeOrder
// d, return success

function getOrderInfo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Getting order info");
            resolve();
        },2000);
    });
}
function checkIfAval(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("check if its ava item ");
            resolve();
        },2000);
    });
}
function placeOrder(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("the order is placed");
        resolve();
        },2000);
    })
}
function succes(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("SuccesFull");
            resolve();
        },2000);
    })
}
async function Heack() {
    try{
        await getOrderInfo();
        await checkIfAval();
        await placeOrder();
        await succes();
        console.log("its DONE");
    }
    catch(err){
        console.log(" this is : "+  err);
    }
}
Heack();
