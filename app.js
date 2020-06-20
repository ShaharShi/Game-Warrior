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

function drawCard() {
    let newWarrior = generateWarrior();

    let cardWrapper = document.createElement('div');
    let cardSelf = document.createElement('div');
    let cardItem1 = document.createElement('div');
    let cardItem2 = document.createElement('div');
    let cardItem3 = document.createElement('div');
    cardItem1.className = 'card-item-1';
    cardItem2.className = 'card-item-2';
    cardItem3.className = 'card-item-3';

    let title = document.createElement('h1');
    let typeSpan = document.createElement('span');
    let img = document.createElement('img');
    title.innerText = newWarrior.name;
    typeSpan.innerText = newWarrior.type;
    img.src = newWarrior.img;
    img.className = 'block';

    let cardIcon1 = document.createElement('div');
    let cardIcon2 = document.createElement('div');
    let cardIcon3 = document.createElement('div');
    cardIcon1.className = "card-icon";
    cardIcon2.className = "card-icon";
    cardIcon3.className = "card-icon";

    let iconEle1 = document.createElement('i');
    let iconEle2 = document.createElement('b');
    let iconEle3 = document.createElement('i');
    iconEle1.classList = 'fas fa-fist-raised';
    iconEle2.innerText = 'LVL';
    iconEle3.classList = 'fas fa-bahai';
    iconEle1.title = 'Power';
    iconEle3.title = 'Damage';

    let iconData1 = document.createElement('span');
    let iconData2 = document.createElement('span');
    let iconData3 = document.createElement('span');
    iconData1.innerText = newWarrior.power;
    iconData2.innerText = newWarrior.level;
    iconData3.innerText = newWarrior.damage;

    switch(true) {
        case newWarrior.level <= 3: { cardWrapper.classList = 'card-wrapper zoom-in-down brown-bg'} break;
        case newWarrior.level > 3 && newWarrior.level <= 6: { cardWrapper.classList = 'card-wrapper zoom-in-down green-bg'} break;
        case newWarrior.level > 6 && newWarrior.level <= 9: { cardWrapper.classList = 'card-wrapper zoom-in-down red-bg'} break;
        case newWarrior.level === 10: { cardWrapper.classList = 'card-wrapper zoom-in-down golden-bg'} break;
    }
    if (newWarrior.level < 10) {
        cardSelf.className = 'card-self';
    } else {
        cardSelf.className = 'golden-style-set';
    }

    document.getElementById('cardsWrapper').appendChild(cardWrapper);
    cardWrapper.appendChild(cardSelf);
    cardSelf.appendChild(cardItem1);
    cardItem1.appendChild(title);
    cardItem1.appendChild(typeSpan);
    cardSelf.appendChild(cardItem2);
    cardItem2.appendChild(img);
    cardSelf.appendChild(cardItem3);

    cardItem3.appendChild(cardIcon1);
    cardIcon1.appendChild(iconEle1);
    cardIcon1.appendChild(iconData1);

    cardItem3.appendChild(cardIcon2);
    cardIcon2.appendChild(iconEle2);
    cardIcon2.appendChild(iconData2);

    cardItem3.appendChild(cardIcon3);
    cardIcon3.appendChild(iconEle3);
    cardIcon3.appendChild(iconData3);
}

document.getElementById('generateBtn').addEventListener('click', drawCard);