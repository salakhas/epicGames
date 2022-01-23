import apiCall from "./fetch.js";
import { footer } from "/components/navFooter.js";

document.querySelector("#footer").innerHTML = footer();
var url = "http://127.0.0.1:4000/api/gameAllData"
var data;
var res = apiCall(url);
res.then((res) => {
    console.log(res)
    appendData(res);
    data = res;
    //console.log(data)
})
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

function news() {
    //fetching the data
    apiCall(`https://newsapi.org/v2/everything?q=games&apiKey=5c1d045a2ae94125ac810652dd3a1ead`)
        .then((res) => {
            console.log('res:', res);
            displayNews(res.articles);
        })
        .catch((err) => {
            console.log('err:', err);
        })
}
news();

//function to display news
function displayNews(data) {

    //left side news box

    let firstNews = document.getElementById('firstNews');

    //creating a div for adding img
    let imgDiv1 = document.createElement('div');
    imgDiv1.style.width = "100%";
    imgDiv1.style.height = "270px";
    imgDiv1.style.borderRadius = "5px";
    imgDiv1.setAttribute('class', 'imgHoverNews');

    //creating img tag
    let imageForNewsBox1 = document.createElement('img');
    imageForNewsBox1.src = data[0].urlToImage;
    imageForNewsBox1.style.width = "100%";
    imageForNewsBox1.style.height = "100%";
    imgDiv1.append(imageForNewsBox1);

    //time ago
    let timeAgo = calculateTimeAgo(data[0].publishedAt);
    let timeP = document.createElement('p');
    timeP.className = "greyParaG";
    timeP.innerText = timeAgo;

    //news heading
    let thumbnailHeading1Div = document.createElement('div');
    thumbnailHeading1Div.className = "divsThumbnail";
    let thumbnailHeading1 = document.createElement('p');
    thumbnailHeading1.innerText = data[0].title;
    thumbnailHeading1.className = "thumbnailHeading";
    thumbnailHeading1Div.append(thumbnailHeading1);

    //creating anchor tag
    let thumbnailA1 = document.createElement('a');
    let u1 = document.createElement('u');
    u1.textContent = "Read More";
    u1.className = "underlineproperty";
    thumbnailA1.href = data[0].url;
    console.log(data[0].url)
    thumbnailA1.append(u1);
    thumbnailA1.className = "thumbnailA";

    firstNews.append(imgDiv1, timeP, thumbnailHeading1Div, thumbnailA1);


    //right side news box

    let secondNews = document.getElementById('secondNews');

    //creating a div for adding img
    let imgDiv2 = document.createElement('div');
    imgDiv2.style.width = "100%";
    imgDiv2.style.height = "270px";
    imgDiv2.style.borderRadius = "5px";
    imgDiv2.setAttribute('class', 'imgHoverNews');

    //creating img tag
    let imageForNewsBox2 = document.createElement('img');
    imageForNewsBox2.src = data[1].urlToImage;
    imageForNewsBox2.style.width = "100%";
    imageForNewsBox2.style.height = "100%";
    imgDiv2.append(imageForNewsBox2);

    //time ago
    let timeAgo1 = calculateTimeAgo(data[1].publishedAt);
    let timeP1 = document.createElement('p');
    timeP1.className = "greyParaG";
    timeP1.innerText = timeAgo1;

    //news heading
    let thumbnailHeading1Div1 = document.createElement('div');
    thumbnailHeading1Div1.className = "divsThumbnail";
    let thumbnailHeading2 = document.createElement('p');
    thumbnailHeading2.innerText = data[1].title;
    thumbnailHeading2.className = "thumbnailHeading";
    thumbnailHeading1Div1.append(thumbnailHeading2);

    //creating anchor tag
    let thumbnailA2 = document.createElement('a');
    let u2 = document.createElement('u');
    u2.textContent = "Read More";
    u2.className = "underlineproperty";
    thumbnailA2.href = data[1].url;
    thumbnailA2.append(u2);
    thumbnailA2.className = "thumbnailA";

    secondNews.append(imgDiv2, timeP1, thumbnailHeading1Div1, thumbnailA2);


    //showing rest of the articles
    let showNews = document.getElementById('showNews');
    data.forEach((el) => {
        //div to append all details
        let newsDiv = document.createElement('div');
        newsDiv.className = "articleDiv hoverEffectNews1";

        //creating img div and tag
        let imgDivArticles = document.createElement('div');
        imgDivArticles.className = "imgDivArticles";
        imgDivArticles.id = "imgHoverNews";
        let imageForNewsBox = document.createElement('img');
        imageForNewsBox.src = el.urlToImage;
        imageForNewsBox.style.width = "100%";
        imageForNewsBox.style.height = "100%";
        imageForNewsBox.setAttribute('class', 'imgsNews imgHoverNews');
        imgDivArticles.append(imageForNewsBox);

        //creatind div to display content
        let contentDiv = document.createElement('div');
        //time ago
        let timeAgoA = calculateTimeAgo(el.publishedAt);
        let timePA = document.createElement('p');
        timePA.className = "greyParaG";
        timePA.innerText = timeAgoA;

        //news heading
        let thumbnailHeadingDivs = document.createElement('div');
        thumbnailHeadingDivs.className = "divsThumbnails";
        let thumbnailHeadings = document.createElement('p');
        thumbnailHeadings.innerText = el.title;
        thumbnailHeadings.className = "thumbnailHeading";
        thumbnailHeadingDivs.append(thumbnailHeadings);

        //creating anchor tag
        let thumbnailA = document.createElement('a');
        let u = document.createElement('u');
        u.textContent = "Read More";
        u.className = "underlinepropertys";
        thumbnailA.href = el.url;
        thumbnailA.append(u);
        thumbnailA.className = "thumbnailA";
        contentDiv.append(timePA, thumbnailHeadingDivs, thumbnailA);
        contentDiv.className = "contentDiv";


        newsDiv.append(imgDivArticles, contentDiv)
        showNews.append(newsDiv);

    })
}

