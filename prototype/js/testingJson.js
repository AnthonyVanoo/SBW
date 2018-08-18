let pageDiv = document.getElementById("page");

let pageJson = "/json/storyEN.json";
let pageCounter = 0;

//add to the page counter then fetch data
function nextPage() {
    pageCounter++;
    pageData();
}

//make sure the number doesn't drop below 0 and fecth data
function prevPage() {
    if (pageCounter > 1) {
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
        console.log("It works yo, page is on " + page.pageNumber);
        let pageContent = "";
        pageContent += page.background;
        pageContent += page.sentance;
        pageContent += page.character;
        pageContent += '<button id="backButton" onclick="prevPage()" class="back fa fa-angle-double-left"></button>';
        pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';
        /*
        * thought bumble animation
        * leaving house animation
        */

        pageDiv.innerHTML = pageContent;
    }
}

/*
{
 "pages":
    [
    { "page1":
        [{
			"background":"<img class='bg' src='img/backgrounds/beehouseoutside.png'>",
            "sentance":"<div class='sentance'> <h1>Bumblebee wants to find it's favorite flower</h1> </div>",
            "character":"<img src='img/chars/bee.png' class='charBumblebee' alt='Bumblebee'>"
		}]},
        
     { "page2":
        [{
			"background":"<img class='bg' src='img/backgrounds/beehouseoutside.png'>",
            "sentance":"<div class='sentance'> <h1>Bumblebee wants to find it's favorite flower</h1> </div>",
            "character":"<img src='img/chars/bee.png' class='charBumblebee' alt='Bumblebee'>"
		}]}
	]
}*/