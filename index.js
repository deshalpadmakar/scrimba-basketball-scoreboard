// ELEMENTS ============================

// home and guest score element
let homeTotalScoreEl = document.getElementById("home-total-score")
let guestTotalScoreEl = document.getElementById("guest-total-score")

let homeQuarterOneScoreEl = document.getElementById("home-quarter-one-score")
let homeQuarterTwoScoreEl = document.getElementById("home-quarter-two-score")
let homeQuarterThreeScoreEl = document.getElementById("home-quarter-three-score")
let homeQuarterFourScoreEl = document.getElementById("home-quarter-four-score")
let homeQuarterFiveScoreEl = document.getElementById("home-quarter-five-score")

let guestQuarterOneScoreEl = document.getElementById("guest-quarter-one-score")
let guestQuarterTwoScoreEl = document.getElementById("guest-quarter-two-score")
let guestQuarterThreeScoreEl = document.getElementById("guest-quarter-three-score")
let guestQuarterFourScoreEl = document.getElementById("guest-quarter-four-score")
let guestQuarterFiveScoreEl = document.getElementById("guest-quarter-five-score")

// home and guest foul element
let homeFoulEl = document.getElementById("home-foul")
let guestFoulEl = document.getElementById("guest-foul")

// home and guest timeout element
let homeTimeoutEl = document.getElementById("home-timeout")
let guestTimeoutEl = document.getElementById("guest-timeout")

// timer input elements
let minutsInputEl = document.getElementById("minuts-input-num")
let secondsInputEl = document.getElementById("seconds-input-num")

// timer buttons
let startTimerBtn = document.getElementById("start-timer-btn")
let pauseTimerBtn = document.getElementById("pause-timer-btn")
let resumeTimerBtn = document.getElementById("resume-timer-btn")

// VARIABLES ============================

// tracking home and guest score
let homeTotalScore = 0
let guestTotalScore = 0

// tracking home and guest score in a quarter
let currentQuarter = 1
let homeCurrentQuarterScore = 0
let guestCurrentQuarterScore = 0

// tracking home and guest fouls
let homeFoul = 0
let guestFoul = 0

// tracking home and guest timeouts
let homeTimeout = 0
let guestTimeout = 0

// tracking remaining time
let countdown
let remainingTime = 0

// FUNCTIONS ============================

// functions managing total home score
function incrementHomeScoreByOne() {
	homeTotalScore += 1
	homeCurrentQuarterScore += 1
	updateHomeTotalScore()
	updateHomeCurrentQuarterScore()
	navigator.vibrate(5)
}

function incrementHomeScoreByTwo() {
	homeTotalScore += 2
	homeCurrentQuarterScore += 2
	updateHomeTotalScore()
	updateHomeCurrentQuarterScore()
	navigator.vibrate(5)
}

function incrementHomeScoreByThree() {
	homeTotalScore += 3
	homeCurrentQuarterScore += 3
	updateHomeTotalScore()
	updateHomeCurrentQuarterScore()
	navigator.vibrate(5)
}

function updateHomeTotalScore() {
	homeTotalScoreEl.textContent = homeTotalScore
}

function updateHomeCurrentQuarterScore() {
	switch (currentQuarter) {
		case 1: {
			homeQuarterOneScoreEl.textContent = homeCurrentQuarterScore
			break
		}
		case 2: {
			homeQuarterTwoScoreEl.textContent = homeCurrentQuarterScore
			break
		}
		case 3: {
			homeQuarterThreeScoreEl.textContent = homeCurrentQuarterScore
			break
		}
		case 4: {
			homeQuarterFourScoreEl.textContent = homeCurrentQuarterScore
			break
		}
		case 5: {
			homeQuarterFiveScoreEl.textContent = homeCurrentQuarterScore
			break
		}
	}
}

// functions managing guest score
function incrementGuestScoreByOne() {
	navigator.vibrate(5)
	guestTotalScore += 1
	guestCurrentQuarterScore += 1
	updateGuestTotalScore()
	updateGuestCurrentQuarterScore()
}

function incrementGuestScoreByTwo() {
	navigator.vibrate(5)
	guestTotalScore += 2
	guestCurrentQuarterScore += 2
	updateGuestTotalScore()
	updateGuestCurrentQuarterScore()
}

function incrementGuestScoreByThree() {
	navigator.vibrate(5)
	guestTotalScore += 3
	guestCurrentQuarterScore += 3
	updateGuestTotalScore()
	updateGuestCurrentQuarterScore()
}

function updateGuestTotalScore() {
	guestTotalScoreEl.textContent = guestTotalScore
}

function updateGuestCurrentQuarterScore() {
	switch (currentQuarter) {
		case 1: {
			guestQuarterOneScoreEl.textContent = guestCurrentQuarterScore
			break
		}
		case 2: {
			guestQuarterTwoScoreEl.textContent = guestCurrentQuarterScore
			break
		}
		case 3: {
			guestQuarterThreeScoreEl.textContent = guestCurrentQuarterScore
			break
		}
		case 4: {
			guestQuarterFourScoreEl.textContent = guestCurrentQuarterScore
			break
		}
		case 5: {
			guestQuarterFiveScoreEl.textContent = guestCurrentQuarterScore
			break
		}
	}
}

// functions managing home foul

