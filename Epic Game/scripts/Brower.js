
   import apiCall from "/scripts/fetch.js";

   var url = "http://127.0.0.1:4000/api/gameAllData"
    var data;
   var res = apiCall(url);
   res.then((res) => {
       console.log(res)
       appendData(res);
       data = res;
       //console.log(data)
   })


   function appendData(res) {
    document.querySelector("#displayGames").textContent="";
       res.map((el) => {
        //console.log(el.id)
           let { strikeprice, price, id, thumbnail, title, short_description } = el;
           var div = document.createElement("div");
           div.addEventListener("click",function (){
               let idNum = {
                   id,
               }
               localStorage.setItem("idNum",JSON.stringify(idNum));
               window.location.href="";
           })
           var image = document.createElement("img");
           image.src = thumbnail;
           var tit = document.createElement("h2");
           tit.textContent = title;
           var des = document.createElement("p");
           des.textContent = short_description;
           var div1 = document.createElement("div");
           div1.setAttribute("id", "price")
           var strikeP = document.createElement("h3");
           strikeP.textContent = "₹" + strikeprice;
           strikeP.style.textDecoration="line-through";
           strikeP.style.color="skyblue"
           var rupees = document.createElement("h3");
           rupees.textContent = "₹" + price;

           div1.append(strikeP,rupees)
           div.append(image, tit, des, div1);
           document.querySelector("#displayGames").append(div);
           
       })
   }

   document.querySelector("#sortBtn").addEventListener("change",sortBy);
   function sortBy(){
       var selected = document.querySelector("#sortBtn").value;
       //console.log(selected);
       if (selected === "Alphabetical"){
           console.log(selected)
        var newProd = data.sort((a, b) =>{
            //console.log(a.title)
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            return 0;
        })
        
       }
       console.log(newProd);
       
   }
   
   document.querySelector("#genre").addEventListener("change",sortByGenre);
   function sortByGenre(){
       let selected = document.querySelector("#genre").value;
       //console.log(selected);
       let url = "http://127.0.0.1:4000/api/gameAllData?genre="+selected+"";

       let res = apiCall(url);
       res.then((res) => {
           console.log(res)
           appendData(res);
       })
       
   }

   document.querySelector("#platform").addEventListener("change",sortByplatform);

   function sortByplatform(){
    let selected = document.querySelector("#platform").value;
    let url = "http://127.0.0.1:4000/api/gameAllData?platform="+selected+"";

       let res = apiCall(url);
       res.then((res) => {
           console.log(res)
           appendData(res);
       })
   
   }
