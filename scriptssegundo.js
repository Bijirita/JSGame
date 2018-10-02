//--------------------Objects------------------//
let character = {
    hero: [0, 0, 0],
    villain: [1, 1, 1],
}

let interactions = {
    actions: document.getElementById('Actions'),
    library: document.getElementById('Library'),
    gym: document.getElementById('Gym'),
    work: document.getElementById('Work'),
    fight: document.getElementById('Fight'),
    next: document.getElementById('Next'),
    restart: document.getElementById('Restart'),
}

let messageHolder = {
    textbox: document.getElementById('text-box'),
    textp: document.querySelector('#text-box > p'),
}

let message = {
    story: ['Story Stuff', 'Conflict stuff', 'choices'],
    day: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
}
//----------------------------Action Event Listeners---------------------//

Actions.addEventListener('click', function (event) {
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

function story (skill){

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