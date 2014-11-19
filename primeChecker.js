'use strict';

function isPrime(number) {
    if (number < 2) return false;
    if (number != Math.round(number)) return false;

    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0)
            isPrime = false;
    }
    return isPrime;
}

console.log(isPrime(Math.PI));
console.log(isPrime(1));
console.log(isPrime(23));
console.log(isPrime(21));
console.log(isPrime(587));