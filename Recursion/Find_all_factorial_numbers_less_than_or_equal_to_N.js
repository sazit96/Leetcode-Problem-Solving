let ans = [];
function fact(n) {
  if (n == 0) return 1;
  return n * fact(n - 1);
}

function factorial(n) {
  for (let i = 1; i <= n; i++) {
    if (fact(i) <= n) ans.push(fact(i));
    else break;
  }
  return ans;
}
console.log(factorial(6));
