// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let example = () => {
  let numOne = 1;
  
  let example2 = () => {
    let numTwo = 2;
    return numOne + numTwo;
  }
 return example2();
}
example();


// ==== Challenge 2: Create a counter function ====
let tracker = 0;
const counter = () => {
  tracker += 1;
  return tracker;
  // Return a function that when invoked increments and returns a counter variable.
};
counter();
counter();
counter();
counter();

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
