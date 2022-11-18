let arrayErrors = [];
let notAllowNumbers = /\d/gm;
let notAllowLetters = /[A-Za-z]/gm;

function checkInputfirstName() {
    let firstName = document.getElementById("firstName").value;
    console.log(firstName);
    let firstNameAlert = document.getElementById("firstNameAlert");

    (firstName.match(notAllowNumbers)) ? firstNameAlert.innerHTML = "Numbers are not allowed" : (firstName == "") ? firstNameAlert.innerHTML = "Fill in the field" : firstNameAlert.innerHTML = "";
}

function checkInputlastName() {
    let lastName = document.getElementById("lastName").value;
    console.log(lastName);
    let lastNameAlert = document.getElementById("lastNameAlert");

    (lastName.match(notAllowNumbers)) ? lastNameAlert.innerHTML = "Numbers are not allowed" : (lastName == "") ? lastNameAlert.innerHTML = "Fill in the field" : lastNameAlert.innerHTML = "";
}

function checkInputEmail() {
    let email = document.getElementById("email").value;
    console.log(email);
    let emailAlert = document.getElementById("emailAlert");

    (email.indexOf("@") > -1) ? emailAlert.innerHTML = "" : (email == "") ? emailAlert.innerHTML = "Fill in the field" : emailAlert.innerHTML = "Incorrect mail address";
}

function checkInputPhone() {
    let phone = document.getElementById("phone").value;
    console.log(phone);
    let phoneAlert = document.getElementById("phoneAlert");

    (phone.match(notAllowLetters)) ? phoneAlert.innerHTML = "Incorrect phone number" : (phone == "") ? phoneAlert.innerHTML = "Fill in the field" : phoneAlert.innerHTML = "";
}

function checkInputCountry() {
    let country = document.getElementById("country").value;
    console.log(country);
    let countryAlert = document.getElementById("countryAlert");

    (country.match(notAllowNumbers)) ? countryAlert.innerHTML = "Numbers are not allowed" : (country == "") ? countryAlert.innerHTML = "Fill in the field" : countryAlert.innerHTML = "";
}

function checkInputRegion() {
    let region = document.getElementById("region").value;
    console.log(region);
    let regionAlert = document.getElementById("regionAlert");

    (region.match(notAllowNumbers)) ? regionAlert.innerHTML = "Numbers are not allowed" : (region == "") ? regionAlert.innerHTML = "Fill in the field" : regionAlert.innerHTML = "";
}

function checkInputCity() {
    let city = document.getElementById("city").value;
    console.log(city);
    let cityAlert = document.getElementById("cityAlert");

    (city.match(notAllowNumbers)) ? cityAlert.innerHTML = "Numbers are not allowed" : (city == "") ? cityAlert.innerHTML = "Fill in the field" : cityAlert.innerHTML = "";
}

function checkInputTimeFrom() {
    let timeFrom = document.getElementById("timeFrom").value;
    console.log(timeFrom);
    let timeFromAlert = document.getElementById("timeFromAlert");

    (timeFrom.length >= 2 && timeFrom > 24) ? timeFromAlert.innerHTML = "Invalid number of characters" : (timeFrom == "") ? timeFromAlert.innerHTML = "Fill in the field" : timeFromAlert.innerHTML = "";
}

function checkInputTimeTo() {
    let timeTo = document.getElementById("timeTo").value;
    console.log(timeTo);
    let timeToAlert = document.getElementById("timeToAlert");

    (timeTo.length >= 2 && timeTo > 24) ? timeToAlert.innerHTML = "Invalid number of characters" : (timeTo == "") ? timeToAlert.innerHTML = "Fill in the field" : timeToAlert.innerHTML = "";
}

function approvalForUser() {
    let firstName = document.getElementById("firstName").value;
    let firstNameAlert = document.getElementById("firstNameAlert");
    let lastNameAlert = document.getElementById("lastNameAlert");
    let emailAlert = document.getElementById("emailAlert");
    let phoneAlert = document.getElementById("phoneAlert");
    let countryAlert = document.getElementById("countryAlert");
    let regionAlert = document.getElementById("regionAlert");
    let cityAlert = document.getElementById("cityAlert");
    let timeFromAlert = document.getElementById("timeFromAlert");
    let timeToAlert = document.getElementById("timeToAlert");

    if (firstNameAlert.innerHTML == "" && lastNameAlert.innerHTML == "" && emailAlert.innerHTML == "" && phoneAlert.innerHTML == "" && countryAlert.innerHTML == "" && regionAlert.innerHTML == "" && cityAlert.innerHTML == "" && timeFromAlert.innerHTML == "" && timeToAlert.innerHTML == "") {
        alert("Добро пожаловать, " + firstName + "!");
    }
}

function checkValidity(input) {
    let validity = input.validity;

    if (validity.valueMissing) {
        arrayErrors.push("Field " + input.name + " is not filled");
    }

    if (validity.patternMismatch) {
        arrayErrors.push("Field " + input.name + " is filled in incorrectly");
    }

    if (validity.rangeUnderflow) {
        arrayErrors.push("The number in field " + input.name + " is too small");
    }

    if (validity.rangeOverflow) {
        arrayErrors.push("The number in field " + input.name + " is too big");
    }
}

function checkAll() {
    arrayErrors = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }

    document.getElementById("errorsList").innerHTML = arrayErrors.join("<br>");
}

let button = document.getElementById("button");
button.addEventListener("click", checkInputfirstName);
button.addEventListener("click", checkInputlastName);
button.addEventListener("click", checkInputEmail);
button.addEventListener("click", checkInputPhone);
button.addEventListener("click", checkInputCountry);
button.addEventListener("click", checkInputRegion);
button.addEventListener("click", checkInputCity);
button.addEventListener("click", checkInputTimeFrom);
button.addEventListener("click", checkInputTimeTo);
button.addEventListener("click", approvalForUser);
button.addEventListener("click", checkAll);