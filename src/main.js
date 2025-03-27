import { showCurrentDate, startCountdown } from './app.js';

// Display current date when the window is fully loaded
window.onload = function() {
    showCurrentDate();
};

// Event listener for countdown start
document.getElementById("startCountdown").addEventListener("click", startCountdown);
