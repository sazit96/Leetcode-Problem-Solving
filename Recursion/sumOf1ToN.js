// Peramitarise way
function f(n, sum = 0) {
  if (n < 1) {
    console.log(sum);
    return;
  }
  f(n - 1, sum + n);
}
function main() {
  let n = 4;
  f(n);
}
main();
// funcitonal way
function f(n) {
  if (n == 0) {
    return 0;
  }
  return n + f(n - 1);
}
function main() {
  let n = 4;
  console.log(f(n));
}
main();
