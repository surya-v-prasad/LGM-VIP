function taskDetails(){
    var idAccess = document.getElementById("Task");
    if(idAccess.value.length==0){
        alert("You can't leave the text-field empty!!")
    }
    else{
        var divCreation = document.createElement("div")
        divCreation.className="divEleID"
        document.getElementById("enteredTasks").appendChild(divCreation)
        var paragraphCreation = document.createElement("p")
        divCreation.appendChild(paragraphCreation)
        paragraphCreation.innerHTML=idAccess.value
        var taskCompletion=document.getElementsByTagName("p")
        for(var j=0;j<taskCompletion.length;j++){
            taskCompletion[j].onclick = function(){
                this.style.textDecoration="line-through"
            }
        }
        var deleteTask = document.createElement("button")
        deleteTask.innerHTML = "Close"
        divCreation.appendChild(deleteTask)
        var close=document.getElementsByTagName("button")
        for(var j=0;j<close.length;j++){
            close[j].onclick = function(){
                this.parentElement.style.display="none"
            }
        }
    }
   
}