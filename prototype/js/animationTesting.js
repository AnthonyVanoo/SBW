/*<button id="hoverBtn">Hover</button>
        <button id="flyBtn">Fly</button>
        <button id="enterBtn">enter</button>
        <button id="landBtn">Land</button>
        <button id="jumpBtn">jump</button>
*/
document.getElementById("hoverBtn").addEventListener('click', changeToHover);

function changeToHover() {
    document.getElementById("bumblebee").className = "beeHover";
}

document.getElementById("flyBtn").addEventListener('click', changeToFly);

function changeToFly() {
    
    document.getElementById("bumblebee").className = "beeFly";
}

document.getElementById("enterBtn").addEventListener('click', changeToEnter);

function changeToEnter() {
    
    document.getElementById("bumblebee").className = "beeEnter";
}