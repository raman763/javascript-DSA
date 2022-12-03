const arr = [1, 2, 3, 4, 5];
let tar = 2;

function search(arr, tar) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == tar) {
        return i;
      }
    }
  }
  return -1;
}
console.log(search(arr, tar));
