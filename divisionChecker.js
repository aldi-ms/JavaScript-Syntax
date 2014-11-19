'use strict';

function divisionBy3(number) {
    var sumOfDigits = 0;
    while (number / 10 > 0) {
        sumOfDigits += number % 10;
        number = Math.floor(number / 10);
    }
    //return sumOfDigits % 3 === 0 ? true : false;
    if (sumOfDigits % 3 === 0)
        console.log('the number is divided by 3 without remainder');
    else
        console.log('the number is not divided by 3 without remainder');
}

divisionBy3(13);
divisionBy3(188);
divisionBy3(591);
divisionBy3(1023);