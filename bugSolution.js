function foo(a, b) {
  if (b === 0) {
    return 'Error: Cannot divide by zero';
  }
  return a / b;
}
console.log(foo(10, 2)); // Output: 5
console.log(foo(0, 0)); // Output: Error: Cannot divide by zero
console.log(foo(10, 0)); // Output: Error: Cannot divide by zero