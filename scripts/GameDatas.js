import { footer } from "/components/navFooter.js";
import apiCall from "./fetch.js";

document.querySelector("#footer").innerHTML = footer();
var genre = JSON.parse(localStorage.getItem("genreData"));
console.log(genre.title)
var url = `http://127.0.0.1:4000/api/gameAllData?genre=${genre.title}`;
var data;
var res = apiCall(url);
res.then((res) => {
    console.log(res);
    appendData(res);
    data = res;
    //console.log(data)
});

let gamesArr = JSON.parse(localStorage.getItem("cartGameData")) || [];
   
   document.querySelector("#cartTotal").innerText = `${gamesArr.length}`;

   
document.querySelector(".Header").textContent = genre.title + " " + "Games"
function appendData(res) {
    //document.querySelector(".header").textContent= input + " " + "Games";
    document.querySelector("#displayGames").textContent = "";
    res.map((el) => {
        //console.log(el.id)
        let { strikeprice, price, id, thumbnail, title, short_description } = el;
        var div = document.createElement("div");
        div.addEventListener("click", function () {
            let idNum = {
                id,
            }
            localStorage.setItem("idNum", JSON.stringify(idNum));
            window.location.href = "gameDetailsPage.html";
        })
        var image = document.createElement("img");
        image.src = thumbnail;
        var tit = document.createElement("h2");
        tit.textContent = title;
        var des = document.createElement("p");
        des.textContent = short_description;
        var div1 = document.createElement("div");
        div1.setAttribute("id", "Gameprice")
        var strikeP = document.createElement("h3");
        strikeP.textContent = "₹" + numberWithCommas(strikeprice);
        strikeP.style.textDecoration = "line-through";
        strikeP.style.color = "skyblue"
        var rupees = document.createElement("h3");
        rupees.textContent = "₹" + numberWithCommas(price);
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        div1.append(strikeP, rupees)
        div.append(image, tit, des, div1);
        document.querySelector("#displayGames").append(div);

    })
}

// main search functionaity

document.querySelector("#navSearch").addEventListener("keypress", getMainData);

function getMainData(event) {
    let input = document.querySelector("#navSearch").value

    if (event.key === "Enter") {
        console.log(input)
        var inp = [];
        inp.push(input);
        localStorage.setItem("inputTitle", JSON.stringify(inp));
        window.location.href = "/pages/Search.html"
    }

}

//    SortBy Alphabetical, price
document.querySelector("#sortBtn").addEventListener("change", sortBy);
function sortBy() {
    var selected = document.querySelector("#sortBtn").value;
    //console.log(selected);
    if (selected === "Alphabetical") {
        console.log(selected)
        let newProd = data.sort((a, b) => {
            //console.log(a.title)
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            return 0;
        })
        appendData(newProd);
    }

    if (selected === "Low to High") {
        console.log(selected)
        let newProd = data.sort((a, b) => {
            //console.log(a.title)
            return a.price - b.price;
        })
        appendData(newProd);
    }

    if (selected === "High to Low") {
        console.log(selected)
        let newProd = data.sort((a, b) => {
            //console.log(a.title)
            return b.price - a.price;
        })
        appendData(newProd);
    }



}

var userName = JSON.parse(localStorage.getItem("UserName"));
console.log(userName);
if (userName !== null) {
    document.querySelector("#signin").textContent = userName;
}
else {

}
//input functionality

document.querySelector("#input").addEventListener("keypress", getData);

function getData(event) {
    var input = document.querySelector("#input").value

    if (event.key === "Enter") {
        console.log(input)
        let url = "http://127.0.0.1:4000/api/gameAllData?genre=" + input + "";

        let res = apiCall(url);
        res.then((res) => {
            console.log(res.length)
            appendData(res);
            if (res.length === 0) {
                swal("Oops!", "No Results Found", "error")
            }
        })
        res.catch((error) => {
            console.log(error)
        })
    }

}

//sort by price
document.querySelector("#price").addEventListener("change", maxPrice);

function maxPrice() {
    let selected = document.querySelector("#price").value;

    if (selected === "1000") {
        console.log(selected)
        let newProd = data.filter((el) => {
            //console.log(a.title)
            return el.price >= 0 && el.price <= 1000;
        })
        appendData(newProd);
    }

    if (selected === "5000") {
        console.log(selected)
        let newProd = data.filter((el) => {
            //console.log(a.title)
            return el.price > 1000 && el.price <= 5000;
        })
        appendData(newProd);
    }

    if (selected === "9000") {
        console.log(selected)
        let newProd = data.filter((el) => {
            //console.log(a.title)
            return el.price > 5000 && el.price <= 9000;
        })
        appendData(newProd);
    }

    if (selected === "9100") {
        console.log(selected)
        let newProd = data.filter((el) => {
            //console.log(a.title)
            return el.price > 9000;
        })
        appendData(newProd);
    }
}



//sort by platform

document.querySelector("#platform").addEventListener("change", sortByplatform);

function sortByplatform() {
    let selected = document.querySelector("#platform").value;
    let url = "http://127.0.0.1:4000/api/gameAllData?platform=" + selected + "";

    let res = apiCall(url);
    res.then((res) => {
        console.log(res)
        appendData(res);
    })

}

//clearing all filters

document.querySelector("#clear").addEventListener("click", clearFilter)

function clearFilter() {
    window.location.reload();
}


