//----------------------Global Variables----------------//

var hero = [0, 0, 0];
var bully = [1, 1, 1];
var storyIndex = 0;
var day = ["Monday", "Teusday", "Wednesday", "Thursday", "Friday"];
var dayIndex = 0;
var todayIs = document.getElementById('TodayIs');
var library = document.getElementById('Library');
var gym = document.getElementById('Gym');
var work = document.getElementById('Work');
var fight = document.getElementById('Fight');
var textbox = document.getElementById('text-box');
var textp = document.querySelector('#text-box > p');
var next = document.querySelector('#text-box > button');


//------------------------------------Story--------------------------------------//

function story () {
    var storyText = ["Bully: I'm kicking your ass on Friday.", "How do you Proceed?"];
    if (storyIndex < storyText.length-1) {
        storyIndex = ++storyIndex;        
        var next = document.querySelector('#text-box > button');
        var textp = document.querySelector('#text-box > p');
        var textbox = document.getElementById('text-box');
        textbox.removeChild(next);
        textbox.removeChild(textp);
        var textp = document.createElement('p')
        textp.textContent = storyText[storyIndex];
        textbox.appendChild(textp)
        var next = document.createElement('button');
        next.textContent = 'Next';
        textbox.appendChild(next);
        next.addEventListener('click', story);
    } else if (storyIndex === 1) {
        var textbox = document.querySelector('#text-box > p');
        var textp = document.querySelector('#text-box > p');
        var next = document.querySelector('#textp > button');
        textp.removeChild(next);
        throwdown.textContent = "Let's go right now!";
        textp.appendChild(throwdown);
        throwdown.addEventListener = runFight;
        storyIndex = ++storyIndex;
        next.addEventListener('click', story);
    }
    else {
        begin();
    }
    // for (i = 0; storyIndex < storyText.length; i++) {
    //     storyIndex = storyIndex += i;
    
    // textbox.removeChild(next);
    // var next = document.createElement('button');
    // next.textContent = Next;
    // 
    // 
    // 
    // }
}

next.addEventListener('click', story);

function begin () {

}
//------------------------Global Button Eventlistners----------------------//

library.addEventListener('click', upgradeLibrary);
gym.addEventListener('click', upgradeGym);
work.addEventListener('click', upgradeWork);
library.addEventListener('click', runLibrary);
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
    next.addEventListener('click', newDay);
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

function fridayFight () {

}
//--------------------Upgrade Functions---------------//

function upgradeLibrary () {
    console.log(hero[0]);
    hero[0] = hero[0] +=2;
    library.removeEventListener('click', upgradeLibrary);
    console.log(hero[0]);
}

function upgradeGym () {
    console.log(hero[1]);
    hero[1] = hero[1] +=2;
    console.log(hero[1]);
}

function upgradeWork () {
    console.log(hero[2]);
    hero[2] = hero[2] +=2;
    console.log(hero[2]);
}


//---------------------New Day Functions------------------->



function newDay () {
    dayIndex = ++dayIndex;
    if (dayIndex === day.length) {
        fridayFight();
    }
    console.log(dayIndex);
    var textp = document.querySelector('#text-box > p');
    var next = document.querySelector('#text-box > button');
    console.log("dayIndex " + dayIndex);
    textbox.removeChild(textp);
    textbox.removeChild(next);
    var newDayText = document.createElement('p');
    newDayText.textContent = 'Today is ' + day[dayIndex] + ' how will you spend your day?';
    textbox.appendChild(newDayText);

}

//if statement
//incremetn counter
//check if counter for day
