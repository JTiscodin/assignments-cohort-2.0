const button = document.getElementById("start");
const area = document.getElementById("count");
let count = 0
function Counter(){
    count++;
    area.innerHTML = count
    console.log(count)
    setTimeout(Counter, 1000);
}

Counter();


