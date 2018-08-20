/*
 * start page
 */


/* base declarations */
let main = document.getElementById("mainContent");
let char1 = document.getElementById("c1");
let char2 = document.getElementById("c2");
let char3 = document.getElementById("c3");
let charInfo = document.getElementById("charInfo");
let soundToggleBtn = document.getElementById("soundToggleButton");
let soundBanIcon = document.getElementById("banIcon");
let siteAudio = document.getElementById("songAudio");
let sound = false;


// event listeners
char1.addEventListener('click', function(){charSelect(1);} );
char2.addEventListener('click', function(){charSelect(2);} );
char3.addEventListener('click', function(){charSelect(3);} );
soundToggleBtn.addEventListener('click', soundToggle);

function charSelect(char) {
    if ( char == 1 ) {
        /* 
        * animate the char selected to fade
        * animate the actual char to appear
        * add selected chars story lines
        */
        fade();
        function fade() {
            let opas = 99;
            let id = setInterval(frame, 15);
            function frame() {
                if (opas == 10) {
                    clearInterval(id);
                    char1.style.visibility = "hidden";
                    char2.style.visibility = "hidden";
                    char3.style.visibility = "hidden";
                    charInfo.textContent = "Pick a start";
                    charOptions(1);
                } else {
                    opas--; 
                    char1.style.opacity = "0." + opas;
                    char2.style.opacity = "0." + opas;
                    char3.style.opacity = "0." + opas;
                }
            }
        }
        
    } else if ( char == 2 ) {
        alert("You selected character" + char )
    } else {
        alert("You selected character" + char )
    }
}

function charOptions(char) {
    if (char == 1 ) {
        let options = "";
        
        options += '<div class="title">';
        options += '<h1>Start Your Story</h1>';
        options += '</div>';
        options += '<div id="opt1" class="optionsContainer" style=" visibility: hidden;">';
        options += '<img src="img/chars/bee.png">';
        options += '<a href="storyBeeEN.html" class="storySelection1">';
        options += '<button class="btn btn-dark"><h2>Bumblebee&#39s Story</h2></button>';
        options += '</a>';
        options += '<i class="cancel fas fa-times fa-2x"></i>';
        options += '</div>';
        
        main.innerHTML = options;
        
        appear();
        function appear() {
            let opas = 10;
            let inval2 = setInterval(frame, 15);
            function frame() {
                if (opas == 99) {
                    clearInterval(inval2);
                    
                } else {
                    opas++;
                    document.getElementById("opt1").style.opacity = "0." + opas;
                    document.getElementById("opt1").style.visibility = "visible";
                    
                }
            }
        }
    }
}

function soundToggle() {
    if (!soundToggle) {
        soundToggle = true;
        soundBanIcon.style.visibility = "visible";
        siteAudio.muted = true;
        
    } else {
        soundToggle = false;
        soundBanIcon.style.visibility = "hidden";
        siteAudio.muted = false;
    }
    console.log(soundToggle);
}