const arr = [
  ["a", 1],
  ["b", 2],
];
const map = new Map(arr);
console.log(map);
for (const [key, value] of map) {
  console.log(key, value, "test");
}

map.set("c", 3); //if you add new value in arr so we use set method
console.log(map.has("c"));
console.log(map.size);
map.clear();
console.log(map);
