// if(2=="2"){
//     console.log(`executed`);
// }
// if(2!=="2")
// {
//     console.log(`executed2`);
// }

// const month = 3
// const month = 5

// switch (month) {
//     case 1: 
//     console.log(`jan`);        
//         break;
//     case 2: 
//     console.log(`feb`);        
//         break;
//     case 3: 
//     console.log(`march`);        
//         break;

//     default:
//         console.log(`Happy Diwali`);
//         break;
// }

//TRUTHY AND FALSY VALUE

//falsy values : false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values :"0" ,`false` ," " ,[] ,{} ,function(){}

//const userEmail = []//truthy value
//const userEmail = function(){} //truthy value

// if(userEmail){
//     console.log(`Got user email`);
// }else{
//     console.log(`Dont have email`);
// }

// console.log(false==0);
// console.log(false=='');
// console.log(0=='');

//NULLISH COALESCING OPERATOR(??)

let val1
val1=5??10
console.log(val1);
let val
val=null??10
console.log(val);
let val3
val3=undefined??13
console.log(val3);
let val4
val4=undefined??78??32
console.log(val4);

const rate =6000
rate>7000 ?console.log(`EXPORT`):console.log(`IMPORT`);