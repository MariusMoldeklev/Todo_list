
const inputText = document.querySelector("#inputText");
const listContainer = document.querySelector("#todoList");
const formId = document.querySelector("#formID")
const alertBox =document.querySelector("#alert_box")

function addTask() {
    if(inputText.value ===''){
        alert("you need to write somthing!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputText.value="";
    saveData();
    
};
formId.addEventListener("submit", function (event) {
event.preventDefault();
});

listContainer.addEventListener("click", function(clicked){
    if(clicked.target.tagName==="LI"){
        clicked.target.classList.toggle("checked");
        saveData();
    }
    else if (clicked.target.tagName === "SPAN") {
        clicked.target.parentElement.remove();
        saveData();
    }
    let listItems = listContainer.querySelectorAll("li");
    let allChecked = true

    listItems.forEach(function(item) {
        if (!item.classList.contains("checked")) {
            allChecked = false;
        }
    });

    if (allChecked && listItems.length > 0) {
        alertBox.textContent ="🎉🥳You finished all ur tasks!🥳🎉"
        alertBox.classList.remove("hidden");
        
        
        const closeButton = document.createElement("button");
        closeButton.innerText ="close";
        alertBox.appendChild(closeButton);

        closeButton.addEventListener("click", function(){
            alertBox.classList="";
            alertBox.classList.add("hidden");
            alertBox.innerHTML="";
        });
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
loadData();
