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


// var makeEmptyMatrix = function(n) {
//     return _(_.range(n)).map(function() {
//       return _(_.range(n)).map(function() {
//         return 0;
//       });
//     });
//   };


window.findNRooksSolution = function(n) {
  var matrixSolution = []



  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(matrixSolution));
  return matrixSolution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // let solutions = [];
  let solutionCount = 0;
  // can actually evaluate directly in original call to helper function
  // let columnRange = _.range(n);

  // can actually evaluate directly in original call to helper function
  // let emptyBoard = new Board({n});

  // define helper function
  let addRooks = function(matrix, rowIndex, availableColumns) {
    // base case -> if rowIndex is greater than n, or there are no available columns, break out of function
    // for rooks, both of these conditions should happen at the same time
    if (rowIndex >= n || availableColumns.length === 0) {
      return;
    }

    // for each of the available column indices:
    availableColumns.forEach(function (columnIndex) {
      // slice passed in matrix so it is not mutated, and can be accessed by all iterations of forEach
      // set a piece on the matrix at the specified rowIndex and columnIndex
      let newMatrix = matrix.slice();
      newMatrix[rowIndex][columnIndex] === 1;
      
      // if it is last row, we know the matrix is now a solution, update count (and push matrix to solutions array if desired)
      if (rowIndex === n - 1) {
        // solutions.push(newMatrix);
        solutionCount++;
      }

      // update the array of available columns based on our recently added piece and make recursive call
      // if we are in the last row, the helper function will return at the beginning of the next recursive call
      let newColumns = availableColumns.slice().filter(index => index !== columnIndex);
      addRooks(newMatrix, rowIndex + 1, newColumns);

    });
  

  }

  // call helper function
  addRooks((new Board({n})).rows(), 0, _.range(n));

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  // let solutions = [];
  let solutionCount = 0;
  // can actually evaluate directly in original call to helper function
  // let columnRange = _.range(n);

  // can actually evaluate directly in original call to helper function
  // let emptyBoard = new Board({n});

  // define helper function
  let addRooks = function(matrix, rowIndex, availableColumns) {
    // base case -> if rowIndex is greater than n, or there are no available columns, break out of function
    // for rooks, both of these conditions should happen at the same time
    if (rowIndex >= n || availableColumns.length === 0) {
      return;
    }

    // for each of the available column indices:
    availableColumns.forEach(function (columnIndex) {
      // slice passed in matrix so it is not mutated, and can be accessed by all iterations of forEach
      // set a piece on the matrix at the specified rowIndex and columnIndex
      let newMatrix = matrix.slice();
      newMatrix[rowIndex][columnIndex] === 1;
      
      // if it is last row, we know the matrix is now a solution, update count (and push matrix to solutions array if desired)
      if (rowIndex === n - 1) {
        // solutions.push(newMatrix);
        solutionCount++;
      }

      // update the array of available columns based on our recently added piece and make recursive call
      // if we are in the last row, the helper function will return at the beginning of the next recursive call
      let newColumns = availableColumns.slice().filter(index => index !== columnIndex);
      addRooks(newMatrix, rowIndex + 1, newColumns);

    });
  

  }

  // call helper function
  addRooks((new Board({n})).rows(), 0, _.range(n));

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};
