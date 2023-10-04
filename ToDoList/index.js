const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ol");

btn.addEventListener("click", () => {
    const newTask = document.createElement("li");
    newTask.textContent = input.value;
    list.append(newTask);
    input.value = "";
})

list.addEventListener("click", (evt) => {
    if (evt.target.tagName === "LI") {
        evt.target.classList.toggle("task-check");
    }
})
