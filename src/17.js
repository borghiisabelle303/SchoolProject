function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1, temp;
  
  while (n > 2) {
    temp = a + b;
    a = b;
    b = temp;
    n--;
  }
  
  return b;
}

console.log(fibonacci(10));
