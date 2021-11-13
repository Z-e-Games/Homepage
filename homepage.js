const usernamePlace = document.getElementById('username-show')
const goldCoinsHtml = document.getElementById('gold')
const diamonds = document.getElementById('diamond')

if(localStorage.getItem('diamonds') === null){
    localStorage.setItem('diamonds',100)
}
if(localStorage.getItem('gold coins') === null){
    localStorage.setItem('gold coins', 100)
}
if(localStorage.getItem('hasSquidGameMusic') === null){
    localStorage.setItem('hasSquidGameMusic','no')
}
if(localStorage.getItem('is signed in') === 'yes'){
    goldCoinsHtml.innerHTML = `Gold Coins: ${localStorage.getItem('gold coins')}`
}
if(localStorage.getItem('is signed in') === 'yes'){
    diamonds.innerHTML = `Diamonds: ${localStorage.getItem('diamonds')}`
}
diamonds.innerHTML = `Diamonds: ${localStorage.getItem('diamonds')}`

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
