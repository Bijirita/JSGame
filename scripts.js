var hero = ['hint', 'hstr', 'hcash']
var bully = ['bint', 'bstr', 'bcash']
var library = document.querySelector('#Library');
var gym = document.querySelector('#Gym');
var work = document.querySelector('#Work');
var fight = document.querySelector('#Fight');
var textbox = document.querySelector('#text-box');
var textp = document.querySelector('#text-box > p');


library.onclick = test;

function test () {
    console.log('checkpoint,1');
    textp.parentNode.removeChild(textp);
    console.log('checkpoint,2')
    var actionLibrary = document.createElement('p');
    actionLibrary.textContent = "you go do the library thing"
    textbox.appendChild(actionLibrary);
}
