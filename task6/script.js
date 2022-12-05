const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');
const light = document.querySelector('.border')
const textСolor = document.querySelector('p')
const textСolorB = document.querySelector('b')

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('white');
    trafficLightEl3.style.background = ('white');
    trafficLightEl1.style.boxShadow = ('0 0 15px green');
    light.style.boxShadow = ('0 0 15px green');
    textСolorB.style.color = ('green')
    textСolor.style.color = ('green')
    trafficLightEl1.removeEventListener('click', makeGreen);
    trafficLightEl2.removeEventListener('click', makeGreen);
    trafficLightEl3.removeEventListener('click', makeGreen);
    trafficLightEl1.addEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', makeYellow);
    trafficLightEl3.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightEl1.style.background = ('white');
    trafficLightEl2.style.background = ('Yellow');
    trafficLightEl3.style.background = ('white');
    trafficLightEl2.style.boxShadow = ('0 0 15px Yellow');
    light.style.boxShadow = ('0 0 15px Yellow');
    textСolorB.style.color = ('Yellow')
    textСolor.style.color = ('Yellow')
    trafficLightEl1.removeEventListener('click', makeYellow);
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl3.removeEventListener('click', makeYellow);
    trafficLightEl1.addEventListener('click', makeRed);
    trafficLightEl2.addEventListener('click', makeRed);
    trafficLightEl3.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl1.style.background = ('white');
    trafficLightEl2.style.background = ('white');
    trafficLightEl3.style.background = ('Red');
    trafficLightEl3.style.boxShadow = ('0 0 15px Red');
    light.style.boxShadow = ('0 0 15px Red');
    textСolorB.style.color = ('Red')
    textСolor.style.color = ('Red')
    trafficLightEl1.removeEventListener('click', makeRed);
    trafficLightEl2.removeEventListener('click', makeRed);
    trafficLightEl3.removeEventListener('click', makeRed);
    trafficLightEl1.addEventListener('click', makeGreen);
    trafficLightEl2.addEventListener('click', makeGreen);
    trafficLightEl3.addEventListener('click', makeGreen);
}

trafficLightEl1.addEventListener('click', makeGreen);
trafficLightEl2.addEventListener('click', makeYellow);
trafficLightEl3.addEventListener('click', makeRed);

