const valide=(matrix, horz, vert, num)=>{
    for (let i = 0; i < matrix.length; i++) {
        const horzBox = 3 * Math.floor(horz/ 3) + Math.floor(i / 3);
        const vertBox = 3 * Math.floor(vert/ 3) + i % 3;
        if (matrix[horz][i] == num || matrix[i][vert] == num || matrix[horzBox][vertBox] == num) {
            return false; 
        }
    }
    return true;
}

const solv=(matrix)=>{
    for (let horz = 0; horz < 9; horz++) {
        for (let vert = 0; vert < 9; vert++) {
            if (matrix[horz][vert] == 0) {
                for (let num = 1; num <= 9; num++) {
                    if (valide(matrix, horz, vert, num)) {
                        matrix[horz][vert] = num;
                        if (solv(matrix)) {
                            return true;
                        } else {
                            matrix[horz][vert] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}



module.exports = function solveSudoku(matrix) {
solv(matrix);
return matrix
}
