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



 
 //Part 2.a
 const factorial = (n) => {
    if (n === 0) return 1; 

    return n * factorial(n - 1); 

  }

  const facto = (n, a = 1) => {
    if (n === 0) return a;
    return () => facto(n - 1, n * a);
  }
 
  const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }

  console.log(trampoline(facto(10000)))

//Part 2.a :recursive function that completely flattens a nested array


function flattenArray(array) {
    return array.reduce((acc, next) =>
    acc.concat(Array.isArray(next) ? flattenArray(next) : next) ,
    []);
};

const numbers = [1, 2, 3, [4, 5, [6, 7], 8], 9];
console.log(flattenArray(numbers));

//Part 2.b : trampoline recursive function

// sources
https://dev.to/ahmedosama_st/optimizing-recursive-functions-1lhh

https://akhtarvahid.medium.com/flatten-nested-array-recursively-array-flat-in-javascript-5350f9d6f08d