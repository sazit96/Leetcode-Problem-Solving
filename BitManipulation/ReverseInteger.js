var reverse = function (x) {
  let ans = 0;
  while (x !== 0) {
    let digit = x % 10;
    ans = ans * 10 + digit;
    x = Math.trunc(x / 10);
  }
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);
  if (ans > INT_MAX || ans < INT_MIN) return 0;
  return ans;
};
