

let validNumCheck=(horz,vert,number,matrix)=>{
    validVert = []
    for(let i=0;i<9;i++){
        if(matrix[i][vert]){
            validVert.push(matrix[i][vert])
        }
    }
   for(let vertBox=Math.floor(vert/3)*3;vertBox<Math.floor(vert/3)*3+3;vertBox++){
        for(let horzBox=Math.floor(horz/3)*3;horzBox<Math.floor(horz/3)*3+3;horzBox++){
            if(matrix[horzBox][vertBox]&&validVert.indexOf(matrix[horzBox][vertBox])===-1){
                validVert.push(matrix[horzBox][vertBox])
            }
        }

    }
    if(validVert.indexOf(number)===-1&&matrix[horz].indexOf(number)===-1){
        return true
    }else{
         return false
        }

}


let solv=(matrix)=>{
    for (let horz = 0; horz < 9; horz++) {
        for (let vert = 0; vert < 9; vert++) {
            if (matrix[horz][vert] == 0) {
                for (let num = 1; num <= 9; num++) {
                    if (validNumCheck(horz,vert,num,matrix)) {
                        matrix[horz][vert] = num;
                        if(solv(matrix)){
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
