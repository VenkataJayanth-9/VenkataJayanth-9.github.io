//In javascript we don't need to declare varibles explicetly 

let name = "Jayanth"
let age = 21
let promoted = true
console.log(name)
console.log(typeof(name))//typeof(varibale_name) prints the type of the varibale passed in it.

let city = null //if want to print typeof any varible which is null js treat this as a object and print object.
console.log(typeof(city))

let value
console.log(value) //This print undefined

//type casting from number to string.
console.log(typeof age)
let strAge = String(age)
console.log(typeof strAge)

//type casting from string to number.
let rating = "5"
console.log(typeof rating)
let stringRating = Number(rating)
console.log(typeof stringRating)

let flag = "ture"
let boolFlag = Boolean(flag)
console.log(typeof boolFlag)