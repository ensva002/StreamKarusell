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

function saveList(){
}