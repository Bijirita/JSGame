//--------------------Objects------------------//
let character = {
    hero: [0, 0, 0],
    villain: [1, 1, 1],
}

let action = {
    interactions: document.getElementById('interactions'),
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
//----------------------------Event Listeners---------------------//

action.next.addEventListener('click', story);
action.library.addEventListener('click', upgrade);
action.gym.addEventListener('click',upgrade);
action.work.addEventListener('click', upgrade);
action.fight.addEventListener('click', runFight);
action.restart.addEventListener('click', restart);

//-------------------------Functions------------------//

function story (){

}

function upgrade (stat) {
    if (stat === library) {
        ++hero[0];
    } else if (stat === gym) {
        ++hero[1];
    } else if (stat === work) {
        ++hero[2];
    }
}

function runFight () {

}

function restart () {

}