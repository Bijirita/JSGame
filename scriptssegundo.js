//--------------------Objects------------------//
let character = {
    hero: [0, 0, 0],
    villain: [1, 1, 1],
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
//----------------------------Action Event Listeners---------------------//

interactions.actions.addEventListener('click', function(event) {
    console.log("hello");
    if (interactions.next === event.target) {
        messageHolder.textp.textContent = proceedStory(messageHolder.textp.textContent, message.story)
    } else if (interactions.nextd === event.target) {
        console.log('youclick nextday')
        runDay ();
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
    } else if (interactions.reset === event.target) {
        console.log('you clicked restart');
        runReset (event);
    } else if (interactions.fight === event.target) {
        console.log('you clicked fight');
        runFight ();
    }
});

//-------------------------Functions------------------//

function proceedStory (current, story) {
    var idx = story.indexOf(current);
    if  (idx === message.story.length - 1) {
        console.log(idx);
        return message.story[0];
    }
    return message.story[idx + 1];
}

function setVillainStat () {
    let index = Math.floor(Math.random() * 12) + 3;
    for (var i = 0; i < index; i++) {
        let villainStat = [Math.floor(Math.random() * 3)];
        character.villain[villainStat] +=  1;
        console.log("villainstat is now " + character.villain)
    }
}

function upgradeHero (event) {
    if (event.target === interactions.library) {
        console.log('you feel smortr');
        ++character.hero[0];
    } else if (event.target === interactions.gym) {
        console.log('you feel stronkr');
        ++character.hero[1];
    } else {
        console.log('you feel rechr');
        ++character.hero[2];  
    }    
};

function runFight () {
    console.log("you made it to runFight fxn");
    for (var i = 0; heroIndex <= 3; i++) {
        if (hero[heroIndex] > bully[heroIndex]) {
           return win();
        }else if (heroIndex === 3) {
           return lose();
        }
    }   
}

function runActions (event) {
    
}

function runReset () {

}
function runDay () {
    console.log("you runDay");
}