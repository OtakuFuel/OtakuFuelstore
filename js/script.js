const toggle = document.getElementById("theme-toggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggle.textContent = "🌑 Villain";
  } else {
    toggle.textContent = "☀️ Peace";
  }
});
