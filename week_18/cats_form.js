class Cat {
    constructor(second_name, first_name, phone, pat_name, select, dry_food, wet_food, natural_food, male, female) {
        this.second_name = second_name;
        this.first_name = first_name;
        this.phone = phone;
        this.patName = pat_name;
        this.selectIndex = select;
        this.dryFoodChecked = dry_food;
        this.wetFoodChecked = wet_food;
        this.naturalFoodChecked = natural_food;
        this.maleChecked = male;
        this.femaleChecked = female;
    }
}

let second_name = document.getElementById("second_name");
let first_name = document.getElementById("first_name");
let phone = document.getElementById("phone");
let pat_name = document.getElementById("pat_name");
let select = document.querySelector("select");
let dry_food = document.getElementById("dry_food");
let natural_food = document.getElementById("natural_food");
let male = document.getElementById("male");
let female = document.getElementById("female");

function newObject() {
    let obj = new Cat(second_name.value, first_name.value, phone.value, pat_name.value, select.selectedIndex, dry_food.checked, wet_food.checked, natural_food.checked, male.checked, female.checked);
    console.log(obj);
}

button = document.querySelector("button");
button.addEventListener('click', newObject);