class Solution {
  select(arr, i, n) {
    let mini = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[mini]) mini = j;
    }
    return mini;
  }
  selectionSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
      let mini = this.select(arr, i, n);
      let tmp = arr[mini];
      arr[mini] = arr[i];
      arr[i] = tmp;
    }
  }
}
