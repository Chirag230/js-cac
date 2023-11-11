const user = {
    username:"Chirag",
    price:99,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

function chai(){
    username:"Babbar"
    console.log(this.username);
}
chai()//this works only for object not inside functions

const chai = ()=>{
    let username = "hitesh"
    console.log(this);
}
chai()

const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(23,46));

//if only one line function
const addThree  = (n1,n2,n3) => n1+n2+n3
console.log(addThree(23,23,23));

//if we want tp return object
const robj  = (n1,n2,n3) => ({username:"Danie"})
console.log(robj(2,3,4));