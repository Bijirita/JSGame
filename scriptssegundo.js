//--------------------Objects------------------//
let character = {
    hero: [1, 1, 1],
    shoe: [0, 0, 0],
    total: 0,
}

const interactions = {
    actions: document.getElementById('Actions'),
    library: document.getElementById('Library'),
    gym: document.getElementById('Gym'),
    work: document.getElementById('Work'),
    fight: document.getElementById('Fight'),
    next: document.getElementById('NextStory'),
    nextd: document.getElementById('NextDay'),
    restart: document.getElementById('Restart'),
}

const messageHolder = {
    textbox: document.getElementById('text-box'),
    textp: document.querySelector('#text-box > p'),
}

const message = {
    story: ["You're the new kid on the block", "First day of school", 
        'Shoe walks up and says: "We fight friday!"', "How do you respond?"],
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
}

let dayIndex = -1;

//----------------------------Action Event Listeners---------------------//

interactions.next.style.display = "flex";

interactions.actions.addEventListener('click', function(event) {
    console.log("hello");
    if (interactions.next === event.target) {
        messageHolder.textp.textContent = proceedStory(messageHolder.textp.textContent, message.story);
    } else if (interactions.nextd === event.target) {
        console.log('youclick nextday');
        messageHolder.textp.textContent = "Today is " + message.day[proceedDay(dayIndex)];
        interactions.library.style.display = "flex";
        interactions.gym.style.display = "flex";
        interactions.work.style.display = "flex";
        interactions.fight.textContent = 'Fight';
    } else if (interactions.library === event.target) {
        console.log("you clicked library");
        runActions (event);
        upgradeHero (event);
    } else if (interactions.gym === event.target) {
        console.log('you clicked gym');
        upgradeHero (event);
    } else if (interactions.work === event.target) {
        console.log('you clicked work');
        upgradeHero (event);
    } else if (interactions.restart === event.target) {
        console.log('you clicked restart');
        runRestart (event);
    } else if (interactions.fight === event.target) {
        console.log('you clicked fight');
        runFight ();
    }
});

//-------------------------Functions------------------//

function proceedStory (current, story) {
    let idxs = story.indexOf(current);
    if  (idxs === message.story.length - 1) {
        setShoeStat();
        console.log(character.shoe);
        interactions.next.style.display = "none";
        interactions.nextd.style.display = "flex";
        interactions.fight.style.display = "flex";
        interactions.fight.textContent = '"Leeeroooy Jeeenkiiins!"';
    } else {
        return message.story[idxs + 1];
    }
}

function proceedDay (dayIndex) {
    if  (dayIndex === message.day.length - 1) {
        runFight();
    } else { 
        return ++dayIndex;
    }
}

function setShoeStat () {
    let index = Math.floor(Math.random() * 12) + 3;
    for (var i = 0; i < index; i++) {
        let shoeStat = [Math.floor(Math.random() * 3)];
        character.shoe[shoeStat] +=  1;
        console.log("shoestat is now " + character.shoe)
    }
}

function upgradeHero (event) {
    interactions.library.style.display = "none";
    interactions.gym.style.display = "none";
    interactions.work.style.display = "none";
    if (event.target === interactions.library) {
        messageHolder.textp.textContent = 'Your brain folds';
        ++character.hero[0];
    } else if (event.target === interactions.gym) {
        messageHolder.textp.textContent = 'Your muscles swell';
        ++character.hero[1];
    } else {
        messageHolder.textp.textContent = 'Your pockets get deeper ';
        ++character.hero[2];  
    }    
};

function runFight () {
    character.hero.forEach(function(value, index) {
        if (character.hero[index] > character.shoe[index]) {
            return win();
        } else if (character.total === 2) {
            return lose();
        } else ++character.total;
    })
}

function runActions (event) {
    console.log('actions run');
}

function runRestart (event) {
    console.log("you restart");
}
function runDay () {
    console.log("you runDay");
}

function win () {
    console.log('youwin');
    interactions.fight.style.display = "none";
    interactions.restart.style.display = "flex";
}

function lose () {
    console.log("youlose");
    interactions.fight.style.display = "none";
    interactions.restart.style.display = "flex";

}
//make function that runs battle win or lose.