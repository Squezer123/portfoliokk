let tile = document.getElementsByClassName("tile");
let box = document.getElementsByClassName("moving-block");
let width = tile[0].offsetWidth;
box.addEventListener("load", szerokosc())
function szerokosc(){
    box[0].style.width = tile[0].offsetWidth;
}
