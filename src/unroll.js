function unroll(squareArray) {
    let result = [];
    let rowStart = 0;
    let rowEnd = squareArray.length - 1;
    let colStart = 0;
    let colEnd = squareArray[0].length - 1;

    while (colStart <= colEnd && rowStart <=rowEnd) {
        // move right
        for (let i = colStart; i <= colEnd; i++) {
            result.push(squareArray[rowStart][i]);
        }
        rowStart ++;

        // move down
        for (let i = rowStart; i<=rowEnd; i++) {
            result.push(squareArray[i][colEnd]);
        }
        colEnd--

        // move left 
        if (rowStart < rowEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                result.push(squareArray[rowEnd][i])
            }
            rowEnd --;
        }

        // rowStart = 1
        // colStart = 0
        // rowEnd = 1
        // colEnd = 1

        if (colStart < colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                result.push(squareArray[i][colStart])
            }
            colStart++
        }
    }

    return result;
}

module.exports = unroll;
