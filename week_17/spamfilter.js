let array = ["Привет", "Как дела?"];

function existingMessage() {
    let chatMessage = "";
    for (let items of array) {
        chatMessage += `<div>${items}</div>`;
    }
    document.getElementById("chat").innerHTML = chatMessage;
}

document.addEventListener("DOMContentLoaded", function () {
    existingMessage();
});

function checkSpam() {
    let textarea = document.getElementById("textarea").value;
    let replace = textarea.replace(/виагра/ig, "******")
    array.push(replace);
    console.log(array);
    document.getElementById("textarea").value = "";
    existingMessage();

    // Сохранение данных в LocalStorage
    let arrayToString = array.join();
    localStorage.setItem("comments", arrayToString);
    let dataSorage = localStorage.getItem("comments");
    let dataSorageToArray = dataSorage.split(",");
    console.log(dataSorageToArray);
}

let sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", checkSpam);