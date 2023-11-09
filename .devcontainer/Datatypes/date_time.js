// let myDate =  new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log((myDate.toLocaleDateString()));
// console.log(typeof myDate);

let myCreatedDate = new Date(2024,5,23)
console.log(myCreatedDate.toDateString());

let myTimeStamp =  Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

let newDate = Date.now()
newDate.toLocaleString('default',{
    weekday: "long" ,
})

