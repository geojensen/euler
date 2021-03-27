console.log('Project Euler - Problem 02');
console.log('https://projecteuler.net/problem=2');
console.log('----------------------------------');

const fibonacciSequence = [0, 1];
const limit = 4000000;
let index = 2;
let nextInSequence = fibonacciSequence[index - 1] + fibonacciSequence[index - 2];

while (nextInSequence <= limit) {
  fibonacciSequence.push(nextInSequence);
  index += 1;
  nextInSequence = fibonacciSequence[index - 1] + fibonacciSequence[index - 2];
}

const sumOfEven = fibonacciSequence.reduce((a, value) => a + (value % 2 === 0 ? value : 0), 0);

console.log('Sum of even terms:', sumOfEven);