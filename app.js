const warriorType = [ 'Archer' , 'Axeman' , 'Sword Man' ];
const warriorName = [ 'Leif' , 'Herleif' , 'Ragnar' , 'Gunnar' , 'Vidar' , 'Magnus' , 'Loki' , 'Aric' , 'Ivar' , 'Arkyn' , 'Freyre' , 'Harald' , 'Odin' , 'Ulrik' , 'Roar' , 'Erling' , 'Ulf' , 'Aesir' , 'Rune', 'Arne' , 'Bjorn' , 'Hilde']
const archerImg = [
    'https://webstockreview.net/images/archer-clipart-cartoon-20.jpg',
    'https://as1.ftcdn.net/jpg/00/79/28/58/500_F_79285824_k0BBGMXc2BrTBYgzr27rHIq1besPT6D3.jpg',
    'https://friendlystock.com/wp-content/uploads/2019/05/4-medieval-horse-archer-cartoon-clipart.jpg',
    'https://friendlystock.com/wp-content/uploads/2019/05/1-medieval-archer-cartoon-clipart.jpg',
    'https://friendlystock.com/wp-content/uploads/2018/01/1-roman-archer-shooting-with-his-bow-character-vector-cartoon-clipart.jpg'
];
const swordmanImg = [
    'https://friendlystock.com/wp-content/uploads/2018/04/5-charging-centaur-cartoon-clipart.jpg',
    'https://friendlystock.com/wp-content/uploads/2019/05/8-medieval-warrior-cartoon-clipart.jpg',
    'https://images.freeimages.com/images/premium/previews/1550/15503113-cartoon-viking-with-a-big-sword.jpg',
    'https://i.pinimg.com/736x/56/bc/e8/56bce85a3a27a99072e27c5e1ae2ba61.jpg',
    'https://previews.123rf.com/images/tsirik/tsirik1402/tsirik140200003/26004389-angry-viking-stand-with-sword-and-shield.jpg'
];
const axemanImg = [
    'https://previews.123rf.com/images/monamonash/monamonash1411/monamonash141100001/34764588-angry-cartoon-viking-medieval-warrior-with-weapons.jpg',
    'https://image.freepik.com/free-vector/viking-warrior-cartoon-illustration_14588-144.jpg',
    'https://image.freepik.com/free-vector/cartoon-viking-with-axe-wooden-shield_29190-600.jpg',
    'https://friendlystock.com/wp-content/uploads/2019/06/9-viking-warrior-cartoon-clipart.jpg',
    'https://cdn.dribbble.com/users/2244274/screenshots/5703117/viking_sword_axe.jpg',
    'https://static3.bigstockphoto.com/7/1/4/large1500/41716642.jpg',
    'https://graphicriver.img.customer.envatousercontent.com/files/195876842/Cartoon%20Viking.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=45be2d50ddbed14b0e6918bd4642aae7'
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