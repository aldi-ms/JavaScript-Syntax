'use strict';

function soothsayer(numsArr, langsArr, citiesArr, carsArr) {
    var result = [];
    for (var i = 0; i < 4; i++) {
        var rand = Math.floor(Math.random() * 5);
        result[i] = arguments[i][rand];
    }
    return result;
}

console.log(soothsayer([3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'],
    ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'],
    ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']));