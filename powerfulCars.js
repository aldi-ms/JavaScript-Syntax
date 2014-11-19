'use strict';

function convertKWtoHP(powerKWh) {
    return powerKWh / 0.745699872;
}

console.log(convertKWtoHP(75).toFixed(2));
console.log(convertKWtoHP(150).toFixed(2));
console.log(convertKWtoHP(1000).toFixed(2));