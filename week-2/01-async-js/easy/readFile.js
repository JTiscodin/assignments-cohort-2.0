let fs = require("fs");

fs.readFile("./readme.txt", "utf-8", (err, data) => {
  console.log(data);
})
let sum=0
for(i=0;i<1000000000; i++){
    sum+= i
}



