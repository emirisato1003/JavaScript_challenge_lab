
function diagonalDifference(arr) {
    let [leftToRight, rightToLeft] = [0, 0]; // Initialize both diagonal sums to 0

    for (let i = 0; i < arr.length; i++) {  // Loop through rows (or columns)
        leftToRight += arr[i][i];           // Add element from left-to-right diagonal
        rightToLeft += arr[i][arr.length - 1 - i]; // Add element from right-to-left diagonal
    }

    return Math.abs(leftToRight - rightToLeft); // Return absolute difference
}

diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);