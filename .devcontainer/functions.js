// function sayMyName(){
//     console.log("C");
//     console.log("H");
//     console.log("I");
//     console.log("R");
//     console.log("A");
//     console.log("G");
// }
// // sayMyName()

// function addTwoNumbers(number1,number2){
//     return number1 + number2
// };
// let result = addTwoNumbers(3,4)
// console.log(result);
// addTwoNumbers(3,"4")
// addTwoNumbers("3",4)
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

// function loginUserName(username="sam"){
//     if(!username){
//         console.log("Enter a username");
//         return
//     }
//     return `${username} has just landed`
// }
// console.log(loginUserName(""));
// console.log(loginUserName("Chirag"));

// here ... is called rest operator
//function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,350,435));

function handleObject(anyobject){
    console.log(`username id ${anyobject.name} and price is ${anyobject.price}`);
}

handleObject({
    name:"samy",
    price:6000
})


