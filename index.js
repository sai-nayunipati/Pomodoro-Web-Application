let startTime;

function updateClock() {
    // This function checks to see how many seconds are left in the countdown and updates the clock accordingly.
    // It also checks if the timer is done, and if so, it displays a message.
    var currentTime = new Date().getTime();
    var secondsLeft = 25 * 60 - (currentTime - startTime) / 1000;
    var minutes = Math.floor(secondsLeft / 60);
    var seconds = Math.floor(secondsLeft - (minutes * 60));

    let secondsString = seconds.toString();
    if (seconds < 10) {
        secondsString = "0" + seconds;
    }

    var timeDisplay = minutes + ":" + secondsString;
    document.getElementById("clock").innerHTML = timeDisplay;
    if (secondsLeft <= 0) {
        clearInterval(updateClock);
        document.getElementById("timer").innerHTML = "Time's up!";
    } 
}

function startTimer()
{
    startTime = new Date().getTime();
    setInterval(updateClock, 1000);   
}