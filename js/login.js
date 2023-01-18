const loginBtn = document.querySelector(".login-btn");
const loginTxt = document.querySelector(".login-txt");
const h2 = document.querySelector(".login-container h2");

function loginSubmit(event) {
  event.preventDefault();
  const username = loginTxt.value;
  greetings(username);
  localStorage.setItem("username", username);
}
const loginForm = document.querySelector(".login-container");
loginForm.addEventListener("submit", loginSubmit);

const savedUsername = localStorage.getItem("username");
if (savedUsername !== null) {
  greetings(savedUsername);
}
function greetings(username) {
  loginTxt.classList.add("hidden");
  loginBtn.classList.add("hidden");
  h2.classList.remove("hidden");
  h2.textContent = `Welcome! 🌷 ${username}`;
}
