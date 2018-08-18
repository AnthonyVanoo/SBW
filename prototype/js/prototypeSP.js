/* 
* story page bee prototype
*/

let backBtn = document.getElementById("backButton");
let forwardBtn = document.getElementById("forwardButton");
let pageDiv = document.getElementById("page");

//way to allow page counter to increase
let pageState = "end";

//different page arrays
let pageArray = [];
let subPageArray1 = [];
let subPageArray2 = [];
let pagesC1E1 = [];
let pagesC2E2 = [];

//page counters
let currentPage = 0;
let subPage = 0;
let c1E1Counter = 0;
let c1E2Counter = 0;

//ackBtn.addEventListener('click', previousPage);
//forwardBtn.addEventListener('click', nextPage);

class page {
    constructor(sentance,character,background) {
        this.sentance = sentance;
        this.character = character;
        this.background = background;
        //this.animation = animation;
        
    }
}

/*
* class for animations
*/

//beginning of each page
pageArray[0] = new page("Bumblebee wants to find it's favorite flower","bee.png","beeHome.png");
pageArray[1] = new page("These flowers are hard to find but bumblebee thinks it is worth it!","bee.png","beeHome.png");
pageArray[2] = new page("Bumblebee searches in the forest","bee.png","beeHome.png");
pageArray[3] = new page("Bumblebee searches by the river","bee.png","beeHome.png");
pageArray[4] = new page("Bumblebee searches in a neighborhood","bee.png","beeHome.png");
pageArray[5] = new page("A human walks over, looks shocked then runs away","bee.png","beeHome.png");

// neighborhood
subPageArray1[0] = new page("Bumblebee has flown too far without eating and is getting tired", "bee.png", "neighborhood.png");
subPageArray1[1] = new page("Bumblebee decide to rest","bee.png","neighborhood.png");

//neighborhood zoomed
subPageArray2[0] = new page("Bumblebee knows most people are afraid of bumblebees","bee.png","zoomedNeighborhood.png");
subPageArray2[1] = new page("Then bumblebee sees the human return","bee.png","zoomedNeighborhood.png");
subPageArray2[2] = new page("Bumblebee sees the human place a spoon nearby","bee.png","zoomedNeighborhood.png");
subPageArray2[3] = new page("Sweet water! This is just what bumblebee needed!","bee.png","zoomedNeighborhood.png");
subPageArray2[4] = new page("Bumblebee now has plenty of energy","bee.png","zoomedNeighborhood.png");
subPageArray2[5] = new page("The human waves at the bumblebee and bumblebee waves back","bee.png","zoomedNeighborhood.png");

//c1 ending 1
pagesC1E1[0] = new page("Bumblebee hurries home, going straight there!","bee.png","forest.png");
pagesC1E1[1] = new page("Bumblebee is finally home and ready to nap","bee.png","forest.png");
pagesC1E1[2] = new page("Bumblebee heads to bed to get some rest","bee.png","forest.png");
pagesC1E1[3] = new page("Bumblebee is comfortable and starts to fall asleep","bee.png","forest.png");



