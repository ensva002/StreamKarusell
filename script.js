const container = document.getElementById("inputContainer")

function addNewField(input){
    if(input === container.lastElementChild){
        if(input.value.trim() !== ""){
            let newInput = document.createElement("input")
            newInput.type = "text"
            newInput.oninput = function(){
                addNewField(this)
            }
            newInput.onblur = function(){
                removeField(this)
            }

            container.appendChild(newInput)
        }
    }
}
function removeField(input){
    if(input !== container.lastElementChild && input.value.trim() === ""){
        container.removeChild(input)
    }
}

function saveToDB(){
    fetch("/save",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({inn}),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Saved", data)
    })
    .catch(error => {
        console.error("Saving failed!", error)
    })
}