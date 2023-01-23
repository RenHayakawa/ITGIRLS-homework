const moment = require('moment');
const datepicker = require('js-datepicker');

let currentDate = "";
currentDate += `<div>${moment().format("dddd")}, ${moment().format("D MMMM YYYY")}</div>`;
document.getElementById("currentDate").innerHTML = currentDate;

function showDatepicker() {
    const picker = datepicker(document.getElementById("buttonCalendar"));
}

let buttonCalendar = document.getElementById("buttonCalendar");
buttonCalendar.addEventListener("click", showDatepicker)

// let dateFromDatepicker = "";
// dateFromDatepicker += `<${datepicker(document.getElementById("buttonCalendarText").innerHTML, button)}>`;
// document.querySelector("buttonCalendar>div").innerHTML = dateFromDatepicker;
//let date = moment().format("dddd");
//console.log(date);