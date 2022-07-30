const costs = new Map([
    ["bmw-i8", 10000000],
    ["bmw-x6", 3500000],
    ["bmw-528", 2500000],
    ["benz-E350", 2600000],
    ["prado-4x", 3000000],
    ["porsche-911", 5000000],
    ["porsche-boxter", 2500000],
    ["benz-cls", 2600000]
]);

const rentCars = new Array();

let selectedCar;
let selectedCarEle;

function selectCar(name, ele) {

    for (let index = 0; index < rentCars.length; index++) {
        if (rentCars[index] == name) {
            alert("این خودرو در حال حاضر موجود نمیباشد");
            return;
        }
    }

    selectedCar = name;
    selectedCarEle = ele.parentElement;
    const selectedList = document.getElementsByClassName("car-item-selected");
    for (let index = 0; index < selectedList.length; index++) {
        selectedList[index].classList.remove("car-item-selected");
    }
    ele.parentElement.classList.add("car-item-selected");

    document.getElementById("rent-section").style.display = "block";
    document.getElementById("information-section").style.display = "block";
}


function calcCost() {
    const price = costs.get(selectedCar);
    const days = document.getElementById("day").value;
    if (days == "" || days <= 0 || days > 365) {
        alert("روز وارد شده اشتباه است");
    } else {
        const costEle = document.getElementById("cost");
        costEle.value = price * days;
    }
}

function submitRent() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const phone = document.getElementById("phone").value;
    if (fname == "" || lname == "" || phone == "") {
        alert("اطلاعات خود را به درستی وارد نمایید");
    } else {
        document.getElementById("rent-section").style.display = "none";
        document.getElementById("information-section").style.display = "none";
        selectedCarEle.classList.add("car-item-disable");
        document.getElementById("result-section").style.display = "block";
        rentCars.push(selectedCar);
    }
}