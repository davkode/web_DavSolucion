new WOW().init();

/* ======================================
  ! _DECLARACIÓN DE OBJETOS Y VARIABLES_
====================================== */
/*let btnToggle = document.getElementsByClassName('menu-toggle');
let menu = document.getElementsByClassName('header-menu');*/
/* 
* _Boton - Menu Toggle_ 
*/
let btnToggle = document.getElementById("menu-toggle");
let menu = document.getElementById("header-menu");


/* 
* _Validacion Formulario_ 
*/
let formContact = document.getElementById('form');
let inputs = document.querySelectorAll('#form input');
/*let textArea = document.querySelectorAll('#form textarea');*/
let buttonForm = document.getElementById('forn-btn');

let expreReg = {
	nameReg: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/, // Letras, espacios rn blanco, pueden llevar acentos.
  emailReg: /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
  messageReg: /^.{1,255}$/
};

let campos = {
  name: false,
  email:  false,
  message: false
};


/* =============================
  ! _DECLARACIÓN DE FUNCIONES_
  ============================ */
 /* 
* _Boton y Menu Toogle_ 
*/
function changeClass() {
  menu.classList.toggle("menu-open");
  btnToggle.classList.toggle("toggle-open");
}

/* 
* _Validacion Formulario_ 
*/
function validateInputs(e) {
  function validateCampoInput(expreReg, input, campo) {
    if (expreReg.test(input.value)) {
        document.getElementById(`group-${campo}`).classList.remove('form-input-incorrect');
        document.getElementById(`group-${campo}`).classList.add('form-input-correct');
        document.querySelector(`#group-${campo} i`).classList.add('form-input-state-check');
        document.querySelector(`#group-${campo} i`).classList.remove('form-input-state-x');
        document.querySelector(`#group-${campo} .form-input-error`).classList.remove('form-input-error-active');
        campos [campo] = true;
      } else {
        document.getElementById(`group-${campo}`).classList.add('form-input-incorrect');
        document.getElementById(`group-${campo}`).classList.remove('form-input-correct');
        document.querySelector(`#group-${campo} i`).classList.add('form-input-state-x');
        document.querySelector(`#group-${campo} i`).classList.remove('form-input-state-check');
        document.querySelector(`#group-${campo} .form-input-error`).classList.add('form-input-error-active');
        campos [campo] = false;
      }
  }
  switch (e.target.name) {
    case 'name':
      validateCampoInput(expreReg.nameReg, e.target, 'name');
    break;

    case 'email':
      validateCampoInput(expreReg.emailReg, e.target, 'email');
    break;

    case 'message':
      validateCampoInput(expreReg.messageReg, e.target, 'message');
    break;
  }
}


function sendForm(e) {
  e.preventDefault();

  if (campos.name && campos.email && campos.message) {
    formContact.reset();

    document.getElementById('form-success').classList.add('form-success-active');
    setTimeout(() => {
      document.getElementById('form-success').classList.remove('form-success-active');
    }, 3000);

    document.querySelectorAll('.form-input-correct').forEach((icon) => {
      icon.classList.remove('form-input-correct');
    });
  } else {
    document.getElementById('form-alert').classList.add('form-alert-active');
     setTimeout(() => {
      document.getElementById('form-alert').classList.remove('form-alert-active');
    }, 3000);
  }
}


/* =========================
  ! _ASIGNACIÓN DE EVENTOS_
  ======================== */
   window.onload = function () {
 /* 
* _Boton y Menu Toogle_ 
*/
    btnToggle.addEventListener("click", changeClass);


/* 
* _Validacion Formulario_ 
*/
  formContact.addEventListener('submit', sendForm);

  inputs.forEach((input) => {
    input.addEventListener('keyup', validateInputs);
    input.addEventListener('blur', validateInputs);
  })

  }