//had to add that each button calls the function from the HTML side because it is constantly remade
function nextPage() {
    //page turning animation when currentPage changes
    //currentPage.addEventListener('change', SOMEANIMATION)
    if (currentPage == 0) {
        let pageContent = "";
        pageContent += '<img class="bg" src="img/backgrounds/beehouseoutside.png">';
        pageContent += '<div class="sentance"> <h1>' + pageArray[currentPage].sentance + '</h1> </div>';
        pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
        pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
        pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';
        /*
        * thought bumble animation
        * leaving house animation
        */

        pageDiv.innerHTML = pageContent;
        pageState = "end";
        
    }
    if (currentPage == 1) {
        let pageContent = "";
        pageContent += '<img class="bg" src="img/backgrounds/beehouseoutside.png">';
        pageContent += '<div class="sentance">';
        pageContent += '<h1>' + pageArray[currentPage].sentance + '</h1>';
        pageContent += ' </div>';
        pageContent += '<img id="bee" src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
        pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
        pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';
        
        /*
        * leaving page animation
        */


        pageDiv.innerHTML = pageContent;
        pageState = "end";
        document.getElementById("bee").classList.add("beeFly");
        
    }
    if (currentPage == 2) {
        let pageContent = "";
        pageContent += '<img class="bg" src="img/backgrounds/forest.png">';
        pageContent += '<div class="sentance">';
        pageContent += '<h1>' + pageArray[currentPage].sentance + '</h1>';
        pageContent += ' </div>';
        pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
        pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
        pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';

        pageDiv.innerHTML = pageContent;
        pageState = "end";
    }
    if (currentPage == 3) {
        let pageContent = "";
        let pageIH = "";
        pageContent += '<img class="bg" src="img/backgrounds/forest.png">';
        pageContent += '<div class="sentance">';
        pageContent += '<h1>' + pageArray[currentPage].sentance + '</h1>';
        pageContent += ' </div>';
        pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
        pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
        pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';

        pageDiv.innerHTML = pageContent;
        pageState = "end";
        
    }
    if (currentPage == 4) {
        let pageContent = "";
        pageContent += '<img class="bg" src="img/backgrounds/forest.png">';
        pageContent += '<div class="sentance">';
        pageContent += '<h1>' + pageArray[currentPage].sentance + '</h1>';
        pageContent += ' </div>';
        pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
        pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
        pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';

        pageDiv.innerHTML = pageContent;
        pageState = "mid";
        if (subPage == 1 ) {
            let pageContent = "";
            pageContent += '<img class="bg" src="img/backgrounds/forest.png">';
            pageContent += '<div class="sentance">';
            pageContent += '<h1>' + subPageArray1[0].sentance + '</h1>';
            pageContent += ' </div>';
            pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
            pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
            pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';
            
            //dizzy animation

            pageDiv.innerHTML = pageContent;
            pageState = "mid";
        }
        if (subPage == 2 ) {
            let pageContent = "";
            pageContent += '<img class="bg" src="img/backgrounds/forest.png">';
            pageContent += '<div class="sentance">';
            pageContent += '<h1>' + subPageArray1[1].sentance + '</h1>';
            pageContent += ' </div>';
            pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
            pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
            pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';
            
            //lands on ground animation

            pageDiv.innerHTML = pageContent;
            subPage = 0;
            pageState = "end";
        }
        
        
    }
    if (currentPage == 5) {
        let pageContent = "";
        pageContent += '<img class="bg" src="img/backgrounds/forest.png">';
        pageContent += '<div class="sentance">';
        pageContent += '<h1>' + pageArray[currentPage].sentance + '</h1>';
        pageContent += ' </div>';
        pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
        pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
        pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';

        pageDiv.innerHTML = pageContent;
        pageState = "mid";
        if (subPage == 1 ) {
            let pageContent = "";
            pageContent += '<img class="bg" src="img/backgrounds/forest.png">';
            pageContent += '<div class="sentance">';
            pageContent += '<h1>' + subPageArray2[0].sentance + '</h1>';
            pageContent += ' </div>';
            pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
            pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
            pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';
            
            //dizzy animation

            pageDiv.innerHTML = pageContent;
            pageState = "mid";
        }
        if (subPage == 2 ) {
            let pageContent = "";
            pageContent += '<img class="bg" src="img/backgrounds/forest.png">';
            pageContent += '<div class="sentance">';
            pageContent += '<h1>' + subPageArray2[1].sentance + '</h1>';
            pageContent += ' </div>';
            pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
            pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
            pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';
            
            //dizzy animation

            pageDiv.innerHTML = pageContent;
            pageState = "mid";
        }
        if (subPage == 3 ) {
            let pageContent = "";
            pageContent += '<img class="bg" src="img/backgrounds/forest.png">';
            pageContent += '<div class="sentance">';
            pageContent += '<h1>' + subPageArray2[2].sentance + '</h1>';
            pageContent += ' </div>';
            pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
            pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
            pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';
            
            //dizzy animation

            pageDiv.innerHTML = pageContent;
            pageState = "mid";
        }
        if (subPage == 4 ) {
            let pageContent = "";
            pageContent += '<img class="bg" src="img/backgrounds/forest.png">';
            pageContent += '<div class="sentance">';
            pageContent += '<h1>' + subPageArray2[3].sentance + '</h1>';
            pageContent += ' </div>';
            pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
            pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
            pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';
            
            //dizzy animation

            pageDiv.innerHTML = pageContent;
            pageState = "mid";
        }
        if (subPage == 5 ) {
            let pageContent = "";
            pageContent += '<img class="bg" src="img/backgrounds/forest.png">';
            pageContent += '<div class="sentance">';
            pageContent += '<h1>' + subPageArray2[4].sentance + '</h1>';
            pageContent += ' </div>';
            pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
            pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
            pageContent += '<button id="forwardButton" onclick="nextPage()" class="forward fa fa-angle-double-right"></button>';
            
            //dizzy animation

            pageDiv.innerHTML = pageContent;
            pageState = "mid";
        }
        if (subPage == 6 ) {
            let pageContent = "";
            pageContent += '<img class="bg" src="img/backgrounds/forest.png">';
            pageContent += '<div class="sentance">';
            pageContent += '<h1>' + subPageArray2[5].sentance + '</h1>';
            pageContent += ' </div>';
            pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
            pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
            pageContent += '<button id="forwardButton" onclick="optionsC1E()" class="forward fa fa-angle-double-right"></button>';
            
            //lands on ground animation

            pageDiv.innerHTML = pageContent;
            subPage = 0;
            pageState = "end";
        }
        
    }
    //Check what stage the page is in to add to the counters
    if (pageState == "end") {
        console.log(currentPage);
        currentPage++;
        console.log(currentPage);
    }
    if (pageState == "mid") {
        console.log(currentPage);
        subPage++;
        console.log(currentPage);
    }
    
}

