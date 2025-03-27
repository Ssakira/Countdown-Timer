export function showCurrentDate() {
  const now = new Date();
  document.getElementById("currentDate").innerText = `Current Date: ${now.toLocaleString()}`;
}

export function startCountdown() {
  const eventInput = document.getElementById("eventDate").value;
  if (!eventInput) {
      alert("Please select a date!");
      return;
  }

  const eventDate = new Date(eventInput);
  const countdownElement = document.getElementById("countdown");

  function updateCountdown() {
      const now = new Date();
      const timeLeft = eventDate - now;

      if (timeLeft <= 0) {
          countdownElement.innerText = "Event Time Reached!";
          clearInterval(interval);
          return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);

      countdownElement.innerText = `Time Left: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
}
