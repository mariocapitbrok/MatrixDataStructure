// Traverse the Matrix using Recursion

const N = 3
const M = 3
let ans = ""

function traverse(arr, i, j) {
  if (i === N - 1 && j === M - 1) {
    ans += arr[i][j]
    return
  }

  ans += arr[i][j] + ", "

  if (j < M - 1) {
    traverse(arr, i, j + 1)
  } else if (i < N - 1) {
    traverse(arr, i + 1, 0)
  }
}

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

traverse(arr, 0, 0)
console.log(ans)
