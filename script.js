//1. Looping a triangle
for (let line = "#"; line.length < 8; line += "#") {
    console.log(line)
} 

//2. Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5) {
        console.log("Buzz")
    }else if (i % 3 == 0 || i % 5 == 0) {
        console.log("FizzBuzz")
    }
}

//3. Finding Powers
const power = function(base, exponent) {
    let result = 1
    for (let count = 0; count < exponent; count++){
       result *= base
    }
    return result
}
console.log(power(2, 6))


//3*. Finding powers using arrow functions
const powerArr = (base, exponent) => {
    let result = 1
    for (let count = 0; count < exponent; count++){
        result *= base
    }
    return result
}
console.log(powerArr(8, 2))

//4. Return minimum of parameters
const minimum = (x, y, z) => {
    return Math.min(x, y, z)
}
console.log(minimum(4, 3, 6))

//5. Evens or Odd
const EvenOdd = function(x) {
    if (x % 2 == 0) {
        console.log ('Even')
    }else console.log("Odd")
}
console.log(EvenOdd(6))

//5*. Recursive Evens
const Evens = function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }else return false;
}
console.log(Evens(50))
console.log(Evens(75))
console.log(Evens(-1))

//6. Bean Counter
function countBs(string){
    let count = 0
    for (let i = 0; i < string.length; i += 1){
        if(string[i] == "B"){
            count += 1
        }
    }
    return count
}

//6*. Bean Counter with own character
function countChar(string, char){
    let count = 0
    for (let i = 0; i < string.length; i ++){
        if(string[i] == char){
            count += 1
        }
    }
    return count
}
console.log(countBs("BBBC"));

console.log(countChar("kakkerlak", "k"));

//7. Sum of a range

//a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step) array.push(i);
    } else {
      for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
  }

// a sum function that takes an array of numbers and returns the sum of these numbers.
function sum(array) {
    let total = 0;
    for (let value of array) {
      total += value;
    }
    return total;
  }  


//8. Reverse an array
array.reverse()  


//9. Repetition
let labels = [];
repeat(5, i => {
labels.push(`Unit ${i + 1}`);
});
console.log(labels);


//10. Functions with control flow
function unless(test, then) {
    if (!test) then();
    }
    repeat(3, n => {unless(n % 2 == 1, () => {
    console.log(n, "is even");
    });
});


//11. Transforming an array with MAP
/* The map method transforms an array by applying a function to all of its elements and building a new array from the returned values. 
The new array will have the same length as the input array, but its content will have been
mapped to a new form by the function.
 */


//12. Summarizing with REDUCE
/* The REDUCE method computes a single value from an array. It builds a value by repeatedly taking a single element
from the array and combining it with the current value.
 */
    