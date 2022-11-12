function getName() {
    let enter = document.getElementById("enter").value;
    console.log(enter);
    enter = enter.replace(/ +/g, ' ').trim();
    console.log(enter);
    document.getElementById("enter").value = "";
    let enterElement = enter.split(" ");
    console.log(enterElement);

    //Фамилия
    let secondName = document.getElementById("secondName");
    secondName.value = enterElement.shift();
    secondName.value = secondName.value.slice(0, 1).toUpperCase() + secondName.value.slice(1).toLowerCase();

    //Имя
    let firstName = document.getElementById("firstName");
    firstName.value = enterElement.shift();
    firstName.value = firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1).toLowerCase();

    //Отчество
    let patronymic = document.getElementById("patronymic");
    patronymic.value = enterElement.shift();
    patronymic.value = patronymic.value.slice(0, 1).toUpperCase() + patronymic.value.slice(1).toLowerCase();
}

enter.addEventListener("change", getName);