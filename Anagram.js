function isAnagram(string1, string2) {
  const counter = [];
  for (item of string1) {
    console.log(item);
    counter[item] = (counter[item] || 0) + 1;
  }
}

isAnagram("raman", "namar");
