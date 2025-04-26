function fibonacci(n) {
  if (n <= 1) return n;
  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

function sumNumbers(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) throw new Error("Both numbers must be integers.");
  
  const total = a + b;
  console.log(`${a} + ${b} = ${total}`);
  
  return total;
}
