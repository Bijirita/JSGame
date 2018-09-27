var hero = ['hint', 'hstr', 'hcash']
var bully = ['bint', 'bstr', 'bcash']
var day = ["Monday", "Teusday", "Wednesday", "Thursday", "Friday"];
var dayI = 0;
var library = document.getElementById('Library');
var gym = document.getElementById('Gym');
var work = document.getElementById('Work');
var fight = document.getElementById('Fight');
var textbox = document.getElementById('text-box');
var textp = document.querySelector('#text-box > p');
var next = document.querySelector('#text-box > button');


library.addEventListener('click', runLibrary);
gym.addEventListener('click',runGym);
work.addEventListener('click', runWork);
fight.addEventListener('click', runFight);




function runLibrary () {
    console.log('checkpoint 1');
    textp.parentNode.removeChild(textp);
    console.log('checkpoint 2')
    var actionLibrary = document.createElement('p');
    actionLibrary.textContent = "you go do the library thing"
    textbox.appendChild(actionLibrary);
    library.removeEventListener('click', runLibrary);
    actionLibrary.appendChild(next);
    next.addEventListener('click', proceedStory);
    next.addEventListener('click', newDay);
}

function proceedStory () {
    var textp = document.querySelector('#text-box > p');
    console.log('checkpoint 4');
    textbox.removeChild(textp);
    console.log('checkpoint 5');


}

function newDay () {
    console.log(dayI);
    for (i = 0; dayI < 4; i++ ) {
        var dayI = dayI[i];
    }
}