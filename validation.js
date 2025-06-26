const form = document.getElementById('registerForm');
const submitBtn = document.getElementById('submitBtn');

// Inputs
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const phoneInput = document.getElementById('phone');

// Error message containers
const fullNameError = document.getElementById('fullNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const phoneError = document.getElementById('phoneError');

// Validation functions
function validateFullName() {
  const value = fullNameInput.value.trim();
  if (value.length < 2) {
    fullNameError.textContent = "Full Name is required (min 2 characters).";
    return false;
  } else {
    fullNameError.textContent = "";
    return true;
  }
}

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

function validatePassword() {
  const value = passwordInput.value;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(value)) {
    passwordError.textContent = "Password must be at least 8 characters with a number and letter.";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = "Passwords must match.";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
}

function validatePhone() {
  const value = phoneInput.value.trim();
  const phoneRegex = /^\+?\d{7,15}$/;
  if (value !== "" && !phoneRegex.test(value)) {
    phoneError.textContent = "Please enter a valid phone number.";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

// Check all fields and toggle submit button
function validateForm() {
  const isFullNameValid = validateFullName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();
  const isPhoneValid = validatePhone();

  if (isFullNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid && isPhoneValid) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// Add input listeners
fullNameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
confirmPasswordInput.addEventListener('input', validateForm);
phoneInput.addEventListener('input', validateForm);

// Submit handler
form.addEventListener('submit', function (e) {
  e.preventDefault();
  validateForm();

  if (!submitBtn.disabled) {
    alert("Account created! Redirecting to login...");
    window.location.href = "/login.html";
  }
});
