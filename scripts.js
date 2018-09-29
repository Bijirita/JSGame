//----------------------Global Variables----------------//
var options = document.getElementById('interactions');
var hero = [0, 0, 0];
var heroIndex = 0;
var bully = [1, 1, 1];
var storyIndex = 0;
var storyText = ["You're a 4th grader chill'n at recess when that bully walks up to you.", "Bully: I'm kicking your ass on Friday.", "How do you Proceed?"];
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
       
        if (storyIndex <= 1) {
            var next = document.getElementById('Next');
            var textp = document.querySelector('#text-box > p');
            storyIndex = ++storyIndex;
            textp.textContent = storyText[storyIndex];
            console.log(storyIndex);
            
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
            next.textContent = 'See you Friday';
            next.addEventListener('click', newDay);
        }
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
    removeEar();
    hero[0] = hero[0] +=2;
    var textbox = document.getElementById('text-box');
    var next = document.getElementById('Next');
    var textp = document.querySelector('#text-box > p');
    console.log('checkpoint 2')
    textp.textContent = "you go do the library thing"
    next.style.display = "inline-block";
    next.textContent = "Next";
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
    for (var i = 0; heroIndex <= 2; i++) {
        console.log('heroindex ' + heroIndex);
        console.log('hero ' + hero);
        if (hero[heroIndex] > bully[heroIndex]) {
           return win();
        }else if (heroIndex === 2) {
           return lose();
        }else {
            heroIndex = ++heroIndex;
            console.log(heroIndex);
        }
        console.log(heroIndex);
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
    console.log('newday');
    var options = document.getElementById('interactions');
    options.style.display = "inline-block";
    if (dayIndex === day.length) {
        return runFight();
    } else if (dayIndex <= day.length - 1) {
    console.log(dayIndex);
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
    console.log("dayIndex " + dayIndex);
    next.style.display = "none";
    textp.textContent = 'Today is ' + day[dayIndex] + ' how will you spend your day?';
    dayIndex = ++dayIndex;
    console.log('hero ' + hero);
    }
}

var bullyIndex = getRandomInt(15);
console.log(bullyIndex);