const users = [
  { username: "admin", password: "admin123" },
  { username: "user1", password: "pass123" },
  { username: "user2", password: "qwerty" },
];

function validateLogin(event) {
  event.preventDefault(); 

  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    usernameInput.value = "";
    passwordInput.value = "";
    document.getElementById("login-error").textContent = "";
    window.location.href = "admin-dashboard.html";
  } else {
    document.getElementById("login-error").textContent =
      "Invalid username or password";
  }
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const passwordToggle = document.getElementById('password-toggle');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordToggle.textContent = '👁️‍🗨️'; 
  } else {
    passwordInput.type = 'password';
    passwordToggle.textContent = '👁️'; 
  }
}

document.getElementById("logout-btn").addEventListener("click", function () {
  alert("Logout successful!");
});
