const inputName = document.querySelector("#name");
const inputAvatar = document.querySelector("#avatar");
const inputComment = document.querySelector("#comment");
const button = document.querySelector("button");
const chat = document.querySelector(".chat");

const createMessage = () => {
    const name = inputName.value.trim().toLowerCase();
    const nameCorrect = name.replace(name[0], name[0].toUpperCase());
    const messageText = inputComment.value.replace(/viagra|xxx/gi, "***");

    chat.innerHTML +=
        `<div class="newMessage">
            <div class="user-container">
                <img class="user-image" src="${inputAvatar.value}" alt="User Avatar"></img>
                <div class="user-name">${nameCorrect}</div>
            </div>
            <div class="message">${messageText}</div>
        </div>`;

    inputName.value = "";
    inputAvatar.value = "";
    inputComment.value = "";
};

button.addEventListener("click", createMessage);