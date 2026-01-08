let randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;
let time = 0;
let timerInterval;

// Start timer when page loads
startTimer();

function startTimer() {
    timerInterval = setInterval(() => {
        time++;
        document.getElementById("timer").textContent = 
            `Time: ${time} seconds`;
    }, 1000);
}

function checkGuess() {
    const userGuess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");
    const attempts = document.getElementById("attempts");

    if (!userGuess) {
        message.textContent = "⚠️ Please enter a number";
        return;
    }

    count++;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
        attempts.textContent = `Attempts: ${count}`;
        clearInterval(timerInterval); // stop timer
    } 
    else if (userGuess > randomNumber) {
        message.textContent = "📉 Too High! Try again.";
    } 
    else {
        message.textContent = "📈 Too Low! Try again.";
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    count = 0;
    time = 0;

    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("timer").textContent = "Time: 0 seconds";

    clearInterval(timerInterval);
    startTimer(); // restart timer
}