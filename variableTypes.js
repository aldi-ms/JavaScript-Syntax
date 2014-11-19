'use strict';

function variablesTypes(arr) {
    var name = '"My name: ' + arr[0] + ' //type is ' + typeof arr[0];
    var age = 'My age: ' + arr[1] + ' //type is ' + typeof arr[1];
    var sex = 'I am male: ' + arr[2] + ' //type is ' + typeof arr[2];
    var foods = 'My favourite foods are: ' + arr[3] + ' //type is ' + typeof arr[3] + '"';
    return name + '\n' +  age + '\n' + sex + '\n' + foods;
}

console.log(variablesTypes(['Sasho', 22, true, ['nuts', 'pizza', 'musaka']]));