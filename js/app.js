

const display = document.getElementById('display');

const  Q = {
  audioClip: document.getElementById('Q'),
  text: 'Heater-1'
}
const W = {
  audioClip: document.getElementById('W'),
  text: 'Heater-2'
}
const E = {
  audioClip: document.getElementById('E'),
  text: 'Heater-3'
}
const A = {
  audioClip: document.getElementById('A'),
  text: 'Heater-4'
}
const S = {
  audioClip: document.getElementById('S'),
  text: 'Clap'
}
const D = {
  audioClip: document.getElementById('D'),
  text: 'Open-HH'
}
const Z = {
  audioClip: document.getElementById('Z'),
  text: 'Kick-n\'-Hat'
}
const X = {
  audioClip: document.getElementById('X'),
  text: 'Kick'
}
const C = {
  audioClip: document.getElementById('C'),
  text: 'Closed-HH'
}


const keyBox =  document.getElementById('keyBox');
const playObj = {Q, W, E, A, S, D, Z, X, C};
const drumPadArr = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
keyBox.addEventListener('mousedown', buttonPress.bind(this, event)); //console.log(event.target.firstElementChild.id) playObj[event.target.firstElementChild.id].audioClip.play()
keyBox.addEventListener('mouseup', buttonRelease.bind(this, event));
window.addEventListener('keydown', buttonPress.bind(this, event) ); //playObj[String.fromCharCode(event.keyCode).toUpperCase()].play()
window.addEventListener('keyup', buttonRelease.bind(this, event) )
window.addEventListener('blur', removePressedBtnClass);

function buttonPress(event){

  if(drumPadArr.includes(String.fromCharCode(this.event.keyCode).toUpperCase())){
    playObj[String.fromCharCode(this.event.keyCode).toUpperCase()].audioClip.play()
    const drumPad = document.getElementById(`${String.fromCharCode(this.event.keyCode).toUpperCase()}`).parentElement.classList;
    drumPad.toggle('pressedBtn');
    display.classList.remove('displayNotUsed');
    display.classList.add('displayInUse')
    display.innerHTML = playObj[String.fromCharCode(this.event.keyCode).toUpperCase()].text;
  }
}
function buttonRelease(event){

  if(drumPadArr.includes(String.fromCharCode(this.event.keyCode).toUpperCase())){
    // console.log(String.fromCharCode(this.event.keyCode))
    const drumPad1 = document.getElementById(`${String.fromCharCode(this.event.keyCode).toUpperCase()}`).parentElement.classList;
    drumPad1.toggle('pressedBtn');
  }
}
function removePressedBtnClass(){
  console.log('blur')
  drumPadArr.forEach((el)=>document.getElementById(`${el}`).parentElement.classList.remove('pressedBtn'))
}
