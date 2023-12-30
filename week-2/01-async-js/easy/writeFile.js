const fs = require("fs");

fs.writeFile(
  "./readme.txt",
  "Damn, dude that's crazys",
  "utf-8",
  (err, data) => {
    console.log(data);
  }
);

let sum = 0;
for (i = 0; i < 1000000000; i++) {
  sum += i;
}
