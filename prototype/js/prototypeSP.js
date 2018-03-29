/* 
* story page
*/

let backBtn = document.getElementById("backButton");
let forwardBtn = document.getElementById("forwardButton");
let pageDiv = document.getElementById("page");
let currentPage = 0;
let pageArray = [];

backBtn.addEventListener('click', previousPage);
forwardBtn.addEventListener('click', nextPage);

class page {
    constructor(sentance,character,background) {
        this.sentance = sentance;
        this.character = character;
        this.background = background;
        this.back = "??";
        this.forward = "??";
    }
}

pageArray[0] = new page("Bumblebee decided to eat his favorite flower","simpleBee.png","beeHome.png");

function nextPage() {
    
    if (currentPage == 0) {
        let pageContent = "";
        let pageIH = "";
        pageContent += '<div class="sentance">';
        pageContent += '<h1>' + pageArray[currentPage].sentance + '</h1>';
        pageContent += ' </div>';
        pageContent += '<img src="img/chars/simpleBee.png" class="charBumblebee" alt="Bumblebee">';
        pageContent += '<button id="backButton" class="back fa fa-angle-double-left"></button>';
        pageContent += '<button id="forwardButton" class="forward fa fa-angle-double-right"></button>';

        pageDiv.innerHTML = pageContent
        currentPage++;
    }
}

function previousPage() {
    if (currentPage == 0 ) {
        alert("cant go back");
    }
}