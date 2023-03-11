/*
--------------------------------------------------------------

// syntax

if (condition) {
    //this part of code runs for truthy condition
  }

--------------------------------------------------------------
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
3 is a positive number 
--------------------------------------------------------------

*/



let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number




let number = 0
if (number > 0) {
    console.log(`${number} is a positive number`)
}
else if (number < 0) {
    console.log(`${number} is a negative number`)
} 
else {
    console.log(`${number} is a zero`)
}