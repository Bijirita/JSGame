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
    next: document.getElementById('Next'),
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

// interactions.actions.addEventListener('click', function (event) {
//     console.log("hello");
//     if (event === interactions.library){
//         console.log(event.target);
//         upgradeHeroSkill (skill);
//     } else if (event === interactions.gym){
//         console.log(event.target);
//         upgradeHeroSkill (skill);
//     } else if (event === interactions.work){
//         console.log(event.target);
//         upgradeHeroSkill (skill);    
//     }    
// });

interactions.actions.addEventListener('click', function(event) {
    console.log("hello");
    if (interactions.next === event.target) {
        messageHolder.textp.textContent = proceed(messageHolder.textp.textContent, message.story);
    } else if (interactions.library === event.target) {
        console.log("you clicked library");
        runActions (event);
    } else if (interactions.gym === event.target) {
        console.log('you clicked gym');
        runActions (event);
    } else if (interactions.work === event.target) {
        console.log('you clicked work');
        runActions (event);
    } else if (interactions.reset === event.target) {
        console.log('you clicked restart');
        runReset (event);
    } else if (interactions.fight === event.target) {
        console.log('you clicked fight');
        funFight (event);
    }
});

//-------------------------Functions------------------//

function proceed (current, story) {
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

function upgradeHeroSkill (skill) {
    if (skill === action.library) {
        ++character.hero[0];
    } else if (skill === action.gym) {
        ++character.hero[1];
    } else {
        ++character.hero[2];
    }
    story (skill);
}

function runFight () {

}

function runActions (event) {
    if (event)
    console.log("you made it to library fxn")
}

function runReset () {

}

//*https://codereview.stackexchange.com/questions/132397/prev-next-buttons-for-a-circular-list//*