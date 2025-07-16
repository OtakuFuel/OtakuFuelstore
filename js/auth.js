document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const password = this.password.value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("isLoggedIn", "false");

  alert("Signup successful! Please login.");
  window.location.href = "login.html";
});
