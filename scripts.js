//----------------------Global Variables-------------------------------------------//

var hero = [0, 0, 0];
var heroIndex = 0;
var bully = [0, 0, 0];
var storyIndex = 0;
// var dayIndex = 0;

//-----------------Texts Arrays------------------------------//
var storyText = ["You're a 4th grader chill'n at recess when that bully walks up to you.", "Bully: I'm kicking your ass on Friday.", "How do you respond?"];
var dayText = ['How will you train'];
var day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

//------------------Selectors-------------------------//

var todayIs = document.getElementById('TodayIs');
var library = document.getElementById('Library');
var gym = document.getElementById('Gym');
var work = document.getElementById('Work');
var fight = document.getElementById('Fight');
var textbox = document.getElementById('text-box');
var textp = document.querySelector('#text-box > p');
var next = document.getElementById('Next');
var options = document.getElementById('interactions');

//------------------------Global Button Eventlistners----------------------//

next.addEventListener('click', story);
library.addEventListener('click', runLibrary);
gym.addEventListener('click',runGym);
work.addEventListener('click', runWork);
fight.addEventListener('click', runFight);

//----------------------Functions------------------------//

function story () {
       
    if (storyIndex < 1) {
        next = document.getElementById('Next');
        textp = document.querySelector('#text-box > p');
        next.textContent = 'Next';
        ++storyIndex;
        textp.textContent = storyText[storyIndex];
        next.addEventListener('click', story);
        console.log('1storyIndex is ' + storyIndex);
        
    }else if (storyIndex >= 1) {
        ++storyIndex;
        console.log('2storyIndex is ' + storyIndex);
        textp = document.querySelector('#text-box > p');
        next = document.getElementById('Next');
        var leroyJenkins = document.createElement('button');
        leroyJenkins.textContent = '"Leeeroooy, Jeeenkiiins!"';            
        textp.textContent = storyText[storyIndex];
        textp.appendChild(leroyJenkins);
        ++storyIndex;
        leroyJenkins.addEventListener ('click', runFight);
        next.textContent = '"See you Friday."';
        console.log('3storyIndex is ' + storyIndex);
        return next.addEventListener('click', function() {

            newDay(0) });
        
        }
    }

function runLibrary () {
    removeEar();
    hero[0] = hero[0] +=2;
    next = document.getElementById('Next');
    textp = document.querySelector('#text-box > p');
    textp.textContent = "you go do the library thing"
    next.style.display = "inline-block";
    next.textContent = "Next";
    next.addEventListener('click', newDay);
}

function runGym () {
    removeEar();
    hero[1] +=2;
    next = document.getElementById('Next');
    textp = document.querySelector('#text-box > p');
    textp.textContent = "you go do the gym thing"
    next.style.display = "inline-block";
    next.textContent = "Next";
    next.addEventListener('click', newDay);
}

function runWork () {
    removeEar();
    hero[2] +=2;
    next = document.getElementById('Next');
    textp = document.querySelector('#text-box > p');
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
    textp = document.querySelector('#text-box > p');
    textbox.removeChild(textp);
    var brainText = document.createElement('p');
    brainText.textContent = "you feel your brain foldy fold";
    textbox.appendChild(brainText);
    textbox.appendChild(next);
    next.onclick = newDay;
}

function win () {
    removeEar ();
    textp = document.querySelector('#text-box > p');
    textp.textContent = 'You Win';
    next.style.display = "inline-block";
    next.textContent = 'Restart';
    next.removeEventListener ('click', newDay);
    next.addEventListener('click', restart);
}

function lose () {
    removeEar ();
    textp = document.querySelector('#text-box > p');
    textp.textContent = 'You Lose';
    next.style.display = "inline-block";
    next.textContent = 'Restart';
    next.removeEventListener ('click', newDay);
    next.addEventListener('click', restart);
}

function newDay (dayIndex) {
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
        addEar ();
        next.style.display = "none";
        textp.textContent = 'Today is ' + day[dayIndex] + ' how will you spend your day?';
        ++dayIndex;
        console.log('day index is ' + dayIndex);
    }
}

bullySet ();

function bullySet () {
    var bullyIndex = Math.floor(Math.random() * 12) + 3;
    for (var i = 0; i < bullyIndex; i++) {
        var bArray = [Math.floor(Math.random() * 3)];
        bully[bArray] +=  1;
    }
    console.log("bully reset check");
    console.log("global bully is now " + bully);
}

function restart () {
    next = document.getElementById('Next');
    next.removeEventListener ('click', restart);
    next.removeEventListener ('click', newDay);

    removeEar ();
    hero = [0, 0, 0];
    heroIndex = 0;
    bully = [0, 0, 0];
    storyIndex = 0;
    dayIndex = 0;
    console.log('restart day index is ' + dayIndex);
    console.log('restart story index is ' + storyIndex);
    bullySet ();
    next.addEventListener ('click', story);
}

// const div = document.querySelector("div");
// let button = 'hola';

// div.addEventListener("click", function(event) {
//     button = event.target;
//   // console.log(button);
//   MasterControl();
// });

// const MasterControl = function () {
//   const play = document.getElementById("play"),
//     stop = document.getElementById("stop");
  
//   if ( button === play) {
//       console.log('Im the play button');
//   } else {
//     console.log("I should be stop");
//   }
// }

// #play {
//     background-color: green;
//     border: 0;
//     color: white;
//     font-weight: bold;
//     padding: 10px 20px;
//     display: block;
//     margin: 20px;
//   }
//   #stop {
//     background-color: red;
//     border: 0;
//       color: white;
//     font-weight: bold;
//     padding: 10px 20px;
//     display: block;
//     margin: 20px;
//   }

//   <div>
//   <button id="play">play</button>
//   <button id="stop">stop</button>
// </div>

