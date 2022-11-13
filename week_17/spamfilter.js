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

function sendMessage() {
    let textarea = document.getElementById("textarea").value;
    array.push(textarea);
    console.log(array);
    document.getElementById("textarea").value = "";
    existingMessage();
}

function checkSpam() {
    let string = array.join(" ");
    let element = string.replace(/viagra/ig, "***");
    console.log(element);
}

let sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", sendMessage);
sendButton.addEventListener("click", checkSpam);