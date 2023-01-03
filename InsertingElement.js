function element() {
  let arr = [1, 2, 3, 5];
  let element = 4;
  let pos = 3;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= pos) {
      //postition 2 or it is equal to value 3 than it will enter the inside of this condition //3
      console.log("index", i, arr[i], "dskfjksjdl", pos);
      arr[i + 1] = arr[i]; //4->3,5
      arr[pos] = element;
    }
  }
  console.log(arr);
}

element();
