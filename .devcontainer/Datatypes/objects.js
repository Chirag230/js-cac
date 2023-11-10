const mySym = Symbol("key1")
//obect literal
const jsUser ={
    name:"Chirag",
    "full name":"Chirag Garg",
    [mySym] : "mykey1",
    age:18,
    location:"haryana",
    email:"chir@google.com",
    isLoggedIn:false,
    lastLoginDays:["Wednesday","Sunday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(jsUser);
Object.freeze(jsUser)
jsUser.greetings = function(){
    console.log("Hello ji")
}
console.log(jsUser.greetings)
console.log(jsUser.greetings())
jsUser.greetings2 = function(){
    console.log(`Hello ji,${this.name}`)
}
console.log(jsUser.greetings2())

//Singleton
//const tinderUser  = new Object()
const tinderUser = {}

tinderUser.id="123"
tinderUser.name="Smmy"
tinderUser.isLoggedIn="true"

// console.log(tinderUser);

const regularUser = {
    email  : "xyz,=.com",
    fullname:{
        username:{
            firstname:"Chirag",
            lastname:"Garg"            
        }
    }
}
console.log(regularUser.fullname.username);

const obj1 = {1:"a",2:"f"}
const obj2 = {3:"ab",4:"fu"}
const obj3 = {5:"an",6:"fw"}

const obj4  = Object.assign({},obj1,obj2,obj3)
console.log(obj4);

const obj5 = {...obj1,...obj2}
console.log(obj5);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty(`isLoggedIn`))
console.log(tinderUser.hasOwnProperty(`isLogged`))

const course = {
    coursename:"Javascript",
    price:"999",
    courseInstructor:"Hitesh"
}

const {coursename}=course
// console.log(coursename);
const {coursename:N}=course//this is called DESTRUCTURING the
console.log(N);