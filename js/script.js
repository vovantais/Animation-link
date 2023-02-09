
let arr = [1, 2, 2, 3, 3, 5, 5, 7, 9];

function findUniqValueToArray(arr) {
    return [...new Set(arr)];
}
console.log('uniq ' + findUniqValueToArray(arr));


