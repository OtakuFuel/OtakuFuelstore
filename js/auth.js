
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const user = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
    address: form.address1.value + ", " + form.address2.value + ", " + form.city.value + ", " + form.state.value + " - " + form.pincode.value
  };
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("isLoggedIn", "true");
  alert("Signup successful!");
  window.location.href = "index.html";
});

document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.email === form.email.value && user.password === form.password.value) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials!");
  }
});
