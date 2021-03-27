
const largestPrimeFactorOf = (num) => {
  const stop = parseInt(Math.sqrt(num))

  let largest = num
  let i = 1
  while(i <= stop) {
    if(num % i === 0 && isPrime(i)) {
      largest = i
    }
    i++
  }

  return largest
}

function isPrime(num) {
  const stop = parseInt(Math.sqrt(num))

  let i = 2
  while(i <= stop) {
    if (num % i === 0) {
      return false
    }
    i++
  }

  return true
}

console.log(largestPrimeFactorOf(600851475143))