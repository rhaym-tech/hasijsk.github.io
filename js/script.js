//copyright year
document.getElementById("cp-year").innerHTML = new Date().getFullYear()

const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click", ()=>{
    hundleMenu();
});

function hundleMenu(){
menu.classList.toggle("is-active");
action.classList.toggle("is-active");
}
/*
// back to top
var btn = $("#backtotop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});
*/
