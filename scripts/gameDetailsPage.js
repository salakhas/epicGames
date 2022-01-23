/*--------------*/



/*--------------*/


// Added by shantanu

window.onscroll = function () { stickyNavbar() };

var navbar = document.querySelector("#secondNav");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed", "w-full", "top-0", "bg-black")
    document.querySelector("#buynav").classList.remove("hidden")

  } else {
    navbar.classList.remove("fixed");
    document.querySelector("#buynav").classList.add("hidden")

  }
}

let gamesArr = JSON.parse(localStorage.getItem("cartGameData")) || [];
   
   document.querySelector("#cartTotal").innerText = `${gamesArr.length}`;

// Added by Shantanu Ended

// Main/Product image slider for product page
$("#detail .main-img-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 300,
  lazyLoad: "ondemand",
  asNavFor: ".thumb-nav",
  prevArrow:
    '<div class="slick-prev"><i class="i-prev"></i><span class="sr-only sr-only-focusable">Previous</span></div>',
  nextArrow:
    '<div class="slick-next"><i class="i-next"></i><span class="sr-only sr-only-focusable">Next</span></div>',
});
// Thumbnail/alternates slider for product page
$(".thumb-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  centerPadding: "0px",
  asNavFor: ".main-img-slider",
  dots: false,
  centerMode: false,
  draggable: true,
  speed: 200,
  focusOnSelect: true,
  prevArrow:
    '<div class="slick-prev"><i class="i-prev"></i><span class="sr-only sr-only-focusable">Previous</span></div>',
  nextArrow:
    '<div class="slick-next"><i class="i-next"></i><span class="sr-only sr-only-focusable">Next</span></div>',
});

//keeps thumbnails active when changing main image, via mouse/touch drag/swipe
$(".main-img-slider").on(
  "afterChange",
  function (event, slick, currentSlide, nextSlide) {
    //remove all active class
    $(".thumb-nav .slick-slide").removeClass("slick-current");
    //set active class for current slide
    $(".thumb-nav .slick-slide:not(.slick-cloned)")
      .eq(currentSlide)
      .addClass("slick-current");
  }
);


var idGets = JSON.parse(localStorage.getItem("idNum")) || []; //   geting id from local storage

var User_Name = JSON.parse(localStorage.getItem("UserName")) || []; //   geting id from local storage
User_Name.map(function (el) {

  document.getElementById('User_Icon_Name').innerHTML = `<img class=" userImageIcon" width="12px"
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSTE4_k1O1tbY7gAMKci36AvFDQ_ZMZK-cQ&usqp=CAU">
  ${el}`;

});


var cartGame = JSON.parse(localStorage.getItem("cartGameData")) || [];

var whislistGame = JSON.parse(localStorage.getItem("whislistGameDatas")) || [];

displayItem(cartGame);
displayItemWhislist(whislistGame);

// <------   CART Button Change Text       ----------->
function displayItem(cartGame) {

  cartGame.map(function (el) {
    if (idGets.id == el.Id) {
      const cartButtonChange = document.querySelector('#Buttn');
      cartButtonChange.innerText = `VIEW IN CART`;
      cartButtonChange.addEventListener("click", cartpage);
    }

  });



}

// <------   Whislist Button Change Text       ----------->

function displayItemWhislist(whislistGame) {

  whislistGame.map(function (el) {
    if (idGets.id == el.Id) {
      const whislistbtn = document.querySelector('#Butn');
      whislistbtn.innerHTML = `<img width="20px" id="verified" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUoa8TRRTZ8IVCoVkRYFqp8QHbfHqcVAU8Q&usqp=CAU">IN WISHLIST`;
      whislistbtn.addEventListener("click", whislistpage);

    }
  });

}





// console.log(idGets.id)

async function apiCall() {

  try {

    const response = await fetch(`http://127.0.0.1:4000/api/gameAllData`);
    const data = await response.json();

    // console.log(data)

    showGames(data);

  }

  catch (err) {
    console.log(err);
  }
}
apiCall();






