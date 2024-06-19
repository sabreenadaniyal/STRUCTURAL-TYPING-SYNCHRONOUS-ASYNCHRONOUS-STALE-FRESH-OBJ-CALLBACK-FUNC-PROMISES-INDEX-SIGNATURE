//=================================STRUCTURAL TYPING(structure of object)====================================================
interface LED{
    name:string,
    color:string,
    length:number
}
interface TV{
    name:string,
    length:number
}
let LED = {
   name:"Samsung",
   color:"Black",
   length:60,
};
let TV = {
   name:"Sony",
   length:50
};
LED = TV   //Error b/c Led has its own property as compare to Led.
TV = LED
console.log(LED.name);


//===================================INDEX SIGNATURE(Find index in Object)===============================================
let myName:{name:string,id:number,[abc:string]:any;} = {
    name : "Zehra",
    id : 7890,
    rollNo : 123456,
    fullName : "Syeda Zehra"
}
console.log(myName.name,myName.rollNo);

//==========================================STALE & FRESH OBJECT=======================================
//Stale Obj:
interface Tube{
    diameter:number,
    length:number
}
interface Ball{
    diameter:number
}
let tube:Tube={
    diameter:25,
    length:100
};

let ball:Ball={
   diameter:20
};
//tube = ball (Error) //LHS have more properties than RHS
ball = tube        //RHS cannot have less property than LHS

//Fresh Obj:
ball = {diameter:20,
        length:52,    //Error through typescript strickly check property
}

//==================================SYNCHRONOUS & ASYNCHRONOUS PROGRAMMING=============================================
//SYNCHRONOUS
console.log("Hello World");
console.log("Hey!I'm Sabeen");

function add(){
    return (10+5)
}
let result = add()
console.log(result);

//ASYNCHRONOUS
function Three(callBack:()=>void){
    console.log("3rd");

    setTimeout(()=>{
         console.log("Hello!");
         callBack();
    },3000);  
    console.log("Wait a minute..");
}
function Four(){
    console.log("4th");
}
Three(Four)

//=====================CALLBACK FUNCTION(a function passed into another function as an argument)===============================
function One(callBack:()=>void){
    console.log("ONE");
    callBack();
}
function Two(){
    console.log("TWO");
}
One(Two)

//=======================PROMISES(A promise is said to be settled if it is either resolved or rejected)======================
function gamePromise(){
  return new Promise((resolve, reject) => {
    console.log("WELCOME TO THE JUNGLE GAME!!");
 
    setTimeout(() => {
      console.log("Loading...");
    },1500);
    
    let solve = true
 if(solve){
    setTimeout(() => {
     resolve("The Game Has Been Started.");
    },4000);
   
}else{
    setTimeout(() => {
     reject("!!ERROR!!");
    },4000);
}
})
}
gamePromise()
.then((res)=>{console.log(res);
})
.catch((rej)=>{console.log(rej);
})


