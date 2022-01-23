import apiCall from "./fetch.js";
// <script>

window.onscroll = function () { stickyNavbar() };

var navbar = document.querySelector("#secondNav");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed", "w-full", "top-0")
  } else {
    navbar.classList.remove("fixed");
  }
}


// document.querySelector("#input").addEventListener("keypress", getData);
//  


function getData(event) {

  var input = document.querySelector("#input").value

  if (event.key === "Enter") {
    console.log(input)
    let url = "http://127.0.0.1:4000/api/gameAllData?genre=" + input + "";

    let res = apiCall(url);
    res.then((res) => {
      //console.log(res)
      data = res;
      console.log(data.length)
      if (data.length === 0) {
        alert("No Result Found");
      }
      appendData(res);
    })
    res.catch((error) => {
      console.log(error)
    })
  }

}


function showInputBoxInMobileView() {

  document.querySelector('#dicoverHide').classList.toggle("hidden")
  document.querySelector('#searchDiv').classList.toggle("hidden",)
  document.querySelector('#searchicon').classList.add("hidden")
  document.querySelector('#secondNav').classList.toggle("justify-start")

}


    // </script>