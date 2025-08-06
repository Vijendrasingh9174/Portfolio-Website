document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
});




const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button text/icon
  if (document.body.classList.contains("dark-mode")) {
    toggle.textContent = "☀️ Light Mode";
  } else {
    toggle.textContent = "🌙 Dark Mode";
  }
});
