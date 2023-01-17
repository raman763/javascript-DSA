function remove() {
  const arr = [1, 2, 3, 4, 5];
  let pos = 2;
  for (let i = pos; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  console.log(arr);
}
remove();
