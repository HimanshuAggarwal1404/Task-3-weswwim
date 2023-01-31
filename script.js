var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
document.getElementById("menu").addEventListener("click", function(){
  document.getElementById("sidebar").classList.toggle("activeside");
})
document.getElementById("cross").addEventListener("click", function(){
  document.getElementById("sidebar").classList.toggle("activeside");
})
document.getElementById("menu").addEventListener("click", function(){
  document.getElementById("content1").classList.toggle("darkmode");
})
document.getElementById("cross").addEventListener("click", function(){
  document.getElementById("content1").classList.toggle("darkmode");
})
document.getElementById("menu").addEventListener("click", function(){
  document.getElementById("content2").classList.toggle("darkmode");
})
document.getElementById("cross").addEventListener("click", function(){
  document.getElementById("content2").classList.toggle("darkmode");
})
document.getElementById("menu").addEventListener("click", function(){
  document.getElementById("content3").classList.toggle("darkmode");
})
document.getElementById("cross").addEventListener("click", function(){
  document.getElementById("content3").classList.toggle("darkmode");
})
document.getElementById("menu").addEventListener("click", function(){
  document.getElementById("content4").classList.toggle("darkmode");
})
document.getElementById("cross").addEventListener("click", function(){
  document.getElementById("content4").classList.toggle("darkmode");
})
document.getElementById("menu").addEventListener("click", function(){
  document.getElementById("content5").classList.toggle("darkmode");
})
document.getElementById("cross").addEventListener("click", function(){
  document.getElementById("content5").classList.toggle("darkmode");
})
document.getElementById("menu").addEventListener("click", function(){
  document.getElementById("content6").classList.toggle("darkmode");
})
document.getElementById("cross").addEventListener("click", function(){
  document.getElementById("content6").classList.toggle("darkmode");
})
document.getElementById("menu").addEventListener("click", function(){
  document.getElementById("content7").classList.toggle("darkmode");
})
document.getElementById("cross").addEventListener("click", function(){
  document.getElementById("content7").classList.toggle("darkmode");
})
document.getElementById("menu").addEventListener("click", function(){
  document.getElementById("content8").classList.toggle("darkmode");
})
document.getElementById("cross").addEventListener("click", function(){
  document.getElementById("content8").classList.toggle("darkmode");
})
document.getElementById("menu").addEventListener("click", function(){
  document.getElementById("content9").classList.toggle("darkmode");
})
document.getElementById("cross").addEventListener("click", function(){
  document.getElementById("content9").classList.toggle("darkmode");
})
document.getElementById("menu").addEventListener("click", function(){
  document.getElementById("head").classList.toggle("darkmode");
})
document.getElementById("cross").addEventListener("click", function(){
  document.getElementById("head").classList.toggle("darkmode");
})
document.getElementById("home").addEventListener("click", function(){
  document.getElementById("sidebar").classList.toggle("activeside");
})
document.getElementById("home").addEventListener("click", function(){
  document.getElementById("content1").classList.toggle("darkmode");
})
document.getElementById("home").addEventListener("click", function(){
  document.getElementById("content2").classList.toggle("darkmode");
})
document.getElementById("home").addEventListener("click", function(){
  document.getElementById("content3").classList.toggle("darkmode");
})
document.getElementById("home").addEventListener("click", function(){
  document.getElementById("content4").classList.toggle("darkmode");
})
document.getElementById("home").addEventListener("click", function(){
  document.getElementById("content5").classList.toggle("darkmode");
})
document.getElementById("home").addEventListener("click", function(){
  document.getElementById("content6").classList.toggle("darkmode");
})
document.getElementById("home").addEventListener("click", function(){
  document.getElementById("content7").classList.toggle("darkmode");
})
document.getElementById("home").addEventListener("click", function(){
  document.getElementById("content8").classList.toggle("darkmode");
})
document.getElementById("home").addEventListener("click", function(){
  document.getElementById("content9").classList.toggle("darkmode");
})
document.getElementById("home").addEventListener("click", function(){
  document.getElementById("head").classList.toggle("darkmode");
})