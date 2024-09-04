class Solution {
  //Function to sort the array using bubble sort algorithm.
  bubbleSort(arr, n) {
    //code here
    for (let i = n - 1; i > 0; i--) {
      let didswap = 0;
      for (let j = 0; j <= i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = tmp;
          didswap = 1;
        }
      }
      if ((didswap = 0)) break;
    }
  }
}
