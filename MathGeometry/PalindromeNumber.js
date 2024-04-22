var isPalindrome = function (x) {
  let isPali = x;
  let ans = 0;
  while (x != 0) {
    ans = ans * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }
  if (ans != isPali || ans < 0) return false;
  return true;
};
