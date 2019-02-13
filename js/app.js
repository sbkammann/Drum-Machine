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

keyBox.addEventListener('click', (event)=> Q.play()); //console.log(event.target.firstElementChild.id)
