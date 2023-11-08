let score = "33abc"
let score1=null
let score2=undefined
console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)

let value = 3
let negValue = -value
console.log(negValue)

let str1="hi"
let str2=" amigo"
let str3 = str1+str2
console.log(str3)

console.log(1+2)
console.log("1"+"2")
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")

console.log("2">1)
console.log("02">1)
console.log(null>0)
console.log(null==0)
console.log(null>=0)
//Reason for above answer is :(==) operator ans comparisions work differently(<>=)
//Comparisions convert null to a number ,treating it as 0

console.log("2"===2)

//Prmitive datatypes: -7:- String,Number,Boolean,null,undefined,symbol,bigInt(for bigger values)
//Reference datatypes/Reference  : Array,objects,functions