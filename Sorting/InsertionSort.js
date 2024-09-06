class Solution {
  insert(arr, i) {
    // code here such that insertionSort() sorts arr[]
    for (let j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
      let tmp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = tmp;
    }
  }

  //Function to sort the array using insertion sort algorithm.
  insertionSort(arr, n) {
    //code here
    for (let i = 0; i < n; i++) {
      let sort = this.insert(arr, i);
    }
  }
}