function previousPage() {
    if (currentPage == 0 ) {
        alert("Already at the beginning");
    }
}

function optionsC1E() {
    let pageContent = "";
    pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
    pageContent += '<button id="c1EOption1" onclick="optionC1End1()" class="option1">Head home for a nap!</button>';
    pageContent += '<button id="c1EOption2" onclick="optionC1End2()" class="option2">Flower field for food!</button>';
            
    //lands on ground animation

    pageDiv.innerHTML = pageContent;
}

function optionC1End1() {
    let pageContent = "";
    pageContent += '<div class="sentance">';
    pageContent += '<h1>' + pagesC1E1[0].sentance + '</h1>';
    pageContent += ' </div>';
    pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
    pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
    pageContent += '<button id="forwardButton" onclick="optionC1End1()" class="forward fa fa-angle-double-right"></button>';
        
    pageDiv.innerHTML = pageContent;
    pageState = "mid";
    if (c1E1Counter == 1) {
        let pageContent = "";
        pageContent += '<div class="sentance">';
        pageContent += '<h1>' + pagesC1E1[c1E1Counter].sentance + '</h1>';
        pageContent += ' </div>';
        pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
        pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
        pageContent += '<button id="forwardButton" onclick="optionC1End1()" class="forward fa fa-angle-double-right"></button>';

        pageDiv.innerHTML = pageContent;
        
    }
    if (c1E1Counter == 2 ) {
        let pageContent = "";
        pageContent += '<div class="sentance">';
        pageContent += '<h1>' + pagesC1E1[c1E1Counter].sentance + '</h1>';
        pageContent += ' </div>';
        pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
        pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
        pageContent += '<button id="forwardButton" onclick="optionC1End1()" class="forward fa fa-angle-double-right"></button>';

        pageDiv.innerHTML = pageContent;
    }
    if (c1E1Counter == 3) {
        let pageContent = "";
        pageContent += '<div class="sentance">';
        pageContent += '<h1>' + pagesC1E1[c1E1Counter].sentance + '</h1>';
        pageContent += ' </div>';
        pageContent += '<img src="img/chars/bee.png" class="charBumblebee" alt="Bumblebee">';
        pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
        pageContent += '<button id="forwardButton" onclick="optionC1End1()" class="forward fa fa-angle-double-right"></button>';

        pageDiv.innerHTML = pageContent;
        pageState = "end";
    }
    
    //Check what stage the page is in to add to the counters
    if (pageState == "end") {
        //currentPage++;
        //since story ended maybe some kind of way to go back to char selector/startpage
    }
    if (pageState == "mid") {
        c1E1Counter++;
    }
}

function optionC1End2() {
    
}