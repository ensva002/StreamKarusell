const container = document.getElementById("inputContainer")
const timeValue = document.getElementById("timeInn")
let loadedValues

if (localStorage.getItem("list") !== null) {
    loadedValues = JSON.parse(window.localStorage.getItem("list"))
    loadedValues.forEach(element => {
        fill(element)
    });
}
fill("")

if (localStorage.getItem("timer") === null) {
    localStorage.setItem("timer",timeValue.value)
}else{
    timeValue.value = localStorage.getItem("timer")
}

function fill(innvalue){
    let newInput = document.createElement("input")
    newInput.type = "url"
    newInput.oninput = function(){
        addNewField(this)
    }
    newInput.onblur = function(){
        removeField(this)
    }
    newInput.value = innvalue
    container.appendChild(newInput)
}

function addNewField(input){
    if(input === container.lastElementChild){
        if(input.value.trim() !== ""){
            fill("")
        }
    }
}
function removeField(input){
    if(input !== container.lastElementChild && input.value.trim() === ""){
        container.removeChild(input)
    }
    saveList()
}

function saveList(){
    let allInput = container.querySelectorAll('input[type="url"]')
    let values = []
    for (let i = 0; i < allInput.length - 1; i++) {
        values.push(allInput[i].value);
    }
    window.localStorage.setItem("list",JSON.stringify(values))
    console.log(window.localStorage.getItem("list"))
}

function saveTime(){
    localStorage.setItem("timer", timeValue.value)
}

function play(){
    window.location.href="player.html"
}