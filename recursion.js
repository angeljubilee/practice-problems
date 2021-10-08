function factorial(n) {
  if (n < 0) {
    return 0;
  }
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (Math.abs(n) === 1) {
    return 1;
  }
  if (n > 0) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  return fibonacci(n + 2) - fibonacci(n + 1);
}

console.log(factorial(6));
console.log(fibonacci(8));
console.log(fibonacci(-6));
