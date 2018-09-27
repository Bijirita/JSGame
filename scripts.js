//----------------------Global Variables----------------//

var hero = [0, 0, 0]
var bully = [1, 1, 1]
var day = ["Monday", "Teusday", "Wednesday", "Thursday", "Friday"];
var dayI = 0;
var library = document.getElementById('Library');
var gym = document.getElementById('Gym');
var work = document.getElementById('Work');
var fight = document.getElementById('Fight');
var textbox = document.getElementById('text-box');
var textp = document.querySelector('#text-box > p');
var next = document.querySelector('#text-box > button');

//------------------------Global Button Eventlistners----------------------//

library.addEventListener('click', runLibrary);
library.addEventListener('click', upgradeLibrary);
gym.addEventListener('click',runGym);
work.addEventListener('click', runWork);
fight.addEventListener('click', runFight);

//----------------------Functions------------------------//
function runLibrary () {
    console.log('checkpoint 1');
    textp.parentNode.removeChild(textp);
    console.log('checkpoint 2')
    var actionLibrary = document.createElement('p');
    actionLibrary.textContent = "you go do the library thing"
    textbox.appendChild(actionLibrary);
    library.removeEventListener('click', runLibrary);
    textbox.appendChild(next);
    next.addEventListener('click', proceedStoryLibrary);
    // next.addEventListener('click', newDay);
    console.log('checkpoint 3');
}

function runGym () {

}

function runWork () {

}

function runFight () {

}


function proceedStoryLibrary () {
    var textp = document.querySelector('#text-box > p');
    console.log('checkpoint 4');
    textbox.removeChild(textp);
    console.log('checkpoint 5');
    var brainText = document.createElement('p');
    brainText.textContent = "you feel your brain foldy fold";
    textbox.appendChild(brainText);
    textbox.appendChild(next);
    next.onclick = newDay;
}

newDay();

//--------------------Upgrade Functions---------------//

function upgradeLibrary () {
    console.log(hero[0]);
    hero[0] = hero[0] +=2;
    console.log(hero[0]);
}



//---------------------New Day Functions------------------->

function newDay () {
    console.log(dayI);
    for (i = 0; dayI < 4; i++ ) {
        var dayI = dayI[i];
    }
}


//if statement
//incremetn counter
//check if counter for day
