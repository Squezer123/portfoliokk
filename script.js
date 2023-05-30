let aim = document.getElementsByClassName('aim');
let button = document.getElementsByTagName('button');

button[0].addEventListener("click", () => scrolldown());

function scrolldown(){
    aim[0].scrollIntoView({behavior: "smooth"});
}

let header = document.getElementsByTagName('header');
let buttonup = document.getElementsByClassName('myBtn');

buttonup[0].addEventListener("click", () => scrollup());

function scrollup(){
    header[0].scrollIntoView({behavior: "smooth"});
}


let container = document.getElementsByClassName('disabler');
let loading = document.getElementsByTagName('svg');

function displayonload(){
    loading[0].style.display = "none";
    container[0].style.display = "block";
}

loading[0].addEventListener('animationend', ()=> displayonload());
