let aim = document.getElementsByClassName('aim');
let button = document.getElementsByTagName('button');

button[0].addEventListener("click", () => scrolldown());

function scrolldown(){
    aim[0].scrollIntoView({behavior: "smooth"});
}

let fullheight = document.getElementsByTagName('html')[0].offsetHeight;
let headerheight = document.getElementsByTagName('header')[0].offsetHeight;
let buttonsheight = document.getElementsByClassName('container-fluid')[0].offsetHeight
let filler = document.getElementsByClassName('filler');

filler[0].addEventListener('load',()=> setheight());

function setheight(){
    filler[0].style.height;
}