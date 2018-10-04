//--------------------Objects------------------//
let character = {
    hero: [0, 0, 0],
    shoe: [1, 1, 1],
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

//----------------------------Action Event Listeners---------------------//

interactions.next.style.display = "flex";

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
        setShoeStat();
        console.log(character.shoe);
        interactions.next.style.display = "none";
        interactions.fight.style.display = "flex";
        interactions.fight.textContent = '"Leeeroooy Jeeenkiiins!"';
        return console.log('yes');
    } else 
    console.log(idx);
    return message.story[idx + 1];
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
    character.hero.forEach(function(value, index) {
        if (character.hero[index] > character.shoe[index]) {
            console.log('youwin');
            return win();
        } else if (character.total === 2) {
            console.log("youlose");
            return lose();
        } else ++character.total;
    })
}

function runActions (event) {
    
}

function runReset () {

}
function runDay () {
    console.log("you runDay");
}