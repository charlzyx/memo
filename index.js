const fs = require("fs");

const lines = fs.readFileSync("./random/money.md").toString().split("\n");

const total = lines.reduce((sum, line) => {
  const words = line.split(" ");
  let price = words[words.length - 1];
  price = /\d/.test(price) ? +price : 0;
  return sum + price;
}, 0);

console.log(total);
