const myStr = "This is the start. " + "This is the end."; // String Concatenation


let myStr = "This is the first sentence. "; // String Concatenation with compound assignment
myStr += "This is the second sentence."


// Constructing Strings with Variables
const myName = "Arslan";
const myStr = "My name is " + myName + "and I am well!";

// Appending Variables to Strings
const someAdjective = "wonderful";
let myStr = "Learning to code is ";

myStr += someAdjective;

// .length
let lastNameLength = 0;
const lastName = "Lovelace";

// .length
lastNameLength = lastName.length;


/*Use Bracket Notation to Find the First Character in a String
Bracket notation is a way to get a character at */
let firstLetterOfLastName = "";
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; // Change this line

// Understand String Immutability
let myStr = "Jello World";
// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line


// Use Bracket Notation to Find the Nth Character in a String
const lastName = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line


// Use Bracket Notation to Find the Last Character in a String
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line


// Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName = "Lovelace";
// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

//Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The animal that was a " + myAdjective + " " +  myNoun + " " + myVerb + " " + myAdverb ; // Change this line
// Only change code above this line



// Use an array to store more than one thing in a variable 
const myArray = ["hello", 5];



// Nest one Array within Another Array
const myArray = [["dog"], ["cat"]];


//Access Array Data with Indexes
const myArray = [50, 60, 70];
let myData = myArray[0]

// Arrays are mutable 
const myArray = [18, 64, 99];
// Only change code below this line
myArray[0] = 45


//Access Multi-Dimensional Arrays With Indexes
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];


// Manipulate Arrays With push Method
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3])

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
let removedFromMyArray = myArray.pop()


// Manipulate Arrays With pop Method
const myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
let removedFromMyArray = myArray.pop()


// Manipulate Arrays With shift Method
const myArray = [["John", 23], ["dog", 3]];
// Only change code below this line
let removedFromMyArray = myArray.shift()

// Manipulate Arrays With unshift Method
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35])

//Shopping List
const myList = [
  ["Chocolate Bar", 15],
  ["Coke", 12],
  ["Chips", 10],
  ["Gum", 5],
  ["Peanuts", 8],
  ["Candy", 20]
];



//Passing Values to Functions with Arguments
function functionWithArgs(par1, par2){
  console.log(par1 + par2);
}

functionWithArgs(1,2)



//Local Scope and Functions
function myLocalScope() {
  // Only change code below this line
let myVar; 
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


// Global vs. Local Scope in Functions
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();





//Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5
}

// Only change code above this line

addThree();
addFive();


// Assignment with a Returned Value
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7)


function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  item = arr.shift()
  return item;
  // Only change code above this line
}




// Stand in Line
let testArr = [1, 2, 3, 4, 5];
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Booleans
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}


function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue == true){
  return "Yes, that was true";
}
return "No, that was false"
  // Only change code above this line

}

//Comparison with the Equality Operator

// STRiCT Equality
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);




function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);


function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);


//Default case for the switch statement 
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff"
  break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);




//Switch Statement 
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);



function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line




switch(val){
  case "bob":
  answer = "Marley";
  break;
  case 42:
  answer = "The Answer";
  break;
  case 1:
  answer = "There is no #1";
  break;
  case 99:
  answer = "Missed me by this much!";
  break; 
  case 7:
  answer = "Ate Nine";
  break; 
  
}
  // Only change code above this line
  return answer;
}

chainToSwitch(7);

function isLess(a, b) {
  // Only change code below this line
 return a < b
  // Only change code above this line
}

isLess(10, 15);
