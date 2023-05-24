let tile = document.getElementsByClassName("tile");
let box = document.getElementsByClassName("moving-block")
box.addEventListener("load", szerokosc())
function szerokosc(){
    box.style.width = tile[0].offsetWidth;
}