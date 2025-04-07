function squareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot compute square root of a negative number.");
  }
  let sqrt = Math.sqrt(n);
  console.log(sqrt.toFixed(2)); // Format the output with two decimal places.
}
