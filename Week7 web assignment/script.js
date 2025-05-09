// Set and save theme
function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}

// Load saved theme
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light-theme";
  document.body.className = savedTheme;
}

// Animate button
function addBounceAnimation(button) {
  button.classList.add("bounce");
  setTimeout(() => {
    button.classList.remove("bounce");
  }, 500);
}

// Update and store click count
function updateClickCount() {
  let count = Number(localStorage.getItem("clickCount")) || 0;
  count++;
  localStorage.setItem("clickCount", count);
  document.getElementById("clickCount").textContent = `You have clicked ${count} time${count === 1 ? '' : 's'}.`;
}

// Load count on page load
function updateClickCountDisplay() {
  const count = Number(localStorage.getItem("clickCount")) || 0;
  document.getElementById("clickCount").textContent = `You have clicked ${count} time${count === 1 ? '' : 's'}.`;
}

// Main
document.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  updateClickCountDisplay();

  const animateBtn = document.getElementById("animateBtn");
  animateBtn.addEventListener("click", () => {
    addBounceAnimation(animateBtn);
    updateClickCount();

    const originalText = animateBtn.textContent;
    animateBtn.textContent = "Thanks!";
    setTimeout(() => {
      animateBtn.textContent = originalText;
    }, 1000);
  });

  document.getElementById("toggleTheme").addEventListener("click", () => {
    const current = document.body.className;
    const newTheme = current === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
  });
});

