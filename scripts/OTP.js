
document.querySelector("#Nitish_My").addEventListener("submit", confirm);

function confirm(event) {
    event.preventDefault();
    var otp = document.querySelector("#Nitish_OTP").value;
    if (otp == "1234") {
        document.querySelector("#Nitish_My").textContent = "";
        submit();


    } else {
        swal("Oops!", "Something went wrong on the page!", "error");
    }
}


function submit() {

    document.body.style = "padding-left:34%;background-color:black; margin:auto; margin-top:4%;";

    document.body.innerHTML = `<div id=""><img class="img-fluid rounded" src="https://i.pinimg.com/originals/7f/be/75/7fbe7573d1fb8b4a298bd6f172467bba.gif"></div>`;
    setTimeout(threeSeconds, 3000);
}

function threeSeconds() {
    document.body.style = "padding-left:37%;background-color:black; margin:auto; margin-top:170px;";
    document.body.innerHTML = `<div id="orderDone"><img class="img-fluid rounded" src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif">`;
    setTimeout(fiveSeconds, 4000);

}

function fiveSeconds() {

    window.location.href = "../index.html";
}

