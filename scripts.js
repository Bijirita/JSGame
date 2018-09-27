var hero = ['hint', 'hstr', 'hcash']
var bully = ['bint', 'bstr', 'bcash']
var library = document.getElementById('Library');
var gym = document.getElementById('Gym');
var work = document.getElementById('Work');
var fight = document.getElementById('Fight');
var textbox = document.getElementById('text-box');
var textp = document.querySelector('#text-box > p');
var next = document.querySelector('#text-box > button');
var day = ["Monday", "Teusday", "Wednesday", "Thursday", "Friday"];

// library.onclick = test;
library.addEventListener('click', test);

function test () {
    console.log('checkpoint 1');
    textp.parentNode.removeChild(textp);
    console.log('checkpoint 2')
    var actionLibrary = document.createElement('p');
    actionLibrary.textContent = "you go do the library thing"
    textbox.appendChild(actionLibrary);
    library.removeEventListener('click', test);
    actionLibrary.appendChild(next);
    next.addEventListener('click', proceedStory);
}


function proceedStory () {
        var textp = document.querySelector('#text-box > p');
        console.log('checkpoint 4');
        textbox.removeChild(textp);
        console.log('checkpoint 5');
}