/* ======================================
  ! _DECLARACIÓN DE OBJETOS Y VARIABLES_
====================================== */
/*let btnToggle = document.getElementsByClassName('menu-toggle');
let menu = document.getElementsByClassName('header-menu');*/
let btnToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("header-menu");

let tabLink =document.querySelectorAll ('.tab-link');
let tabBlock =document.querySelectorAll ('.tab-block');


/* =============================
  ! _DECLARACIÓN DE FUNCIONES_
  ============================ */
/* _BtnToogle - Menu_ */
function changeClass() {
  menu.classList.toggle("menu-open");
  btnToggle.classList.toggle("toggle-open");
}

tabLink.forEach((tablink, i) => {
  tablink.addEventListener ("click", () => {
    tabBlock.forEach (tabBlock => {
      tabBlock.style.display = "none";
    });
    tabBlock [i].style.display = "grid";

    tabLink.forEach (link => {
      link.classList.remove ("tab-active");
    });
    tablink.classList.add ("tab-active");
  });
});

/* =========================
  ! _ASIGNACIÓN DE EVENTOS_
  ======================== */
   window.onload = function () {
    /* --- Boton y Menu Toogle --- */
    btnToggle.addEventListener("click", changeClass);
  }