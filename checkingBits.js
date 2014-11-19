'use strict';

function bitChecker(number) {
    var bitPos = 3;
    return !!(number & (1 << bitPos));
}

console.log(bitChecker(23));
console.log(bitChecker(333));
console.log(bitChecker(2567564754));
console.log(bitChecker(425));