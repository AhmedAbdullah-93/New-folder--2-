let x=2
let y=5
let add = x+y
let add2 = "xy" + x + y //string first ("xy") so follows string all over hence x + y = 2 5
let add3 = "xy" + add
let add4 = x + y + "xy" //numbers first so addition first followed by string "xy" hence x+y=7 hence 7xy
console.log(add)
console.log("add", add)
console.log("add2", add2)
console.log("add3", add3)
console.log("add4", add4)
let sub= x-y
console.log("sub", sub)
let div= x/y
console.log("div", div)
let exp= x**y //exp = exponent ie 2 raise to the power 5
console.log("exp", exp)
let exp1= y**x
console.log("exp1", exp1)                          
console.log(y % x) //% modulus i.e. remainder when 5 is divided by 2, remainder is 1
let mod= x%y //% is modulus which means the remainder when 2 numbers are divided i.e. when 2 is divided by 5, the remainder is 2
console.log("modulus", mod)
let n=5
n +=15 // +=15 means n + 15
n +=20 // the value of n used is the latest one hence n (20) + 20 i.e 40 now
console.log(n)
//increment operator is ++ , which gives an increment of 1
//decrement operator is --, which gives decrement of 1
n ++
console.log(n)
n + 2 // adds 2 to the value of n but the value returns to baseline value in the next line i.e 41 +2=43, but next line goes back to 41
//comparison operators answer in true or false
n = 5
console.log(n)
// == double equal sign means is equal to 
n == 5
console.log(n==5)
// === triple equal sign compares value and data type both ie equal to and e.g. data type is number in both
let x1=5
let y1=5
console.log(x1==y1)
console.log(x1===y1)
//!= i.e exclamation and equals sign means not equal to 
console.log(n != 5)
// > means greater than
console.log("n>8", n>8)
// < means less than
console.log("n<8", n<8)
// >= means greater than or equal to 
console.log("value of n", n)
console.log("n>5", n>5)
console.log("n>=5", n>=5)
// <= means less than or equal to
console.log("n<5", n<5)
console.log("n<=5", n<=5)
// logical operators are AND OR NOT
// OR is represented by ||
// Condition1 True || Condition2 True = True
// Condition2 True || Condition2 False = True
// Condition2 False || Condition2 False = False
//i.e. if either condition is true then result is true
console.log("n equals 5 OR 6",n==5 || n==6)
console.log("n equals 3 OR 7",n==3 || n==7)
//AND is represented by &&
//if BOTH conditions are True, only then the result is True
console.log("n is greater than 3 AND is less than 8", n>3 && n<8)
console.log("n is equal to 4 and is greater than 3", n==4 && n>3)
//NOT is represented by !
//NOT means that the condition is NOT TRUE
console.log("n is NOT equal to 6", n!== 6)
console.log("n is NOT equal to 5", n!== 5)

//conditional statements IF, ELSE, IF ELSE
// if(condition) {}
// else {}

let country = "Pakistan"
let age = 25

if(country == "Pakistan") {
    console.log("Pakistani")
} else {
    console.log("not Pakistani")
}
//javascript is case sensitive pakistan is not the same as Pakistan

if (age <= 12) {
    console.log("Child")
} else if(age >= 13 && age <=19) {
    console.log("Teenager")
} else {
    console.log("Adult")
}

//odd vs even numbers

if (n % 2 == 0){
    console.log("even")
} else {
    console.log("odd")
}