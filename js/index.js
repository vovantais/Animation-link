// Solition 1
let array = [1, 20, 18, 44, 12, 5, 33, 53, 22, 13];

function maxNum(array) {
    let result = array[0];
    for (let i = 0; i < array.length; index++) {
        if (result < array[i]) {
            result = array[i];
        }
    }
    return result;
}
console.log(maxNum(array));