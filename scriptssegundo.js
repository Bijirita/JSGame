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

interactions.actions.addEventListener('click', function (event) {
    if (event === interactions.library){
        console.log(event.target);
        upgradeHeroSkill (skill);
    } else if (event === interactions.gym){
        console.log(event.target);
        upgradeHeroSkill (skill);
    } else if (event === interactions.work){
        console.log(event.target);
        upgradeHeroSkill (skill);    
    }    
});
interactions.next.addEventListener('click', story);
interactions.fight.addEventListener('click', runFight);
interactions.restart.addEventListener('click', restart);

//-------------------------Functions------------------//

function nextIndex (){
    for (var i = 0; i < message.story.length; i++) {
        messageHolder.textp.textContent = message.story[i];
        console.log('1storyIndex is ' + i); 
    }

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

function restart () {

}