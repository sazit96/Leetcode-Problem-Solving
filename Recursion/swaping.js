function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function sswap(i, arr, n) {
  if (i >= n / 2) return arr;

  swap(arr, i, n - i - 1);
  return sswap(i + 1, arr, n);
}

var arr = [1, 2, 3, 4, 5];
console.log(sswap(0, arr, arr.length));
