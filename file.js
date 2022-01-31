window.addEventListener("load", function(){
  document.querySelector(".scrittaHome").style.transform="scale(1.1)";
  document.querySelector(".scrittaHome").style.transition="all 1s";
  document.querySelector(".scrittaHome").style.transitionDelay="0.7s";
  document.querySelector(".goUp").style.display = "none";
});

  document.querySelector(".scrittaHome").addEventListener("mouseover", function(){
  document.querySelector(".scrittaHome").style.color="red";
  document.querySelector(".scrittaHome").style.transition="0s";
  document.querySelector(".scrittaHome").style.transitionDelay="0s";
});

  document.querySelector(".scrittaHome").addEventListener("mouseout", function(){
  document.querySelector(".scrittaHome").style.color="white";
});

dd = document.querySelectorAll(".articolo");

window.addEventListener("scroll", rivela)

function rivela () {
  iterationElement = document.querySelectorAll(".articolo");
  for (var i=0; i<iterationElement.length; i++) {
    oggettodd = dd[i].getBoundingClientRect().y;
    altezzaviewport = window.innerHeight;
    altezzaOggetto =dd[i].getBoundingClientRect().height;

    if  ((altezzaviewport - oggettodd) > altezzaOggetto/1.7 && (altezzaviewport - oggettodd) <  altezzaOggetto*2 && window.matchMedia("(max-width:480px)").matches)  {
      document.querySelectorAll(".mese")[i].classList.add("aaa");
      document.querySelectorAll(".articleImg")[i].classList.add("bbb");
      // document.querySelectorAll(".articolo")[i].classList.add("ccc");
      document.querySelectorAll(".articoloContenitoreInterno")[i].classList.add("ddd");
      document.querySelectorAll('.guardami')[i].classList.add("nnn");
      document.querySelectorAll('.guardami')[i].classList.add("ooo");
      document.querySelectorAll('.guardami')[i].classList.add("ppp");
    }

    else if (((altezzaviewport - oggettodd) <= altezzaOggetto/1.7 | (altezzaviewport - oggettodd) >= altezzaOggetto*2)  && window.matchMedia("(max-width:480px)").matches) {
      document.querySelectorAll(".mese")[i].classList.remove("aaa");
      document.querySelectorAll(".articleImg")[i].classList.remove("bbb");
      // document.querySelectorAll(".articolo")[i].classList.remove("ccc");
      document.querySelectorAll(".articoloContenitoreInterno")[i].classList.remove("ddd");
      document.querySelectorAll(".articoloContenitoreInterno")[i].classList.add("eee");
      document.querySelectorAll('.guardami')[i].classList.remove("nnn");
      document.querySelectorAll('.guardami')[i].classList.remove("ooo");
      document.querySelectorAll('.guardami')[i].classList.remove("ppp");
    }

    else if (window.innerWidth > 480) {
      document.querySelectorAll(".mese")[i].classList.remove("aaa");
      document.querySelectorAll(".articleImg")[i].classList.remove("bbb");
      // document.querySelectorAll(".articolo")[i].classList.remove("ccc");
      document.querySelectorAll(".articoloContenitoreInterno")[i].classList.remove("ddd");
      document.querySelectorAll(".articoloContenitoreInterno")[i].classList.remove("eee");
      document.querySelectorAll('.guardami')[i].classList.remove("ooo");
      document.querySelectorAll('.guardami')[i].classList.remove("ppp");
      document.querySelectorAll('.guardami')[i].classList.remove("ppp");
    }
  };
}




window.addEventListener("DOMContentLoaded",function() {
  if (window.innerWidth >= 768) {
    document.querySelector(".close").style.display="none"
    document.querySelector(".openMenu").style.display="none"
  }

  else if (window.innerWidth < 768) {
    document.querySelector(".close").style.display="none"
    document.querySelector(".openMenu").style.display=""
    document.getElementById("menu").style.display="none";

  }

})

window.addEventListener("resize", function() {
  if (window.innerWidth >= 768) {
    document.querySelector(".close").style.display="none"
    document.querySelector(".openMenu").style.display="none"
    document.getElementById("menu").style.display="";
  }

  if (window.innerWidth < 768) {
    document.querySelector(".close").style.display="none"
    document.querySelector(".openMenu").style.display=""
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
    document.querySelector(".close").style.display=""
    document.querySelector(".openMenu").style.display="none"
    open = true;
  }
};

document.querySelector(".close").addEventListener("click",close);
function close () {
  if (open == true) {
    document.getElementById("menu").style.display="none";
    document.querySelector(".close").style.display="none"
    document.querySelector(".openMenu").style.display=""
  open = false
  }
};




window.addEventListener("scroll",function() {
  y=window.scrollY
  console.log(y)
  innerH = window.innerHeight;
  console.log(innerH);
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



// document.querySelector(".contattami").addEventListener("submit", submitForm);
//
// function submitForm(event) {
//   event.preventDefault();
//   console.log(123)
//   let email = document.querySelector(".emeailUser").value;
// }
//
//
//
// function sendEmail() {
//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "luigi.argens@gmail.com",
//     Password : "password",
//     To : 'luigi.argens@gmail.com',
//     From : document.querySelector(".emailUser").value,
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
// }
