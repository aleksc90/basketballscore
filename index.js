let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")

console.log(homeScoreEl.textContent)

let sum = 0
let guestSum = 0

function addOne() {
    sum += 1 
    homeScoreEl.textContent = sum
}

function addTwo() {
    sum += 2
    homeScoreEl.textContent = sum
}

function addThree() {
    sum += 3
    homeScoreEl.textContent = sum
}

function guestAddOne() {
    guestSum += 1
    guestScoreEl.textContent = guestSum
}

function guestAddTwo() {
    guestSum += 2
    guestScoreEl.textContent = guestSum
}

function guestAddThree() {
    guestSum += 3
    guestScoreEl.textContent = guestSum
}



