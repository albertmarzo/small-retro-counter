let countHome = 0
let countGuest = 0

let homeScore = document.getElementById("home-score-number")
let guestScore = document.getElementById("guest-score-number")

function add_1_home() {
    countHome += 1
    homeScore.innerText = countHome
}

function add_2_home() {
    countHome += 2
    homeScore.innerText = countHome
}

function add_3_home() {
    countHome += 3
    homeScore.innerText = countHome 
}

function add_1_guest() {
    countGuest += 1
    guestScore.innerText = countGuest
    
}

function add_2_guest() {
    countGuest += 2
    guestScore.innerText = countGuest
}

function add_3_guest() {
    countGuest += 3
    guestScore.innerText = countGuest
}