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

