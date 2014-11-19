'use strict';

function convertDigitToWord(value) {
    switch (value) {
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        default: return 'value should be 0 < value < 10';
    }
}

console.log(convertDigitToWord(1));
console.log(convertDigitToWord(4));
console.log(convertDigitToWord(9));
console.log(convertDigitToWord(0));