let tilewidth = document.getElementsByClassName('col')[0].offsetWidth;
let movingbox = document.getElementsByClassName('moving-block');

movingbox[0].addEventListener("load", ustawienie());
movingbox[0].addEventListener("resize", ustawienie());
function ustawienie(){
    movingbox[0].style.width = tilewidth;
}

