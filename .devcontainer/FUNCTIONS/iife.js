// Immediately Invoked Function Expressions
// INTERVIEW QUESTION
//  Global scope ke pollution se bachne ke liye iffe is used
// (function(){
//     console.log(`DB connected`);
// })()

(function chai(){
    console.log(`DB connected`);
})();
//TWO EXECUTE TWO IFFE FUNCTION SIMULTANEOUSLY ; IS IMPORTANT
( (name) => {
    console.log(`hi ${name}`);
} )('Chirag')