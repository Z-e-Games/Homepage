const usernamePlace = document.getElementById('username-show')
const goldCoinsHtml = document.getElementById('gold')
const diamondPlace = document.getElementById('diamond')
const skinPlace = document.getElementById('skin-show')
const xpPlace = document.getElementById('xp-show')
const levelPlace = document.getElementById('level-show')

if(localStorage.getItem('diamonds') === null){
    localStorage.setItem('diamonds',100)
}
if(localStorage.getItem('gold coins') === null){
    localStorage.setItem('gold coins', 100)
}

if(localStorage.getItem('has elf skin') === null){
    localStorage.setItem('has elf skin', 'no')
}

if(localStorage.getItem('hasSquidGameMusic') === null){
    localStorage.setItem('hasSquidGameMusic','no')
}
if(localStorage.getItem('is signed in') === 'yes'){
    goldCoinsHtml.innerHTML = `Gold Coins: ${localStorage.getItem('gold coins')}`  
    diamondPlace.innerHTML = `Diamonds: ${localStorage.getItem('diamonds')}`
    usernamePlace.innerHTML = localStorage.getItem('username')
    xpPlace.innerHTML = `XP: ${localStorage.getItem('XP')}/20000`
    levelPlace.innerHTML = `Level: ${localStorage.getItem('Level')}`
}else{
    goldCoinsHtml.innerHTML = `Gold Coins: 0`
    diamondPlace.innerHTML = `Diamonds: 0`
}


if(localStorage.getItem('has elf skin') === 'yes'){
    skinPlace.innerHTML = `Skin: ELF`
}
 
function logout(){
    localStorage.setItem('is signed in','no')
    location.reload()
}



if(localStorage.getItem('Level') === null){
    localStorage.setItem('Level', 1)
}

if(localStorage.getItem('XP') === null){
    localStorage.setItem('XP', 0)
}

if(localStorage.getItem('XP') >= 2000){
    localStorage.setItem('XP', parseInt(localStorage.getItem('XP')) - 2000)
    localStorage.setItem('Level',parseInt(localStorage.getItem('Level')) + 1)
    localStorage.setItem('gold coins', parseInt(localStorage.getItem('gold coins')) + 8500)
    localStorage.setItem('has elf skin', 'yes')
    location.reload()
}



if(localStorage.getItem('hasSquidGameMusic') === null){
    localStorage.setItem('hasSquidGameMusic','no')
}

if(localStorage.getItem('username') === 'Hardik' && localStorage.getItem('**') === 'adminCode(BREME)'){
    localStorage.setItem('gold coins', 100000000000)
    localStorage.setItem('diamonds',1000000000000)
}
