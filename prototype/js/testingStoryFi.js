const MAXPAGECOUNT = 17;

let pageDiv = document.getElementById("page");

let pageJson = "/json/storyFI.json";
let pageCounter = 0;

//add to the page counter then fetch data
function nextPage() {
    if (pageCounter < MAXPAGECOUNT) {
       pageCounter++; 
    }
    pageData();
}

//make sure the number doesn't drop below 0 and fecth data
function prevPage() {
    if (pageCounter >= 1) {
        pageCounter--;    
    }
    pageData();
}

//get the data and pass it to page creator
function pageData() {
    fetch(pageJson)
        .then(function(response) {
            if (response.status !== 200) {
                // data transfer not complete
                return;
            }
            response.json().then(function(data) {
                    data.pages.forEach(newPage);
                });
            })
        .catch(function(err) {
            console.log('Fetch Error :' + err);
    });
}

//create the new page
function newPage(page) {
    //alert("got here");
    //console.log(page.pageNumber);
    //check that page number matches counter
    if (pageCounter == page.pageNumber) {
        console.log("Page is on " + page.pageNumber);
        let pageContent = "";
        pageContent += page.background;
        pageContent += page.sentance;
        pageContent += page.character;
        if (page.special == "yes") {
            pageContent += page.specialContent;
        }
        pageContent += '<button id="backButton" onclick="prevPage()" class="back fa fa-angle-double-left"></button>';
        pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';
        /*
        * thought bumble animation
        * leaving house animation
        */

        pageDiv.innerHTML = pageContent;
    }
}