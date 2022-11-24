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
