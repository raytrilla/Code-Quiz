// Function to print highscores
function printHighscores() {
    const highscores = JSON.parse(localStorage.getItem("highScores")) || [];

    highscores.sort(function(a, b) {
        return b.score - a.score;
    });

    const scoreStorage = document.getElementById("highscores");
    scoreStorage.innerHTML = ''; // Clear previous highscores

    highscores.forEach(function(score, index) {
        const liTag = document.createElement("li");
        liTag.textContent = `${score.initials} - ${score.score}`;
        scoreStorage.appendChild(liTag);
    });
}

// Function to clear highscores
function clearHighscores() {
    localStorage.removeItem("highScores");
    printHighscores(); // Update highscores display after clearing
}

// Print highscores when the page loads
window.addEventListener("load", printHighscores);
document.getElementById("clear").addEventListener("click", clearHighscores);