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
    fightShoe: ["Today is the day", 'Shoe "time to go, boi!"'],
}

let dayIndex = 0;

let myOpacity = 0;
//----------------------------Action Event Listeners---------------------//

interactions.next.style.display = "flex";

interactions.actions.addEventListener('click', function(event) {
    console.log("hello");
    if (interactions.next === event.target) {
        messageHolder.textp.textContent = proceedStory(messageHolder.textp.textContent, message.story);
    } else if (interactions.nextd === event.target) {
        console.log(event.target);
        messageHolder.textp.textContent = "Today is " + message.day[dayIndex] + ". What will you do?";
        interactions.library.style.display = "flex";
        interactions.gym.style.display = "flex";
        interactions.work.style.display = "flex";
        interactions.fight.textContent = 'Fight';
        proceedDay ();
    } else if (interactions.library === event.target) {
        console.log("you clicked library");
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
    let storyIndex = story.indexOf(current);
    interactions.restart.style.display = "none";
    interactions.next.style.display = "flex";
    if  (storyIndex === message.story.length - 1) {
        setShoeStat();
        console.log(character.shoe);
        interactions.next.style.display = "none";
        interactions.nextd.style.display = "flex";
        interactions.fight.style.display = "flex";
        interactions.fight.textContent = '"Leeeroooy Jeeenkiiins!"';
    } else {
        
        return message.story[storyIndex + 1];
    }
}

function proceedDay (current, day) {
    console.log(dayIndex);
    if  (dayIndex === message.day.length - 1) {
        runFight();
    } else {
        console.log(dayIndex);
        interactions.fight.style.display = "flex";
        interactions.nextd.style.display = "none";
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
    interactions.fight.style.display = "none";
    interactions.nextd.style.display = "flex";
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


function win () {
    console.log('youwin');
    messageHolder.textp.textContent = "You Win!";
    interactions.library.style.display = "none";
    interactions.gym.style.display = "none";
    interactions.work.style.display = "none";
    interactions.fight.style.display = "none";
    interactions.nextd.style.display = "none";
    interactions.restart.style.display = "flex";
}

let lost = "You Lose! Restart Game?"

function lose () {
    console.log("youlose");
    messageHolder.textp.textContent = fadeIn (lost);
    interactions.library.style.display = "none";
    interactions.gym.style.display = "none";
    interactions.work.style.display = "none";
    interactions.fight.style.display = "none";
    interactions.nextd.style.display = "none";
    interactions.restart.style.display = "flex";

}

function runRestart (event) {
    console.log("you clicked restart");
    let character = {
        hero: [1, 1, 1],
        shoe: [0, 0, 0],
    }
    let dayIndex = 0;
    proceedStory (messageHolder.textp.textContent, message.story);
}

function fadeIn (youLose) {
    if (myOpacity < 1) {
        myOpacity += .1;
        setTimeout (function(){fadeIn(youLose)},100);
    }
    document.querySelector('#text-box > p').style.opacity = myOpacity;
}
//make function that runs battle win or lose.