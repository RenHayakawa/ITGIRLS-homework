button = document.querySelector("button");
button.onclick = function (event) {
    event.preventDefault();

    let obj = {
        secondName: document.getElementById("second_name").value,
        firstName: document.getElementById("first_name").value,
        phone: document.getElementById("phone").value,
        patName: document.getElementById("pat_name").value,
        select: document.querySelector("select").value,
        dryFood: document.getElementById("dry_food").value,
        naturalFood: document.getElementById("natural_food").value,
        male: document.getElementById("male").value,
        female: document.getElementById("female").value

    }
    console.log(obj);

    fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json; charset=utf-8" }
    })
        .then(response => response.json())
        .then(obj => console.log(obj))
        .catch(error => console.log(error))
}