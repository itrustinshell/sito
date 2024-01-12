window.addEventListener("scroll",function() {
  y=window.scrollY
  console.log(y)
  innerH = window.innerHeight;
  console.log(innerH);
  if (y<innerH) {
    document.querySelector(".goUp").style.display = "none";
  if (y>innerH) {
    document.querySelector(".goUp").style.display = "";
  }
})
