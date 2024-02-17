const form = document.querySelector(".fale-conosco");
const mascara = document.querySelector(".mascara-form");
const tamanho = document.querySelector(".marioeluige");
const btnTrailer = document.querySelector(".btn_trailer")
const modal = document.querySelector(".modal")
const fechamodal = document.querySelector(".fecha-modal")
const video = document.querySelector("#video")
const  linkdovideo = video.src


function butao() {
  form.style.left = "9%";
  form.style.tranform = "translateX(-9%);";
  mascara.style.visibility = "visible";
  form.style.transition = "1s all";
}

function esconder() {
  form.style.left = "-323px";
  mascara.style.visibility = "hidden";
}

function mudarTamanho() {
    tamanho.classList.toggle("MarioGrande");
  
}

function altermodal(){
  video.setAttribute("src", linkdovideo)
  modal.classList.toggle("aberto")
  
}
 function fechamodal1(){
  video.setAttribute("src"," ")
  altermodal()
 }
btnTrailer.addEventListener('click', altermodal)
fechamodal.addEventListener("click",fechamodal1)