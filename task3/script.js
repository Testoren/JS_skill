const trafficLightEl = document.querySelector('#trafficLight');
const light = document.querySelector('.border')
const text_color = document.querySelector('p')
const text_colorB = document.querySelector('b')

function makeGreen() {
    trafficLightEl.style.background = ('green');
    light.style.boxShadow = ('0 0 15px green');
    text_color.style.color = ('green')
    text_colorB.style.color = ('green')
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl.style.background = ('Yellow');
    light.style.boxShadow = ('0 0 15px Yellow');
    text_color.style.color = ('Yellow')
    text_colorB.style.color = ('Yellow')
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl.style.background = ('Red');
    light.style.boxShadow = ('0 0 15px Red');
    text_color.style.color = ('Red')
    text_colorB.style.color = ('Red')
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);