function calculateTimeAgo(string) {
    let arr = string.split('T');
    console.log('arr:', arr)
    let dates = arr[0].split('-').map(Number);
    let year = dates[0], month = dates[1], day = dates[2];

    //getting current date
    let currentDate = new Date();
    currentDate = currentDate.toString();
    currentDate = currentDate.split(' ');

    let currentMonth = currentDate[1];
    switch (currentMonth) {
        case 'Jan':
            currentMonth = 1;
            break;
        case 'Feb':
            currentMonth = 2;
            break;
        case 'Mar':
            currentMonth = 3;
            break;
        case 'Apr':
            currentMonth = 4;
            break;
        case 'May':
            currentMonth = 5;
            break;
        case 'Jun':
            currentMonth = 6;
            break;
        case 'Jul':
            currentMonth = 7;
            break;
        case 'Aug':
            currentMonth = 8;
            break;
        case 'Sep':
            currentMonth = 9;
            break;
        case 'Oct':
            currentMonth = 10;
            break;
        case 'Nov':
            currentMonth = 11;
            break;
        case 'Dec':
            currentMonth = 12;
            break;
    }

    let currentYear = +(currentDate[3]);
    let currentDay = +(currentDate[2]);

    //calculating ages ago
    let agesAgo = '', diff;
    if (year < currentYear) {
        diff = currentYear - year;
        agesAgo = diff + 'Y' + ' ' + 'AGO';
        return agesAgo;
    }
    else if (year === currentYear) {
        if (month < currentMonth) {
            diff = currentMonth - month;
            agesAgo = diff + 'M' + ' ' + 'AGO';
            return agesAgo;
        }
        else if (month === currentMonth) {
            if (day < currentDay) {
                diff = currentDay - day;
                agesAgo = diff + 'D' + ' ' + 'AGO';
                return agesAgo;
            }
            else if (day === currentDay) {
                agesAgo = 'TODAY';
                return agesAgo;
            }
        }
    }

}