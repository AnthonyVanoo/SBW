/*
 * start page
 */
/* base declarations */
let char1 = document.getElementById("c1");
let char2 = document.getElementById("c2");
let char3 = document.getElementById("c3");

// event listeners
char1.addEventListener('click', function(){charSelect(1);} );
char2.addEventListener('click', function(){charSelect(2);} );
char3.addEventListener('click', function(){charSelect(3);} );

function charSelect(x) {
    if ( x == 1 ) {
        /* 
        * animate the char selected to fade
        * animate the actual char to appear
        * add selected chars story lines
        */
        fade();
        function fade() {
            let opas = 99;
            let id = setInterval(frame, 1);
            function frame() {
                if (opas == 0) {
                    clearInterval(id);
                } else {
                    opas--; 
                    char1.style.opacity = "0." + opas;
                }
            }
        }
        
    } else if ( x == 2 ) {
        alert("You selected character" + x )
    } else {
        alert("You selected character" + x )
    }
}

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
    if (currentPage = 0) {
        currentPage++;
        let pageContent = "";
        let pageIH = "";
        pageContent += '<div class="sentance">';
        pageContent += '<h1>' + pageArray[currentPage].sentance + '</h1>';
        pageContent += ' </div>';
        pageContent += '<img src="img/chars/simpleBee.png" class="charBumblebee" alt="Bumblebee">';
        pageContent += '<button id="backButton" class="back fa fa-angle-double-right"></button>';
        pageContent += '<button id="forwardButton" class="forward fa fa-angle-double-left"></button>';

        pageIH.innerHTML = pageContent;
        pageDiv.appendChild(pageIH);

    }
}
