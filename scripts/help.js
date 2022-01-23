import apiCall from './fetch.js';
import { footer } from "/components/navFooter.js";

document.querySelector("#footer").innerHTML = footer();
var url = "http://127.0.0.1:4000/api/gameAllData"
var data;
var res = apiCall(url);
res.then((res) => {
    console.log(res)
    //    appendData(res);
    data = res;
    //console.log(data)
})

//adding event listener to the down arrow button
let downArrowAlert = document.getElementById('downArrowAlert');
downArrowAlert.addEventListener('click', addingClass);

//function to add a different class to the div
function addingClass() {
    console.log("clicked")
    let alertDiv = document.getElementById('alertDiv');
    alertDiv.style.height = "fit-content";
}

//adding event listener to body so that it invokes function closeIt() anytime the body is clicked.
document.body.addEventListener('click', function () {
    console.log("clicked")
    let alertDiv = document.getElementById('alertDiv');
    alertDiv.style.height = "67.5px";
}, true);



let inp = document.getElementById('inputBoxHelp');
inp.addEventListener('input', handleDebounce)
/*implementing search function*/

function handleDebounce() {
    console.log("handleDebounce")
    const inputBoxHelp = document.getElementById("inputBoxHelp").value;
    console.log('inputBoxHelp:', inputBoxHelp)
    debounceFunction(searchForHelp(inputBoxHelp), 5000)
}

const debounceFunction = (func, delay) => {
    console.log("debounceFunction")
    let debounceTimer;
    return function () {
        clearTimeout(debounceTimer)//clearing the setTimeout delay if it is clicked again.
        debounceTimer = setTimeout(function () {
            func(value)
        }, delay);//The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
    }
}


function searchForHelp(value) {
    //console.log("searchForHelp")

    //fetching the data
    apiCall(`http://127.0.0.1:4000/api/help?q=${value}`)
        .then((res) => {
            console.log('res:', res);
            if (res.length !== 0) {
                displayHelp(res);
            }
            else {
                apiCall(`http://127.0.0.1:4000/api/help`)
                    .then((response) => {
                        console.log('response:', response)
                        var responses = response;
                        invalidMsg(value, responses);
                    })
                    .catch((err) => {
                        console.log('error:', err);

                    })

            }
        })
        .catch((err) => {
            console.log('error:', err);

        })
}


function displayHelp(data) {
    // console.log('data:', data)
    let displayDiv = document.getElementById('resultsDiv');
    displayDiv.innerHTML = '';
    displayDiv.style.display = "block";

    let headSearch = document.createElement('p');
    headSearch.innerText = "SEARCH RESULTS";
    headSearch.className = "headSearch";

    displayDiv.append(headSearch);


    data.forEach((el) => {
        console.log(el.subject)
        let paragraph = document.createElement('p');
        paragraph.innerText = el.subject;
        paragraph.className = "paras"
        displayDiv.append(paragraph);
    })

    let anchor = document.createElement('a');
    anchor.textContent = "See all results";
    anchor.style.padding = "30px";
    anchor.style.color = "#0074E4"
    anchor.className = 'readmore';
    anchor.id = "anchor";
    displayDiv.append(anchor)

    //making close button work 
    let closeIconHelp = document.getElementById('closeIconHelp');
    closeIconHelp.style.display = "block";
    closeIconHelp.addEventListener('click', () => {
        displayDiv.style.display = "none";
        closeIconHelp.style.display = "none";
        let inps = document.getElementById('inputBoxHelp');
        inps.value = '';
    })
}

function invalidMsg(value, responses) {
    let displayDiv = document.getElementById('resultsDiv');
    displayDiv.innerHTML = '';
    displayDiv.style.display = "block";

    let headSearch = document.createElement('p');
    headSearch.innerText = "SEARCH RESULTS";
    headSearch.className = "headSearch";

    displayDiv.append(headSearch);

    let paragraphs = document.createElement('p');
    paragraphs.innerText = `No results found for "${value}"`;
    paragraphs.className = "parasg"

    let poparticles = document.createElement('p');
    poparticles.innerText = "MOST POPULAR ARTICLES";
    poparticles.className = "headSearch";





    displayDiv.append(paragraphs, poparticles);


    for (let i = 0; i < 5; i++) {
        console.log('i:', i)
        console.log(responses[i].subject)
        let paragra = document.createElement('p');
        paragra.innerText = responses[i].subject;
        paragra.className = "paras"
        displayDiv.append(paragra);
    }
}