const area = document.getElementById("count");
const button = document.getElementById("start");
let count = 0;


function setTime(){
    count++;
    area.innerHTML = count;
}
button.addEventListener("click", () => {
  setInterval(setTime, 1000)
});
