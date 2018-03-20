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

