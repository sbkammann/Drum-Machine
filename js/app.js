// User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
// User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).
// User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

const Q = document.getElementById('Q');
const W = document.getElementById('W');
const E = document.getElementById('E');
const A = document.getElementById('A');
const S = document.getElementById('S');
const D = document.getElementById('D');
const Z = document.getElementById('Z');
const X = document.getElementById('X');
const C = document.getElementById('C');

const keyBox =  document.getElementById('keyBox');
const playObj = {Q, W, E, A, S, D, Z, X, C};
const drumPadArr = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
let isReleased = true;
keyBox.addEventListener('click', event => playObj[event.target.firstElementChild.id].play()); //console.log(event.target.firstElementChild.id)
window.addEventListener('keydown', buttonPress.bind(this, event) ); //playObj[String.fromCharCode(event.keyCode).toUpperCase()].play()
window.addEventListener('keyup', buttonRelease.bind(this, event) )
window.addEventListener('blur', removePressedBtnClass);
function buttonPress(event){
  if(drumPadArr.includes(String.fromCharCode(this.event.keyCode).toUpperCase())){
    playObj[String.fromCharCode(this.event.keyCode).toUpperCase()].play()
    const drumPad = document.getElementById(`${String.fromCharCode(this.event.keyCode).toUpperCase()}`).parentElement.classList;
    drumPad.toggle('pressedBtn');
    isReleased = false;
  }
}
function buttonRelease(event){

  if(drumPadArr.includes(String.fromCharCode(this.event.keyCode).toUpperCase())){
    console.log(String.fromCharCode(this.event.keyCode))
    const drumPad1 = document.getElementById(`${String.fromCharCode(this.event.keyCode).toUpperCase()}`).parentElement.classList;
    drumPad1.toggle('pressedBtn');
  }
}
function removePressedBtnClass(){
  console.log('blur')
  drumPadArr.forEach((el)=>document.getElementById(`${el}`).parentElement.classList.remove('pressedBtn'))
}
