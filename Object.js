const obj = {
  first: "raman",
  last: "kumar",
  "full-name": "raman kumar",
  sayMyName: function () {
    console.log(this.last);
  },
};

// console.log(name.first);
// console.log(name["last"]);
// console.log(name["full-name"]);
// name.new = "ankit";

// console.log(name);
// delete name.last;
// console.log(name);
obj.sayMyName();

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
let array = Object.entries(obj); //it is convert object to array
const value = array.map((name) => {
  return name;
});
console.log(value, "raman");
