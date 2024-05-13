function sumOfNth(n) {
  if (n == 0) return 0;
  return n * n * n + sumOfNth(n - 1);
}

console.log(sumOfNth(5));
