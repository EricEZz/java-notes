 /* //functions input output machine functions are declared and must be called 
//functions can accept multiple arguments or parameters ,
function test(mess){
    //output
 console.log(mess);
}
//run the function
//numbewr data type
test(101);

//string data type ""
test("balls")

//booLeans true of false
test(false) */

// function add (x, y) {
//     console.log(x + y);
// }
// //declare and define variable
// const num1 = Number (prompt ("enter a number"));
// const num2 = Number (prompt ("enter a number"));
// //add(num1,num2);
// //const does not allow definition to change
// //let allows def to change 
 // let x = 5;
  // x = 6; 

//global variable */
/*
const x = 7;
//local variable function scope
function test(x) {
    let x = 45;
    y = 34 ;
    add(x,y);
}
console.log(x);
test();
function check(x) {
    if (x <10);
    console.log("small");
 else if(x>10){
    console.log("large nuber"); 
} else {
    console.log("error");
}
}
function other (x,y){
    if (x < 10 && y < 10){
        console.log("smol number");
    }else if (x>10 || y>10 ){
        console.log("xome large numbers");
    }
    else{
        console.log("all large numbers");
    }
}
function getBMI(){
    return
}
function checkBMI(){}

function init(){
    let BMI= getBMI(height,weight);
    checkBMI(BMI);
}

const thing2 = {
    firstName: "Colon",
    lastName: "Semicolon",
    graduated: false
}
*/


{
    const thing ={
    firstName: "Chen-Zee",
    lastName: "HeHe",
    graduated: false,
    DOB: 2007,
    siblings: ["Chen Yee", "ChenWee"],
    age: function(){
        return year - this.DOB;
    }
}
}
//arrays store items and can access items by their index starting at 0
const nums = [1, 2, 3, 4, 5];
//console.log(nums[nums.length - 1 ]);
//foreach to run function on every item (for loop)
nums.forEach((el)=> console.log(el,index));
//arrow functions ()=> are simpler, auto return its output, this keyword changes