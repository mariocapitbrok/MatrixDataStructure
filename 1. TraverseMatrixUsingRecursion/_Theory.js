// Traverse the Matrix using Recursion
// https://www.geeksforgeeks.org/traverse-a-given-matrix-using-recursion/

// Define the dimensions of the matrix
const N = 3
const M = 3
let ans = ""

// Recursive function to traverse the matrix
function traverse(arr, i, j) {
  // If the current position is the bottom-right corner of
  // the matrix
  if (i === N - 1 && j === M - 1) {
    // Print the value at that position
    ans = ans + arr[i][j]

    // End the recursion
    return
  }

  // Print the value at the current position
  ans = ans + arr[i][j] + ", "

  // If the end of the current row has not been reached
  if (j < M - 1) {
    // Move right
    traverse(arr, i, j + 1)
  }

  // If the end of the current column has not been reached
  else if (i < N - 1) {
    // Move down to the next row and start from the left
    traverse(arr, i + 1, 0)
  }
}

// Define the matrix
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

// Start the traversal from the top-left corner of the
// matrix
traverse(arr, 0, 0)
console.log(ans)
