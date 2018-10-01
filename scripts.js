//----------------------Global Variables----------------//
var options = document.getElementById('interactions');
var hero = [0, 0, 0];
var heroIndex = 0;
var bully = [0, 0, 0];
var storyIndex = 0;
var storyText = ["You're a 4th grader chill'n at recess when that bully walks up to you.", "Bully: I'm kicking your ass on Friday.", "How do you respond?"];
var dayIndex = 0;
var dayText = ['How will you train']
var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
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
       
        if (storyIndex < 1) {
            var next = document.getElementById('Next');
            var textp = document.querySelector('#text-box > p');
            storyIndex = ++storyIndex;
            textp.textContent = storyText[storyIndex];
            next.addEventListener('click', story);
        
        }else if (storyIndex >= 1) {
            storyIndex = ++storyIndex;
            var textp = document.querySelector('#text-box > p');
            var next = document.getElementById('Next');
            var throwdown = document.createElement('button');
            throwdown.textContent = '"Leeeroooy, Jeeenkiiins!"';
            textp.textContent = storyText[storyIndex];
            textp.appendChild(throwdown);
            storyIndex = ++storyIndex;
            throwdown.addEventListener ('click', runFight);
            next.textContent = '"See you Friday."';
            next.addEventListener('click', newDay);
        }
    }

//------------------------Global Button Eventlistners----------------------//

next.addEventListener('click', story);
library.addEventListener('click', runLibrary);
gym.addEventListener('click',runGym);
work.addEventListener('click', runWork);
fight.addEventListener('click', runFight);

//----------------------Functions------------------------//
function runLibrary () {
    removeEar();
    hero[0] = hero[0] +=2;
    var next = document.getElementById('Next');
    var textp = document.querySelector('#text-box > p');
    textp.textContent = "you go do the library thing"
    next.style.display = "inline-block";
    next.textContent = "Next";
    next.addEventListener('click', newDay);
}

function runGym () {
    removeEar();
    hero[1] = hero[1] +=2;
    var next = document.getElementById('Next');
    var textp = document.querySelector('#text-box > p');
    textp.textContent = "you go do the gym thing"
    next.style.display = "inline-block";
    next.textContent = "Next";
    next.addEventListener('click', newDay);
}

function runWork () {
    removeEar();
    hero[2] = hero[2] +=2;
    var next = document.getElementById('Next');
    var textp = document.querySelector('#text-box > p');
    textp.textContent = "you go do the work thing"
    next.style.display = "inline-block";
    next.textContent = "Next";
    next.addEventListener('click', newDay)
}

function runFight () {
    for (var i = 0; heroIndex <= 3; i++) {
        if (hero[heroIndex] > bully[heroIndex]) {
           return win();
        }else if (heroIndex === 3) {
           return lose();
        }else {
            heroIndex = ++heroIndex;
        }
    }
}

function addEar () {
    library.addEventListener ('click', runLibrary);
    gym.addEventListener ('click', runGym);
    work.addEventListener ('click', runWork);
    fight.addEventListener ('click', runFight);
}

function removeEar () {
    library.removeEventListener ('click', runLibrary);
    gym.removeEventListener ('click', runGym);
    work.removeEventListener ('click', runWork);
    fight.removeEventListener ('click', runFight);
}

function proceedStoryLibrary () {
    var textp = document.querySelector('#text-box > p');
    textbox.removeChild(textp);
    var brainText = document.createElement('p');
    brainText.textContent = "you feel your brain foldy fold";
    textbox.appendChild(brainText);
    textbox.appendChild(next);
    next.onclick = newDay;
}

function win () {
    var textp = document.querySelector('#text-box > p');
    textp.textContent = 'You Win';
    next.textContent = 'Restart';
    next.addEventListener('click', restart);
    
}

function lose () {
    var textp = document.querySelector('#text-box > p');
    textp.textContent = 'You Lose';
    next.style.display = "inline-block";
    next.textContent = 'Restart';
    next.addEventListener('click', restart);
    
}
//---------------------New Day Functions------------------->

function newDay () {
    var options = document.getElementById('interactions');
    options.style.display = "inline-block";
    if (dayIndex === day.length) {
        return runFight();
    } else if (dayIndex <= day.length - 1) {
    var textp = document.querySelector('#text-box > p');
    var next = document.querySelector('#text-box > button');
    var library = document.getElementById('Library');
    var gym = document.getElementById('Gym');
    var work = document.getElementById('Work');
    var fight = document.getElementById('Fight');
    library.addEventListener ('click', runLibrary);
    gym.addEventListener ('click', runGym);
    work.addEventListener ('click', runWork);
    fight.addEventListener ('click', runFight);
    next.style.display = "none";
    textp.textContent = 'Today is ' + day[dayIndex] + ' how will you spend your day?';
    dayIndex = ++dayIndex;
    }
}

bullySet ();

function bullySet () {
    var bullyIndex = Math.floor(Math.random() * 12) + 3;
    for (var i = 0; i < bullyIndex; i++) {
        var bArray = [Math.floor(Math.random() * 3)];
        bully[bArray] +=  1;
        Window.bully = bully;
        console.log("bully reset check");
    }
}
console.log("global bully is now " + bully);

function restart () {
    library.removeEventListener ('click', runLibrary);
    gym.removeEventListener ('click', runGym);
    work.removeEventListener ('click', runWork);
    fight.removeEventListener ('click', runFight);
    removeEar ();
    var dayIndex = 0;
    Window.dayIndex = dayIndex;
    var next = document.getElementById('Next');
    next.addEventListener ('click', newDay);
    // next.addEventListener('click', story);
    console.log("zero bully is now " + Window.bully);
    console.log('day index is ' + dayIndex);
    // var textbox = document.getElementById('text-box');
    
    
}