const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Hardcoded credentials (replace with backend check later)
const storedEmail = "user@example.com";
const storedPassword = "password123";

// Validation: Email format
function validateEmail() {
  const value = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) {
    emailError.textContent = "Please enter a valid email address.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

// Validation: Password not empty
function validatePassword() {
  const value = passwordInput.value.trim();

  if (value === "") {
    passwordError.textContent = "Password cannot be empty.";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

// Check hardcoded credentials
function validateCredentials() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  return email === storedEmail && password === storedPassword;
}

// Form submit handler
loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page reload

  const emailValid = validateEmail();
  const passwordValid = validatePassword();

  if (!emailValid || !passwordValid) {
    return; // Don’t try to log in until both inputs are valid
  }

  if (validateCredentials()) {
    alert("Login successful! Redirecting...");
    window.location.href = "/preferences.html"; // Update path later
  } else {
    emailError.textContent = "Invalid email or password.";
    passwordError.textContent = "Invalid email or password.";
  }
});
