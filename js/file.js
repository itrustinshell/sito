
// quando si carica (load) la finestra (window) dico al document di selezionare
// la classe .scrittaHome per associarle gli stili (style) specificati
window.addEventListener("load", function(){
  document.querySelector(".scrittaHome").style.transform="scale(1.1)";
  document.querySelector(".scrittaHome").style.transition="all 1s";
  document.querySelector(".scrittaHome").style.transitionDelay="0.5s";
  document.querySelector(".goUp").style.display = "none";
});

// loop sugli articoli.
// l'articolo è il mio elemento di interazione
// ad ogni elemento di iterazione applico la funzione rivela.
// dd = document.querySelectorAll(".articolo");
//
// window.addEventListener("scroll", rivela);
//
// function rivela () {
//   iterationElement = document.querySelectorAll(".articolo");
//   for (var i=0; i<iterationElement.length; i++) {
//     oggettodd = dd[i].getBoundingClientRect().y;
//     altezzaviewport = window.innerHeight;
//     altezzaOggetto =dd[i].getBoundingClientRect().height;
//
//     if  ((altezzaviewport - oggettodd) > altezzaOggetto/1 && (altezzaviewport - oggettodd) <  altezzaOggetto*2 && window.matchMedia("(max-width:480px)").matches)  {
//
//       document.querySelectorAll(".articleImg")[i].classList.add("ingrandiscimi");
//       document.querySelectorAll(".articleImg2")[i].classList.add("ingrandiscimi");
//
//       document.querySelectorAll(".articoloContenitoreInterno")[i].classList.add("effettiVari");
//       document.querySelectorAll('.guardami')[i].classList.add("nnn");
//       document.querySelectorAll('.guardami')[i].classList.add("ooo");
//       document.querySelectorAll('.guardami')[i].classList.add("ppp");
//     }
//
//     else if (((altezzaviewport - oggettodd) <= altezzaOggetto/1.7 | (altezzaviewport - oggettodd) >= altezzaOggetto*2)  && window.matchMedia("(max-width:480px)").matches) {
//
//       document.querySelectorAll(".articleImg")[i].classList.remove("ingrandiscimi");
//       document.querySelectorAll(".articleImg2")[i].classList.remove("ingrandiscimi");
//
//
//       document.querySelectorAll(".articoloContenitoreInterno")[i].classList.remove("effettiVari");
//       document.querySelectorAll(".articoloContenitoreInterno")[i].classList.add("effettiVari2");
//       document.querySelectorAll('.guardami')[i].classList.remove("nnn");
//       document.querySelectorAll('.guardami')[i].classList.remove("ooo");
//       document.querySelectorAll('.guardami')[i].classList.remove("ppp");
//     }
//
//     else if (window.innerWidth > 480) {
//
//       document.querySelectorAll(".articleImg")[i].classList.remove("ingrandiscimi");
//       document.querySelectorAll(".articleImg2")[i].classList.remove("ingrandiscimi");
//
//       document.querySelectorAll(".articoloContenitoreInterno")[i].classList.remove("effettiVari");
//       document.querySelectorAll(".articoloContenitoreInterno")[i].classList.remove("effettiVari2");
//       document.querySelectorAll('.guardami')[i].classList.remove("ooo");
//       document.querySelectorAll('.guardami')[i].classList.remove("ppp");
//       document.querySelectorAll('.guardami')[i].classList.remove("ppp");
    //}
  //}; //qui finisce il codice del loop interno alla funzione rivela
//};
// qui finisce la funzione rivela


window.addEventListener("DOMContentLoaded",function() {
  if (window.innerWidth >= 768) {
    document.querySelector(".close").style.display="none";
    document.querySelector(".openMenu").style.display="none";
  }

  else if (window.innerWidth < 768) {
    document.querySelector(".close").style.display="none"
    document.querySelector(".openMenu").style.display="";
    document.getElementById("menu").style.display="none";

  }

})

window.addEventListener("resize", function() {
  if (window.innerWidth >= 768) {
    document.querySelector(".close").style.display="none";
    document.querySelector(".openMenu").style.display="none";
    document.getElementById("menu").style.display="";
  }

  if (window.innerWidth < 768) {
    document.querySelector(".close").style.display="none"
    document.querySelector(".openMenu").style.display="";
    document.getElementById("menu").style.display="none";
  }

  if (document.querySelector(".openMenu").style.display==""){
    return  open = false;
  }
})

document.querySelector(".openMenu").addEventListener("click",open);
var open = false;
function open () {
  if (open == false) {
    document.getElementById("menu").style.display="";
    document.querySelector(".close").style.display="";
    document.querySelector(".openMenu").style.display="none";
    open = true;
  }
};

document.querySelector(".close").addEventListener("click",close);
function close () {
  if (open == true) {
    document.getElementById("menu").style.display="none";
    document.querySelector(".close").style.display="none";
    document.querySelector(".openMenu").style.display="";
    open = false;
  }
};

window.addEventListener("scroll",function() {
  y=window.scrollY
  // console.log(y)
  innerH = window.innerHeight;
  // console.log(innerH);
  if (y<=innerH-240) {
    document.querySelector(".goUp").style.display = "none";
  }
  if (y>innerH-240){
    document.querySelector(".goUp").style.display = "";
  }
});

document.querySelector(".goUp").addEventListener("click", function() {
  window.scrollTo(0, 0)
});