function incrementHomeFoul() {
	navigator.vibrate(5)
	homeFoul++
	updateHomeFoul()
}

function decrementHomeFoul() {
	navigator.vibrate(5)
	if (homeFoul > 0) {
		homeFoul--
		updateHomeFoul()
	}
}

function updateHomeFoul() {
	homeFoulEl.textContent = homeFoul
}

// functions managing guest foul

function incrementGuestFoul() {
	navigator.vibrate(5)
	guestFoul++
	updateGuestFoul()
}

function decrementGuestFoul() {
	navigator.vibrate(5)
	if (guestFoul > 0) {
		guestFoul--
		updateGuestFoul()
	}
}

function updateGuestFoul() {
	guestFoulEl.textContent = guestFoul
}

// functions managing home timeout

function incrementHomeTimeout() {
	navigator.vibrate(5)
	homeTimeout++
	updateHomeTimeout()
}

function decrementHomeTimeout() {
	navigator.vibrate(5)
	if (homeTimeout > 0) {
		homeTimeout--
		updateHomeTimeout()
	}
}

function updateHomeTimeout() {
	homeTimeoutEl.textContent = homeTimeout
}

// functions managing guest timeout

function incrementGuestTimeout() {
	navigator.vibrate(5)
	guestTimeout++
	updateGuestTimeout()
}

function decrementGuestTimeout() {
	navigator.vibrate(5)
	if (guestTimeout > 0) {
		guestTimeout--
		updateGuestTimeout()
	}
}

function updateGuestTimeout() {
	guestTimeoutEl.textContent = guestTimeout
}

// functions managing timer

function setAndStartTimer() {
	navigator.vibrate(5)
	// initializing timer
	let initialTimeInMinuts = parseInt(minutsInputEl.value, 0)
	let initialTimeInSeconds = parseInt(secondsInputEl.value, 0)
	initialTimeInMinuts = initialTimeInMinuts ? initialTimeInMinuts : 0
	initialTimeInSeconds = initialTimeInSeconds ? initialTimeInSeconds : 0
	remainingTime = initialTimeInMinuts * 60 + initialTimeInSeconds

	updateDisplayTimer(remainingTime)
	startTimerBtn.style.display = "none"
	pauseTimerBtn.style.display = "block"
	startTimer()
}

function updateDisplayTimer(time) {
	let minuts = Math.floor(time / 60)
	let seconds = time % 60
	let minutsStr = minuts < 10 ? `0${minuts}` : `${minuts}`
	let secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`
	// timerDisplayEl.textContent = `${minutsStr}:${secondsStr}`
	minutsInputEl.value = minutsStr
	secondsInputEl.value = secondsStr
}

function startTimer() {
	clearInterval(countdown) // Clear any existing timer
	countdown = setInterval(() => {
		if (remainingTime > 0) {
			remainingTime--
			updateDisplayTimer(remainingTime)
		} else if (remainingTime <= 0) {
			minutsInputEl.value = "12"
			secondsInputEl.value = "00"
			startTimerBtn.style.display = "block"
			pauseTimerBtn.style.display = "none"
			resumeTimerBtn.style.display = "none"
			console.log("timer ended")
			clearInterval(countdown)
		}
	}, 1000)
}

function pauseTimer() {
	navigator.vibrate(5)
	clearInterval(countdown)
	pauseTimerBtn.style.display = "none"
	resumeTimerBtn.style.display = "block"
}

function resumeTimer() {
	startTimer()
	resumeTimerBtn.style.display = "none"
	pauseTimerBtn.style.display = "block"
	navigator.vibrate(5)
}

function resetTimer() {
	remainingTime = 0
	minutsInputEl.value = "12"
	secondsInputEl.value = "00"
	clearInterval(countdown) // Clear any existing timer
	startTimerBtn.style.display = "block"
	pauseTimerBtn.style.display = "none"
	resumeTimerBtn.style.display = "none"
	navigator.vibrate(5)
}

function saveCurrentQuarterScore() {
	// vibrate phone on btn click
	navigator.vibrate(5)
	if (currentQuarter < 6) {
		// moving on to next quarter
		currentQuarter++
		homeCurrentQuarterScore = 0
		guestCurrentQuarterScore = 0
		resetTimer()
	}
}

function resetScoreboard() {
	// vibrate phone on btn click
	navigator.vibrate(5)

	// reset timer
	resetTimer()

	//reset home score
	homeTotalScore = 0
	updateHomeTotalScore()

	// reset guest score
	guestTotalScore = 0
	updateGuestTotalScore()

	// reset home and guest foul
	homeFoul = 0
	guestFoul = 0
	updateHomeFoul()
	updateGuestFoul()

	// reset home and guest timeout
	homeFoul = 0
	guestFoul = 0
	updateHomeTimeout()
	updateGuestTimeout()

	// reset home quarter scores
	homeCurrentQuarterScore = 0
	for (currentQuarter = 1; currentQuarter < 6; currentQuarter++) {
		updateHomeCurrentQuarterScore()
	}

	//reset guest quarter scores
	guestCurrentQuarterScore = 0
	for (currentQuarter = 1; currentQuarter < 6; currentQuarter++) {
		updateGuestCurrentQuarterScore()
	}

	// reset current quarter
	currentQuarter = 1
}
