
//----------------------------------Day 1-----------------------------------------//

console.log('Hello World!') // Hello World
console.log('Hello','World','!') // Hello World

console.log('Happy','New','Year') // Happy New Year
console.log('Happy New Year') // Happy New Year

console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript');

// This is the first comment  
// This is the second comment  
// I am a single line comment

/*
This is a multiline comment  
 Multiline comments can take multiple lines  
 JavaScript is the language of the web  
 */

 console.log(30) // integer
 console.log('30') // string

 console.log(3+2)
 console.log(34+12)
 console.log(34+'32'+32)

 //boolean
true // if the light is on, the value is true
false // if the light is off, the value is false

console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined

// Syntax
let nameOfVariable = value

// Declaring different variables of different data types
let firstName = 'Asabeneh' // first name of a person
let lastName = 'Yetayeh' // last name of a person
let country = 'Finland' // country
let city = 'Helsinki' // capital city
let age = 100 // age in years
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried)

// Declaring variables with number values
let ages = 100 // age in years
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in °C
const PI = 3.14 // geometrical constant
console.log(gravity, boilingPoint, PI)

let name = 'Asabeneh', job = 'teacher', live = 'Finland'

//----------------------------------Day 2-----------------------------------------//

let word = 'JavaScript'

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             // false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false

let nums = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums == numbers)  // false



let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOnes == userTwos) // false

let numss = [1, 2, 3]
let numberss = numss

console.log(numss == numberss)  // true

let userOnes = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwos = userOnes

console.log(userOnes == userTwos)  // true

//-------------- Math

let agess = 35
const gravitys = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PIs = 3.14       // pi a geometrical constant

// More Examples
const boilingPoints = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant


const PIx = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10

//-------------- String

/* 
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (") 
*/

let spacea = ' '           // an empty space string
let firstNames = 'Asabeneh'
let lastNames = 'Yetayeh'
let countrys = 'Finland'
let citys = 'Helsinki'
let languagea = 'JavaScript'
let jobs = 'teacher'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

let fullName = firstNames + spaces + lastNames; // concatenation, merging two string together.
console.log(fullName);


//------------------------

// Declaring different variables of different data types
let space = ' '
let firstNamea = 'Asabeneh'
let lastNamed = 'Yetayeh'
let countryf = 'Finland'
let cityf= 'Helsinki'
let language = 'JavaScript'
let jobf = 'teacher'
let agef = 250


let fullNamef =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)

//------------------------

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

/* 
I hope everyone is enjoying the 30 Days Of JavaScript challenge.
Do you ?
Days  Topics  Exercises
Day 1 3 5
Day 2 3 5
Day 3 3 5
Day 4 3 5
This is a backslash  symbol (\)
In every programming language it starts with "Hello, World!"
In every programming language it starts with 'Hello, World!'
The saying 'Seeing is Believing' isn't correct in 2020 
*/

let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)


