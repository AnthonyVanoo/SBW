/*
 * start page
 */


/* base declarations */
let main = document.getElementById("mainContent");
let char1 = document.getElementById("c1");
let char2 = document.getElementById("c2");
let char3 = document.getElementById("c3");
let charInfo = document.getElementById("charInfo");


// event listeners
char1.addEventListener('click', function(){charSelect(1);} );
char2.addEventListener('click', function(){charSelect(2);} );
char3.addEventListener('click', function(){charSelect(3);} );

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
        options += '<h3 id="selInfo">Where to?</h3>';
        options += '<div id="opt1" class="optionsContainer" style=" visibility: hidden;">';
        options += '<img src="img/chars/bee.png">';
        options += '<a href="storypage.html" class="storySelection1">';
        options += '<h2>Favorite Flower</h2>';
        options += '</a>';
        options += '<a href="storypage.html" id="opt2" class="storySelection2" style="visibility: hidden;">';
        options += '<h2>Flower Field</h2>';
        options += '</a>';
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
                    document.getElementById("opt2").style.opacity = "0." + opas;
                    document.getElementById("opt2").style.visibility = "visible";
                    
                }
            }
        }
    }
}
