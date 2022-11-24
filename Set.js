let array = [1, 2, 3, 3, 4, 5, 6];
const set = new Set(array);
console.log(set);

set.add(7);
console.log(set);
set.delete(7);
console.log(set);
console.log(set.has(7));
console.log(set.size);
set.clear();
console.log(set.size);
