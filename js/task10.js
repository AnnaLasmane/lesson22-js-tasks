function matrix(n) {
    return Array(n).fill(Array(n).fill())
    .map(function (xs, i) {
        return xs.map(function (x, j) {
            return i === j ? 1 : 0;
        })
    });
}
console.log(matrix(5));