//----------------------Global Variables----------------//

var hero = [0, 0, 0];
var heroIndex = 0;
var bully = [1, 1, 1];
var storyIndex = 0;
var storyText = ["You're a 4th grader chill'n at recess when that bully walks up to you.", "Bully: I'm kicking your ass on Friday.", "How do you Proceed?"];
var dayIndex = 0;
var day = ["Monday", "Teusday", "Wednesday", "Thursday", "Friday"];
var todayIs = document.getElementById('TodayIs');
var library = document.getElementById('Library');
var gym = document.getElementById('Gym');
var work = document.getElementById('Work');
var fight = document.getElementById('Fight');
var textbox = document.getElementById('text-box');
var textp = document.querySelector('#text-box > p');
var next = document.getElementById('Next');

//------------------------------------Story--------------------------------------//

     function story () {
       
        if (storyIndex < storyText.length-1) {
            var next = document.getElementById('Next');
            var textp = document.querySelector('#text-box > p');
            textp.textContent = storyText[storyIndex];
            console.log(storyIndex);
            storyIndex = ++storyIndex;
            console.log(storyIndex);
            next.addEventListener('click', story); 
            console.log('check1');
        
        }else if (storyIndex === 2) {
            console.log('check2');
            var textp = document.querySelector('#text-box > p');
            var next = document.getElementById('Next');
            var throwdown = document.createElement('button');
            throwdown.textContent = '"Leeeroooy, Jeeenkiiins!"';
            textp.textContent = storyText[storyIndex];
            textp.appendChild(throwdown);
            storyIndex = ++storyIndex;
            throwdown.addEventListener ('click', runFight);
            next.addEventListener('click', story);
        }
    }
// if (storyIndex < storyText.length-1) {
//     storyIndex = ++storyIndex;        
//     var next = document.getElementById('Next');
//     var textbox = document.getElementById('text-box');
//     textbox.removeChild(next);
//     textp.textContent = storyText[storyIndex];
//     var next = document.createElement('button');
//     next.textContent = 'Next';
//     textp.appendChild(next);
//     next.addEventListener('click', story);
// } else if (storyIndex === 1) {
//     var throwdown = document.createElement('button');
//     throwdown.textContent = "Let's go right now!";
//     textp.appendChild(throwdown);
//     textbox.removeChild(next);
//     textbox.removeChile(textp);
//     throwdown.addEventListener('click', runFight);
//     } else {
//         begin();
//     }
// }

function begin () {

}
//------------------------Global Button Eventlistners----------------------//

next.addEventListener('click', story);
library.addEventListener('click', runLibrary);
gym.addEventListener('click',runGym);
work.addEventListener('click', runWork);
// fight.addEventListener('click', runFight);

//----------------------Functions------------------------//
function runLibrary () {
    console.log('checkpoint 1');
    hero[0] = hero[0] +=2;
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
    console.log(hero[1]);
    hero[1] = hero[1] +=2;
    console.log(hero[1]);
}

function runWork () {
    console.log(hero[2]);
    hero[2] = hero[2] +=2;
    console.log(hero[2]);
}

function runFight () {
    console.log('fight1');
    for (var i = 0; heroIndex < 4; i++) {
        console.log(heroIndex);
        if (hero[heroIndex] > bully[heroIndex]) {
            win();
            console.log('fight2');
        } else if (heroIndex === 3){
            lose();
        }else {
            heroIndex = ++heroIndex;
            console.log(heroIndex);
        }
        console.log(heroIndex);
        
       
    }
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

function win () {
    var textp = document.querySelector('#text-box > p');
    textp.textContent = 'You Win';
}

function lose () {
    var textp = document.querySelector('#text-box > p');
    textp.textContent = 'You Lose';
}
//---------------------New Day Functions------------------->

function newDay () {
    dayIndex = ++dayIndex;
    if (dayIndex === day.length) {
        runFight();
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
