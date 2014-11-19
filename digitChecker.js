'use strict';

function checkDigit(number) {
    var numToStr = new String(number);
    return numToStr[numToStr.length - 3] == 3 ? true : false;
}

console.log(checkDigit(1341));
console.log(checkDigit(25368));
console.log(checkDigit(123456));
console.log(checkDigit(1235));