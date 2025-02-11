# JavaScript Division by Zero Bug

This repository demonstrates a common JavaScript error: division by zero, and provides an improved solution.

The `bug.js` file contains code that demonstrates the issue. The `bugSolution.js` file shows a more robust solution.

## Bug Description

In JavaScript, dividing a number by zero results in `Infinity`, which may not be the most informative error handling.  This bug demonstrates that and provides a better solution.

## Solution

The improved solution in `bugSolution.js` explicitly checks for division by zero and returns a more user-friendly error message instead of `Infinity`.