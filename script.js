let aboutme = document.getElementsByClassName('aboutme');
let skills = document.getElementsByClassName('skills');
let projects = document.getElementsByClassName('projects');
let contact = document.getElementsByClassName('contact');
let button = document.getElementsByTagName('button');

button[0].addEventListener("click", () => scrolldown());
button[1].addEventListener("click", () => scrolldowns());
button[2].addEventListener("click", () => scrolldownp());
button[3].addEventListener("click", () => scrolldownc());

function scrolldown(){
    aboutme[0].scrollIntoView({behavior: "smooth"});
}
function scrolldowns(){
    skills[0].scrollIntoView({behavior: "smooth"});
}
function scrolldownp(){
    projects[0].scrollIntoView({behavior: "smooth"});
}
function scrolldownc(){
    contact[0].scrollIntoView({behavior: "smooth"});
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

let sidebuttons = document.getElementsByClassName('sidebutton');



button[0].addEventListener("click", () => scrolldown());
button[1].addEventListener("click", () => scrolldowns());
button[2].addEventListener("click", () => scrolldownp());
button[3].addEventListener("click", () => scrolldownc());

function displayonload(i){

    switch(i){
        case

    }
        
    
}