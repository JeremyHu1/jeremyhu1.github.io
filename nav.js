const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

let data = 0;

document.getElementById("counting").innerText = data;

function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}

function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
}

let data1 = 0;

document.getElementById("counting-1").innerText = data1;

function increment1() {
    data1 = data1 + 1;
    document.getElementById("counting-1").innerText = data1;
}

function decrement1() {
    data1 = data1 - 1;
    document.getElementById("counting-1").innerText = data1;
}


let data2 = 0;

document.getElementById("counting-2").innerText = data2;

function increment2() {
    data2 = data2 + 1;
    document.getElementById("counting-2").innerText = data2;
}

function decrement2() {
    data2 = data2 - 1;
    document.getElementById("counting-2").innerText = data2;
}


let data3 = 0;

document.getElementById("counting-3").innerText = data3;

function increment3() {
    data3 = data3 + 1;
    document.getElementById("counting-3").innerText = data3;
}

function decrement3() {
    data3 = data3 - 1;
    document.getElementById("counting-3").innerText = data3;
}



let data4 = 0;

document.getElementById("counting-4").innerText = data4;

function increment4() {
    data4 = data4 + 1;
    document.getElementById("counting-4").innerText = data4;
}

function decrement4() {
    data4 = data4 - 1;
    document.getElementById("counting-4").innerText = data4;
}

function fnalert() {
    alert("Insufficient Funds lol")
}