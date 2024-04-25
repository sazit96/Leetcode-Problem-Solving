function isPrime(n) {
  let cnt = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      cnt++;
      if (n / i != i) cnt++;
    }
  }
  if (cnt == 2) return true;
  return false;
}
