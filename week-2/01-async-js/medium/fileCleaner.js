const fs = require("fs");

fs.readFile("./test.txt","utf-8", (err, data) => {
    const modifiedData = data.replace(/\s+/g, ' ');
    fs.writeFile("./test.txt", modifiedData ,"utf-8", (err, data) => {
        console.log(data)
    })
})