function UniqueNumbers(array) {
  // let counter = [];
  // for (item of array) {
  //   counter[item] = (counter[item] || 0) + 1;
  // }

  // console.log([...new Set(array)].length);
  // const value = counter.filter((item) => item <= 1);
  // console.log(value.length);

  let i = 0;
  let j = i + 1;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[j]) {
      i++;
      count++;
    } else if (array[i] === array[j]) {
      j++;
    }
  }
  console.log(count);
}
const result = UniqueNumbers([1, 2, 3, 3, 4, 4, 5, 5, 5]);
