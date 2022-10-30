function checkInputfirstName() {
    let firstName = document.getElementById("firstName").value;
    console.log(firstName);
    let firstNameAlert = document.getElementById("firstNameAlert");

    (firstName.indexOf(0) > -1 || firstName.indexOf(1) > -1 || firstName.indexOf(2) > -1 || firstName.indexOf(3) > -1 || firstName.indexOf(4) > -1 || firstName.indexOf(5) > -1 || firstName.indexOf(6) > -1 || firstName.indexOf(7) > -1 || firstName.indexOf(8) > -1 || firstName.indexOf(9) > -1) ? firstNameAlert.innerHTML = "Numbers are not allowed" : (firstName == "") ? firstNameAlert.innerHTML = "Fill in the field" : firstNameAlert.innerHTML = "";
}

function checkInputlastName() {
    let lastName = document.getElementById("lastName").value;
    console.log(lastName);
    let lastNameAlert = document.getElementById("lastNameAlert");

    (lastName.indexOf(0) > -1 || lastName.indexOf(1) > -1 || lastName.indexOf(2) > -1 || lastName.indexOf(3) > -1 || lastName.indexOf(4) > -1 || lastName.indexOf(5) > -1 || lastName.indexOf(6) > -1 || lastName.indexOf(7) > -1 || lastName.indexOf(8) > -1 || lastName.indexOf(9) > -1) ? lastNameAlert.innerHTML = "Numbers are not allowed" : (lastName == "") ? lastNameAlert.innerHTML = "Fill in the field" : lastNameAlert.innerHTML = "";
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

    (phone.indexOf("+7") > -1 && phone.length == 12) ? phoneAlert.innerHTML = "" : (phone == "") ? phoneAlert.innerHTML = "Fill in the field" : phoneAlert.innerHTML = "Incorrect phone number";
}

function checkInputCountry() {
    let country = document.getElementById("country").value;
    console.log(country);
    let countryAlert = document.getElementById("countryAlert");

    (country.indexOf(0) > -1 || country.indexOf(1) > -1 || country.indexOf(2) > -1 || country.indexOf(3) > -1 || country.indexOf(4) > -1 || country.indexOf(5) > -1 || country.indexOf(6) > -1 || country.indexOf(7) > -1 || country.indexOf(8) > -1 || country.indexOf(9) > -1) ? countryAlert.innerHTML = "Numbers are not allowed" : (country == "") ? countryAlert.innerHTML = "Fill in the field" : countryAlert.innerHTML = "";
}

function checkInputRegion() {
    let region = document.getElementById("region").value;
    console.log(region);
    let regionAlert = document.getElementById("regionAlert");

    (region.indexOf(0) > -1 || region.indexOf(1) > -1 || region.indexOf(2) > -1 || region.indexOf(3) > -1 || region.indexOf(4) > -1 || region.indexOf(5) > -1 || region.indexOf(6) > -1 || region.indexOf(7) > -1 || region.indexOf(8) > -1 || region.indexOf(9) > -1) ? regionAlert.innerHTML = "Numbers are not allowed" : (region == "") ? regionAlert.innerHTML = "Fill in the field" : regionAlert.innerHTML = "";
}

function checkInputCity() {
    let city = document.getElementById("city").value;
    console.log(city);
    let cityAlert = document.getElementById("cityAlert");

    (city.indexOf(0) > -1 || city.indexOf(1) > -1 || city.indexOf(2) > -1 || city.indexOf(3) > -1 || city.indexOf(4) > -1 || city.indexOf(5) > -1 || city.indexOf(6) > -1 || city.indexOf(7) > -1 || city.indexOf(8) > -1 || city.indexOf(9) > -1) ? cityAlert.innerHTML = "Numbers are not allowed" : (city == "") ? cityAlert.innerHTML = "Fill in the field" : cityAlert.innerHTML = "";
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