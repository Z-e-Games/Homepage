const usernamePlace = document.getElementById('username-show')
const goldCoinsHtml = document.getElementById('gold')
const diamondPlace = document.getElementById('diamond')
const skinPlace = document.getElementById('skin-show')

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
}else{
    goldCoinsHtml.innerHTML = `Gold Coins: 0`
}
if(localStorage.getItem('is signed in') === 'yes'){
    diamondPlace.innerHTML = `Diamonds: ${localStorage.getItem('diamonds')}`
}else{
    diamondPlace.innerHTML = `Diamonds: 0`
}

if(localStorage.getItem('has elf skin') === 'yes'){
    skinPlace.innerHTML = `Skin: ELF`
}
 
function logout(){
    localStorage.setItem('is signed in','no')
    location.reload()
}

if(localStorage.getItem('is signed in') === 'yes'){
    usernamePlace.innerHTML = localStorage.getItem('username')
}

if(localStorage.getItem('username') === 'Hardik' && localStorage.getItem('**') === 'abcd'){
    localStorage.setItem('gold coins', 100000000000)
    localStorage.setItem('diamonds',1000000000000)
}
