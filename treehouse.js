'use strict';

function treeHouseCompare(arr) {
    var houseArea = arr[0] * arr[0] + (arr[0] * (2 * arr[0] / 3) / 2);
    var treeArea = (arr[1] * arr[1] / 3) + (Math.pow((2 * arr[1]) / 3, 2) * Math.PI);

    if (houseArea > treeArea)
        return 'house/' + houseArea.toFixed(2);
    else if (houseArea < treeArea)
        return 'tree/' + treeArea.toFixed(2);
    else return 'equal/' + treeArea.toFixed(2);
}

console.log(treeHouseCompare([3, 2]));
console.log(treeHouseCompare([3, 3]));
console.log(treeHouseCompare([4, 5]));