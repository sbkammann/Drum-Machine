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

keyBox.addEventListener('click', event => playObj[event.target.firstElementChild.id].play()); //console.log(event.target.firstElementChild.id)
window.addEventListener('keypress', buttonPress.bind(this, event) ); //playObj[String.fromCharCode(event.keyCode).toUpperCase()].play()

// var alertText = function(text) {
// var event = this.event;
// alert(text);
// };

//document.getElementById('someelem').addEventListener('click', alertText.bind(this, 'hello'));
function buttonPress(event){
  // playObj[String.fromCharCode(event.keyCode).toUpperCase()].play()
  console.log(this.event.keyCode);
  //console.log(document.getElementById(`${String.fromCharCode(this.event.keyCode).toUpperCase()}`)); //.parentElement.classList.toggle('pressedBtn');
  const drumPad = document.getElementById(`${String.fromCharCode(this.event.keyCode).toUpperCase()}`).parentElement.classList
  drumPad.toggle('pressedBtn');
  setTimeout( ()=>  drumPad.toggle('pressedBtn') , 200);
}
// console.log(String.fromCharCode(event.keyCode).toUpperCase())
