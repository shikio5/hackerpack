// input = 2
// 1 2
// 4 3
// 1    n
// n^2  n+1


//n^2-n-6

// n^2-8=n-2 , n^2-7=n-1    , n^2-6=n
// n^2-1     , n^2          , n+1
// n^2-2     , n^2-3=n+3    , n^2-4=n+2

// n-3   , n-2      , n-1      , n
// n^2-4 , n^2-3    , n^2-2    , n+1  
// n^2-5 , n^2      , n^2-1    , n+2
// n^2-6 , n^2-7=n+5, n^2-8=n+4, n+3


/*
input = 3
123
894
765

input = 4
01 02 03 04
12 13 14 05
11 16 15 06
10 09 08 07

input = 8
1 2 3 4 5 6 7 8
28 29 30 31 32 33 34 9
27 48 49 50 51 52 35 10
26 47 60 61 62 53 36 11
25 46 59 64 63 54 37 12
24 45 58 57 56 55 38 13
23 44 43 42 41 40 39 14
22 21 20 19 18 17 16 15
*/

console.log(generateMatrix(2));

function generateMatrix(n) {
    let limit = Math.pow(n,2);
    //let matrix = new Array(n).fill(new Array(n).fill(0))
    let matrix = [];
    
    for (let i=0; i<n; i++){
      matrix.push(new Array(n).fill(0));
    }
    
    //console.log(matrix);
   
  
    let value = 1;
    let actionRow = [0,1,0,-1]; 
    // row phase 1, don't move
    // row phase 2, move down
    // row phase 3, don't move
    // row phase 4, move up
    
    let actionCol = [1,0,-1,0];
    // col phase 1, move right
    // col phase 2, don't move
    // col phase 3, move left
    // col phase 4, don't move
    
    let phase = 0; //set it to phase 1
    let row = 0
    let col = 0;
    
    
    while (value <= limit) {
      matrix[row][col] = value;
      //console.log(value);
      value++;
      row += actionRow[phase];
      col += actionCol[phase];
      
      if (isInvalid(matrix, row, col, n)) {
        //console.log("invalid: ", row, col);
        row -= actionRow[phase];
        col -= actionCol[phase];
        //console.log("corrected: ", row, col);
        phase = (phase + 1) % 4;  
        row += actionRow[phase];
        col += actionCol[phase];
        //console.log("changing to: ", row, col, "phase: ", phase);
      }
    }
    
    return matrix;
  }
  
  function isInvalid(matrix, row, col, n) {
    //console.log(matrix, row, col);
    return row >= n || col >= n || row < 0 || col < 0 || matrix[row][col] > 0
  }