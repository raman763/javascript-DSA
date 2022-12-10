const arr = [1, 2, 3, 4, 5];
const target = 5;

function search(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);

    if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

search(arr, target);
console.log(search(arr, target));
