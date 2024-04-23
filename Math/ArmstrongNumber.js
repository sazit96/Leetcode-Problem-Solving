function checkArmstrong(n) {
  let original = n;
  let sum = 0;
  let cnt = 0;
  while (n !== 0) {
    cnt++;
    n = Math.floor(n / 10);
  }
  n = original;
  while (n !== 0) {
    let lastDigit = n % 10;
    sum += Math.pow(lastDigit, cnt);
    n = Math.floor(n / 10);
  }
  if (sum === original) return true;
  return false;
}
