const videos = JSON.parse(localStorage.getItem("list"))
const timer = localStorage.getItem("timer")
const out = document.getElementById("out")
const reset = videos.length
let index = 0

setInterval(function() {
    change()
}, 1000*timer); 

function change(){
    out.textContent = videos[index];
    index = (index + 1) % reset;
}

change()