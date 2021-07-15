// zimejam tabulas

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

/// janis


function getIdentityMatrixAsString(number) {
    let output = '';
    for (let row = 0; row < number; row++) {
        let rowString = '';
        for (let col = 0; col < number; col++) {
            if (col === row) {
                rowString += '1  ';
            } else {
                rowString += '0  ';
            }
        }            
        output += `${rowString}\n`;// lai "<br>"
    }

    return output;
}

console.log(getIdentityMatrixAsString(1));
console.log(getIdentityMatrixAsString(10));

function getIdentityMatrixAsArray(number) {
    let outputArray = [];
    for (let row = 0; row < number; row++) {
        let rowArray = [];
        for (let col = 0; col < number; col++) {
            if (col === row) {
                rowArray.push(1);
            } else {
                rowArray.push(0);
            }
        }            
        outputArray.push(rowArray);
    }

    return outputArray;
}
console.log(getIdentityMatrixAsArray(1));
console.log(getIdentityMatrixAsArray(10));