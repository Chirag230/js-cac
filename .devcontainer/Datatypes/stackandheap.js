//Stack(Primitive) and Heap(Non-Primitive)
let myyoutube = "codehelp"
let anotheryoutube = myyoutube
anotheryoutube="codeaurchai"
console.log(myyoutube)
console.log(anotheryoutube)

let userOne =  {
    emailId: "xyz@google.com",
    upi: "paytm"
}
let userTwo = userOne
userTwo.emailId = "abc@google.com"

console.log(userOne.emailId)
console.log(userTwo.emailId)

/*-----------------------------------------------------------------------------------------*/
const name = "chirag"
const repoCount  = 5
console.log(name + repoCount + ":Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('snakeladder')
console.log(gameName[0])//indexing starts from zero
console.log(gameName[5])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName)//original string is not affected by function because of stack property
console.log(gameName.charAt(6))
console.log(gameName.indexOf('k'))

const newStringOne = "      helllloos   s"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20channel"
console.log(url.replace('%20',"-"));

 const word =  "hi-hello-lello"
 console.log(word.split("-"))// it splitting string into array based on seperator we had passed