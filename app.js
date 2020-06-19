const warriorType = [ 'Archer' , 'Axeman' , 'Sword Man' ];
const warriorName = [ 'Leif' , 'Herleif' , 'Ragnar' , 'Gunnar' , 'Vidar' , 'Magnus' , 'Loki' , 'Aric' , 'Ivar' , 'Arkyn' , 'Freyre' , 'Harald' , 'Odin' , 'Ulrik' , 'Roar' , 'Erling' , 'Ulf' , 'Aesir' , 'Rune', 'Arne' , 'Bjorn' , 'Hilde']
const archerImg = [
    './assest/warriors_img/archers/archer_1.png',
    './assest/warriors_img/archers/archer_2.png',
    './assest/warriors_img/archers/archer_3.png',
    './assest/warriors_img/archers/archer_4.png',
    './assest/warriors_img/archers/archer_5.png'
];
const swordmanImg = [
    './assest/warriors_img/swordman/swordman_1.png',
    './assest/warriors_img/swordman/swordman_2.png',
    './assest/warriors_img/swordman/swordman_3.png',
    './assest/warriors_img/swordman/swordman_4.png',
    './assest/warriors_img/swordman/swordman_5.png'
];
const axemanImg = [
    './assest/warriors_img/axeman/axeman_1.png',
    './assest/warriors_img/axeman/axeman_2.png',
    './assest/warriors_img/axeman/axeman_3.png',
    './assest/warriors_img/axeman/axeman_4.png',
    './assest/warriors_img/axeman/axeman_5.png',
    './assest/warriors_img/axeman/axeman_6.png',
    './assest/warriors_img/axeman/axeman_7.png'
];

function generateWarrior() {
    
    let randomUrl;
    let randomType = warriorType[Math.floor(Math.random() * warriorType.length)];
    let randomName = warriorName[Math.floor(Math.random() * warriorName.length)];
    let randomPower = generatePower();
    let randomLevel = generateLevel();

    switch(true) {
        case randomType === 'Archer': { randomUrl = archerImg[Math.floor(Math.random() * archerImg.length)] } break;
        case randomType === 'Axeman': { randomUrl = axemanImg[Math.floor(Math.random() * axemanImg.length)] } break;
        case randomType === 'Sword Man': { randomUrl = swordmanImg[Math.floor(Math.random() * swordmanImg.length)] } break;
    }

    return {
        name: randomName,
        power: randomPower,
        level: randomLevel,
        damage: randomPower * randomLevel,
        type: randomType,
        img: randomUrl
    }
}

function generatePower() {
    return Math.floor(Math.random() * 100) + 1;
}
function generateLevel() {
    return Math.floor(Math.random() * 10) + 1;
}

for (i = 0; i < 3; i++) {

    let aaa = generateWarrior();
    console.log(aaa)
}