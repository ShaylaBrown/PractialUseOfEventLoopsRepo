// Part 1 of lab

let counter = 0;

function incrementForever() {
    counter++;
    incrementForever();
}

try {
    // incrementForever();
} catch (err) {
    console.log(err);
    console.log(counter);
}

// This function will take a number and incremnt conuter to that number

function incrementTo(num) {
    if (num <= 0) return;

    if (num === counter) return;

    counter += 1;
    incrementTo(num);
}

try {
    incrementTo(100);
    console.log(counter);
} catch (err) {
    console.log(err);
}

//Part 2.a :recursive function that completely flattens a nested array


function flattenArray(array) {
    return array.reduce((acc, next) =>
        acc.concat(Array.isArray(next) ? flattenArray(next) : next),
        []);
};

const numbers = [1, 2, 3, [4, 5, [6, 7], 8], 9];
console.log(flattenArray(numbers));
// console.log(trampoline(numbers)); This line of code is not working.

//Part 3 : Deferred Execution
const pTag = document.getElementById("simple text")

function isPrime(num) { 
    for (let i = 2; i <= Math.sqrt(num); i++) { 
        if (num % i === 0) { 
            return false; 
        } 
    } 
    return num > 1; 
} 
  
function primeNumber(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
primeNumber(100);