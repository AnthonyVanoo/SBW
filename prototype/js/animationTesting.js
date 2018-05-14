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

document.getElementById("jumpBtn").addEventListener('click', jumpAnimtion);

function jumpAnimtion() {
    document.getElementById("bush").animate([
        {transform: 'skew(0deg, 0deg)'},
        {transform: 'skew(10deg, 10deg)'},
        {transform: 'skew(0deg, 0deg)'},
    ], {
        duration: 500,
        iterations: 1
    });
    document.getElementById("rabbit").style.animation = "jump .8s forwards";
}
/*
https://developer.mozilla.org/en-US/docs/Web/API/Element/animate

document.getElementById("tunnel").animate([
  { transform: 'translate3D(0, 0, 0)' }, 
  { transform: 'translate3D(0, -300px, 0)' }
], {
  duration: 1000,
  iterations: Infinity
})

var aliceTumbling = [
  { transform: 'rotate(0) translate3D(-50%, -50%, 0', color: '#000' }, 
  { color: '#431236', offset: 0.3},
  { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
];

var aliceTiming = {
  duration: 3000,
  iterations: Infinity
}

document.getElementById("alice").animate(
  aliceTumbling, 
  aliceTiming
)
*/