function fibonacci(num) {
  let fib = [0, 1];
  for (let i = 2; i <= num; i++) {
    sum = fib[i - 1] + fib[i - 2];
    fib.push(sum);
  }
  return fib[num];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("expecting 5");
  console.log(fibonacci(5));

  console.log("expecting 3");
  console.log(fibonacci(4));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

/* 
problem: find the nth element in the fibonacci series and return it
start with array [0,1]
for loop from 2 to n
sum equals previous element plus element before that
push sum onto array
return array[n] at the end
*/
