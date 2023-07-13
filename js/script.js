// variables
const menuButton = document.querySelector(".icon-conteiner");
const menuWindow =document.querySelector(".modal-window");
const menuButtonClose = document.querySelector(".icon-modal");
const modalWindow = document.querySelector(".modal-window")
const triangle = document.querySelector(".triangle")

function togleMenuButton () {
    this.classList.toggle("active");
    menuWindow.classList.toggle("active")
    triangle.classList.toggle("active")

}

menuButton.addEventListener("click", 
    togleMenuButton
)

menuButtonClose.addEventListener("click", ()=>{
    modalWindow.classList.toggle("active")
})



