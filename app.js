/* /* //functions input output machine functions are declared and must be called 
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
const x = 7;
//local variable function scope
function test(x) {
    let x = 45;
    y = 34 ;
    add(x,y);
}
console.log(x);
test();