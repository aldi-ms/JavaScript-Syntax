'use strict';

function calcSupply(age, maxAge, food, foodPerDay) {
    var totalFood = ((maxAge - age) * 365) * foodPerDay;
    console.log(totalFood.toFixed(0) + 'kg of ' + food + ' would be enough until I am ' + maxAge + ' years old.');
}

calcSupply(18, 88, 'cheese', 0.6);
calcSupply(38, 118, 'chocolate', 0.5);
calcSupply(10, 91, 'meat', 1.1);