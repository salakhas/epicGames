function sticknav(){
window.onscroll = function() {stickyNavbar();};

var navbar = document.querySelector("#secondNav");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed", "w-full","top-0");
  } else {
    navbar.classList.remove("fixed");
  }
}
}

export {sticknav};