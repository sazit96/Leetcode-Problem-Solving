function sumOfAllDivisors(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.floor(n / i) * i;
  }
  return sum;
}
