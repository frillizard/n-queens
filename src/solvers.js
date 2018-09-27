/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  let matrixSolution = [];
  let runCount = 0;
  let addRooks = function(board, rowIndex, availableColumns) {
    if (runCount > 0) {
      return;
    }
    if (rowIndex >= n || availableColumns.length === 0) {
      return;
    }
    availableColumns.forEach(function (columnIndex) {
      board.togglePiece(rowIndex, columnIndex);
      if (rowIndex === n - 1) {
        matrixSolution = board.rows().map(row => {return row.map(square => {return square})});
        runCount++;
      }
      let newColumns = availableColumns.slice().filter(index => index !== columnIndex);
      addRooks(board, rowIndex + 1, newColumns);
      board.togglePiece(rowIndex, columnIndex);
    });
  }
  addRooks((new Board({n})), 0, _.range(n));

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(matrixSolution));
  return matrixSolution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let solutionCount = 0;
  let addRooks = function(board, rowIndex, availableColumns) {
    if (rowIndex >= n || availableColumns.length === 0) {
      return;
    }
    availableColumns.forEach(function (columnIndex) {
      if (rowIndex === n - 1) {
        solutionCount++;
      }
      let newColumns = availableColumns.slice().filter(index => index !== columnIndex);
      addRooks(board, rowIndex + 1, newColumns);
    });
  }
  addRooks((new Board({n})), 0, _.range(n));
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let solution = [];
  let runCount = 0;
  let addQueens = function(board, rowIndex, availableColumns, queenCount) {
    if (runCount > 0) {
      return;
    }
    if (rowIndex >= n || availableColumns.length === 0) {
      return;
    }
    availableColumns.forEach(function (columnIndex) {
      board.togglePiece(rowIndex, columnIndex);
      if (board.hasAnyMajorDiagonalConflicts() || board.hasAnyMinorDiagonalConflicts()) {
        board.togglePiece(rowIndex, columnIndex);
        return;
      }
      if (rowIndex === n - 1 && queenCount + 1 === n) {
        solution = board.rows().map(row => {return row.map(square => {return square})});
        runCount++
      }
      let newColumns = availableColumns.slice().filter(index => index !== columnIndex);
      addQueens(board, rowIndex + 1, newColumns, queenCount + 1);
      board.togglePiece(rowIndex, columnIndex);        
    });
  }
  if (n === 2 || n === 3) {
    for (let i = 0; i < n; i++) {
      solution.push([]);
    }
  } else if (n !== 0) {
    addQueens((new Board({n})), 0, _.range(n), 0);
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 0) {
    return 1;
  }
  let solutionCount = 0;
  let addQueens = function(board, rowIndex, availableColumns, queenCount) {
    if (!queenCount) {
      queenCount = 0;
    }
    if (rowIndex >= n || availableColumns.length === 0) {
      return;
    }
    availableColumns.forEach(function (columnIndex) {
      board.togglePiece(rowIndex, columnIndex);
      if (board.hasAnyMajorDiagonalConflicts() || board.hasAnyMinorDiagonalConflicts()) {
        board.togglePiece(rowIndex, columnIndex);
        return;
      }
      if (rowIndex === n - 1 && queenCount + 1 === n) {
        solutionCount++;
      }
      let newColumns = availableColumns.slice().filter(index => index !== columnIndex);
      addQueens(board, rowIndex + 1, newColumns, queenCount + 1);
      board.togglePiece(rowIndex, columnIndex);        
    });
  }
  addQueens((new Board({n})), 0, _.range(n)); 
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
// window.alternateNQueensSolutions = function(n) {
  //   let rookSolutions = giveNRooksSolutions(n);
  
  //   let queenSolutions = rookSolutions.filter(function(rookSolution) {
    //     let rookBoard = new Board(rookSolution);
    //     return !rookBoard.hasAnyMajorDiagonalConflicts() && !rookBoard.hasAnyMinorDiagonalConflicts();
    //   });
    
    //   console.log('Number of solutions for ' + n + ' queens:', queenSolutions.length);
    //   return queenSolutions.length;
    // };
    
    
    // queenSolutions.push(board.rows().map(row => {return row.map(square => {return square})}));