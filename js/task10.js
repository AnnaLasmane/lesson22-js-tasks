// function matrix(n) {
//     return Array(n).fill(Array(n).fill())
//     .map(function (xs, i) {
//         return xs.map(function (x, j) {
//             return i === j ? 1 : 0;
//         })
//     });
// }
// console.log(matrix(5));

function matrix(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        let arrayInside = [];
        for (let j = 0; j < n; j++) {
            if (i == j) {
                arrayInside[j] = 1;
            } else {
                arrayInside[j] = 0;
            }
        }
        array.push(arrayInside);
    }
    return array;
}
const nColRows = 5;
console.log(matrix(nColRows));