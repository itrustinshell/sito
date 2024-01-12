window.addEventListener("load", function(){
  document.querySelector(".goUp").style.display = "none";
});

dd = document.querySelectorAll(".articolo");

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
  innerH = window.innerHeight;
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


for (i=0; i<document.querySelectorAll(".hidden").length;i++) {
  document.querySelectorAll(".hidden")[i].addEventListener("click",function(){
      this.classList.toggle("active");
  });
};




// inizio codice per muoversi tra i titoli
listaIndice = document.querySelectorAll(".vaiAlPara");
listaTitoli = document.querySelectorAll(".titoloPara");
// trasformo il nodelist listaIndice in array:
//in queso modo successivamente posso risalire all'index
// di "this" ed usarlo come indice del nodelist dei titoli
//dei paragrafi:
const arrList = Array.from(listaIndice);
//ora inizio il for-loop
for (i=0; i<arrList.length; i++) {
//ogni volta che clicco l'indice si esegue la funzione provaa
listaIndice[i].addEventListener("click",provaa);
//ecco la funzione provaa
function provaa() {
//ora riesco a sapere l'index dell'elemento che ho cliccato
//nell'indice (perchè ho trasfromato il nodelist in array)
  h=arrList.indexOf(this);
//qui ora mi imposto i titoli dei paragrafi e posso mettere
//appunto la h selezionata
  offsetTopElement=document.querySelectorAll(".titoloPara")[h].offsetTop;
//questa è l'alttezza fissa del navbar che copriva i titoloArticolo
//perchè ha una position fixed ed il testo scorre sotto
  navbarHeight = document.getElementById("naviga").getBoundingClientRect().height;
//e qui un pò di calcoli per mandare il titolo all'altezza giusta
  titleHeight=offsetTopElement-navbarHeight-20;
//qui eseguo lo scroll fino alla misura individuata
  window.scrollTo(0,titleHeight);
  }
};
// fine codice per muoversi tra i titoli.

//inizio codice per andare dai titoli all'indice:
tornaIndiceList = document.querySelectorAll(".tornaIndice");
for (i=0; i<tornaIndiceList.length; i++) {
  tornaIndiceList[i].addEventListener("click",function(){

  offsetTopIndice=document.querySelector(".indice").offsetTop;
  console.log(offsetTopIndice);
  navbarHeight = document.getElementById("naviga").getBoundingClientRect().height;
  heightIndice = offsetTopIndice-navbarHeight-40;
  window.scrollTo(0,heightIndice);

  })
};
