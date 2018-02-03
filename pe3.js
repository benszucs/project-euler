/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600,851,475,143 ? */

function findLargestPrime(n) {
  var temp = 0;
  while (n != i) {
    for (var i = 0; i < n; i++) {
      if (n % i === 0) {
        temp = n / i;
        n = temp;
      }
    }
    return n;
  }
}

console.log("Problem 3: " + findLargestPrime(600851475143));