function showGames(data) {


  let idGet = idGets.id;  // Id call Here Which io get From Local Storage 

  data.map(({ title, thumbnail, status, short_description, screenshots, release_date, publisher, platform, minimum_system_requirements, id, genre, game_url, freetogame_profile_url, description, developer, strikeprice, price }) => {

    if (id == idGet) {

      let gameName = document.getElementById('gameName');
      gameName.innerText = `${title}`;


      let storage = minimum_system_requirements.storage;
      let graphics = minimum_system_requirements.graphics;
      let memory = minimum_system_requirements.memory;
      let processor = minimum_system_requirements.processor;
      let os = minimum_system_requirements.os;



      // <-------------  Append The Price and Strike Price   ---------------------->

      function numberWithCommas(price) {
        var pricesIncomma = price.toString().split(".");
        pricesIncomma[0] = pricesIncomma[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // console.log(pricesIncomma.join("."))

        let mainPrice = document.getElementById('mainPrice');
        mainPrice.innerText = `₹ ${pricesIncomma.join(".")}`;


      }
      numberWithCommas(price);

      function numberWithComma(strikeprice) {
        var strikepricesIncomma = strikeprice.toString().split(".");
        strikepricesIncomma[0] = strikepricesIncomma[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        // console.log(strikepricesIncomma.join("."))

        let mainstrikeprice = document.getElementById('strikePrice');
        mainstrikeprice.innerText = `₹ ${strikepricesIncomma.join(".")}`;


      }
      numberWithComma(strikeprice)
        ;

      // console.log(strikeprice)

      let DevelopersName = document.querySelector("#DevelopersName");
      DevelopersName.innerText = `${developer}`;
      DevelopersName.style.fontSize = "16.5px";

      let PublishersName = document.querySelector("#PublishersName");
      PublishersName.innerText = `${publisher}`;
      PublishersName.style.fontSize = "16.5px";

      // <-------   Changing the Date format Data    ---------->

      function formatDate(date) {
        const d = new Date(date);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

        //   console.log(`${da}/${mo}/${ye}`)

        let releaseDate = document.querySelector("#releaseDate");
        releaseDate.innerText = `${da}/${mo}/${ye}`;
        releaseDate.style.fontSize = "16.5px";


      }
      formatDate(release_date);

      let descriptions = document.getElementById('descriptions');
      descriptions.innerText = `${short_description}`;

      let Action = document.getElementById('Action');
      Action.innerText = `${genre}`;


      // <-------------   Game Slider Apeend The Images   ---------------------->

      let product_image = document.getElementById('product_image');
      product_image.innerHTML = `<img class="img-responsive" src="${thumbnail}">`;

      var sc = screenshots;
      // console.log(sc)
      var arr = [];
      sc.forEach(element => {
        arr.push(element.image);
      });
      //    console.log(arr[0])

      var firstImage = arr[0];
      var secondImage = arr[1];
      var thirdImage = arr[2];
      var fourthImage = arr[3];

      //    console.log(fourthImage)

      // Appending All the Images here for slider
      const a = document.querySelector('#addBtn');
      a.href = `${secondImage}`;

      const b = document.querySelector('#addBtn1');
      b.src = `${secondImage}`;

      const c = document.querySelector('#addBtn2');
      c.href = `${firstImage}`;

      const d = document.querySelector('#addBtn3');
      d.src = `${firstImage}`;


      const e = document.querySelector('#addBtn4');
      e.href = `${secondImage}`;

      const f = document.querySelector('#addBtn5');
      f.src = `${secondImage}`;

      const g = document.querySelector('#addBtn6');
      g.href = `${thirdImage}`;

      const h = document.querySelector('#addBtn7');
      h.src = `${thirdImage}`;

      const i = document.querySelector('#addBtn8');
      i.href = `${fourthImage}`;

      const j = document.querySelector('#addBtn9');
      j.src = `${fourthImage}`;

      const k = document.querySelector('#addBtn10');
      k.src = `${secondImage}`;

      const l = document.querySelector('#addBtn11');
      l.src = `${firstImage}`;

      const m = document.querySelector('#addBtn12');
      m.src = `${secondImage}`;

      const n = document.querySelector('#addBtn13');
      n.src = `${thirdImage}`;

      const o = document.querySelector('#addBtn14');
      o.src = `${fourthImage}`;



      let Descrption = document.querySelector("#Descrption");
      Descrption.innerHTML = `${short_description}<span class="read-more-target" id="moreDescrption">${description}</span>`;

      //<-------------  minimum_system_requirements --------->

      let memory_name = minimum_system_requirements.memory;
      let storages = minimum_system_requirements.storage;
      let processors = minimum_system_requirements.processor;
      let os_name = minimum_system_requirements.os;
      let graphic = minimum_system_requirements.graphics;

      // console.log(storages)

      let OsName = document.getElementById('OsName');
      OsName.innerText = `${os_name}`;

      let CPUNAme = document.getElementById('CPU');
      CPUNAme.innerText = `${processors}`;

      let memoryName = document.getElementById('Memory');
      memoryName.innerText = `${memory_name}`;

      let graphicName = document.getElementById('GPU');
      graphicName.innerText = `${graphic}`;

      let storagesName = document.getElementById('Storage');
      storagesName.innerText = `${storages}`;

      let OsName2 = document.getElementById('OsName2');
      OsName2.innerText = `${os_name}`;

      let CPUNAme2 = document.getElementById('CPU2');
      CPUNAme2.innerText = `${processors}`;

      let memoryName2 = document.getElementById('Memory2');
      memoryName2.innerText = `${memory_name}`;

      let graphicName2 = document.getElementById('GPU2');
      graphicName2.innerText = `${graphic}`;

      let storagesName2 = document.getElementById('Storage2');
      storagesName2.innerText = `${storages}`;

      var Cart_Game_DATA = {
        "Id": id,
        "Title": title,
        "Price": price,
        "Publisher": publisher,
        "Thumbnail": thumbnail,
      };

      let BuyButtonAdd = document.getElementById('BuyButton');
      BuyButtonAdd.addEventListener("click", function () {
        // BuyButtonCheckout(Cart_Game_DATA);

        var cardImageThumbanil = document.getElementById('cardImageThumbanil');
        cardImageThumbanil.src = `${thumbnail}`;
        cardImageThumbanil.style.objectFit = "cover";


        let cardTitleName = document.getElementById('cardTitleName');
        cardTitleName.innerText = `${title}`;

        let cardPublisherName = document.getElementById('cardPublisherName');
        cardPublisherName.innerText = `${publisher}`;


        let discountAndPriceInNumber = document.getElementById('discountAndPriceInNumber');

        let applyButtons = document.getElementById('applyButton');
        applyButtons.addEventListener("click", function () {
          checkPromo(price);
        });


        function numberWithComma2(price) {
          var strikepricesIncomma2 = price.toString().split(".");
          strikepricesIncomma2[0] = strikepricesIncomma2[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");




          let ListPrice = document.getElementById('ListPrice');
          ListPrice.innerText = `₹ ${strikepricesIncomma2.join(".")}.00`;


          let totaPrice = document.getElementById('totalPrice');
          totaPrice.innerText = `₹ ${strikepricesIncomma2.join(".")}.00`;



        }
        numberWithComma2(price);


      });


      let cartButtonAdd = document.getElementById('Buttn');
      cartButtonAdd.addEventListener("click", function () {
        addToCart(Cart_Game_DATA);
      });
      cartButtonAdd.addEventListener("click", refresh);




      let whislistButtonAdd = document.getElementById('Butn');
      whislistButtonAdd.addEventListener("click", function () {
        addToWhislist(Cart_Game_DATA);
        document.querySelector('#addImage').classlist.add('hidden')
      });

      whislistButtonAdd.addEventListener("click", refresh);

    }

  });


}


function addToCart(gameData) {

  var cartGames = JSON.parse(localStorage.getItem("cartGameData")) || [];

  for (var i = 0; i < cartGames.length; i++) {
    // console.log(gameData)

    if (cartGames[i].Id == gameData.Id) {
      break;
    }
  }

  if (i != cartGames.length) {
    swal("Oops!", "Game is already in your cart", "error");
    location.href = "cart.html"
  } else {
    swal("Good Job!", "Game has been sucessfully added to your cart", "success");
    cartGames.push(gameData);
    localStorage.setItem("cartGameData", JSON.stringify(cartGames));

  }

}

function addToWhislist(gameData) {

  var whislistGameData = JSON.parse(localStorage.getItem("whislistGameDatas")) || [];

  for (var i = 0; i < whislistGameData.length; i++) {
    // console.log(gameData)

    if (whislistGameData[i].Id == gameData.Id) {
      break;
    }
  }

  if (i != whislistGameData.length) {
    swal("Oops!", "Game is already in your favourite item", "error");
    location.href = "wishlist.html"

  } else {
    swal("Good Job!", "Game has been sucessfully added to your favourite item", "success");
    whislistGameData.push(gameData);
    localStorage.setItem("whislistGameDatas", JSON.stringify(whislistGameData));
  }

}
function BuyButtonCheckout(gameData) {

  var BuyButtonAdd = JSON.parse(localStorage.getItem("checkOutData")) || [];

  for (var i = 0; i < BuyButtonAdd.length; i++) {
    // console.log(gameData)

    if (BuyButtonAdd[i].Id == gameData.Id) {
      break;
    }
  }

  if (i != BuyButtonAdd.length) {
    // swal("Oops!", "Game is already in your favourite item", "error");
  } else {
    // swal("Good Job!", "Game has been sucessfully added to your favourite item", "success");
    BuyButtonAdd.push(gameData);
    localStorage.setItem("checkOutData", JSON.stringify(BuyButtonAdd));
  }

}

function cartpage() {
  setTimeout(function () {
    window.location.href = "cart.html";
  }, 1500);
}
function whislistpage() {
  setTimeout(function () {
    window.location.href = "whislist.html";
  }, 1500);
}

function refresh() {
  setTimeout(function () {
    location.reload();
  }, 1000)
    ;
}


// <------    POPUP PAYMENT PAGE               ---------->

function modalClick() {
  modal.style.display = "block";

}
var modal = document.getElementById("signInContainer");
modal.style.display = "none";
var close = document.getElementById("crossLogo");
close.style.cursor = "pointer";

close.onclick = function () {
  modal.style.display = "none";
}
  ;



// <------    FORM OF POPUP PAYMENT PAGE               ---------->


function call(event) {
  event.preventDefault();
  var cardno = document.querySelector("#cardno").value;
  var cvv = document.querySelector("#cvv").value;
  var exdate = document.querySelector("#exdate").value;

  if (cvv === "123" && exdate === "01-01-2023") {
    swal("Good Job!", "OTP Sent Succesfully", "success");

    setTimeout(function () {
      window.location.href = "OTP.html";
      window.clearTimeout(tID); // clear time out.
    }, 1000);

  } else {
    swal("Oops!", "Card Details Is Wrong", "error");
  }
}






// <--------   Check Promo      ------------->




function checkPromo(price) {

  let ListPriceDiscounted = document.getElementById('ListPrice');

  let discountAndPrices = document.getElementById('discountAndPrice');


  var promo = document.getElementById("DiscountPrice").value;

  if (promo == "epic") {
    discountAndPrices.innerHTML = `<h4 class="card-title text-left font-weight-normal">Discount</h4>
                 <h4 class="card-title text-left font-weight-normal">Price</h4>`;


    ListPriceDiscounted.style.textDecoration = " line-through";
    var numVal1 = Number(price);
    var numVal2 = Number(30) / 100;
    var final = (numVal1 - (numVal1 * numVal2)).toFixed(2);
    var discountedValue = (numVal1 - final).toFixed(2);

    let discountAndPriceInNumbers = document.getElementById('discountAndPriceInNumber');

    function numberWithComma3(discountedValue, final) {
      var strikepricesIncomma3 = discountedValue.toString().split(".");
      var strikepricesIncomma4 = final.toString().split(".");
      strikepricesIncomma3[0] = strikepricesIncomma3[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      strikepricesIncomma4[0] = strikepricesIncomma4[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");




      let totalPrices = document.getElementById('totalPrice');


      let discontValues = `-₹ ${strikepricesIncomma3.join(".")}`;

      let totalValueinComma = `₹ ${strikepricesIncomma4.join(".")}`;

      discountAndPriceInNumbers.innerHTML = `<h4 class="card-title text-right font-weight-normal">
      ${discontValues}</h4><h4 class="card-title text-right font-weight-normal">${totalValueinComma}</h4> `;


      totalPrices.innerText = `${totalValueinComma}`;

    }
    numberWithComma3(discountedValue, final);



  } else {
    swal("Oops!", "Invalid Coupon Code", "error");
  }

}


var userName = JSON.parse(localStorage.getItem("UserName"));
console.log(userName);
if (userName !== null) {
  document.querySelector("#signin").textContent = userName;
}






