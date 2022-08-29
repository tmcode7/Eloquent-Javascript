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