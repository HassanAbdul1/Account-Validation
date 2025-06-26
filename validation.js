const form = document.getElementById('registerForm');
const submitBtn = document.getElementById('submitBtn');

const fields = {
  fullName: {
    input: document.getElementById('fullName'),
    error: document.getElementById('fullNameError'),
    validate: (v) => v.trim().length >= 2,
    message: "Full Name is required (min 2 characters)."
  },
  email: {
    input: document.getElementById('email'),
    error: document.getElementById('emailError'),
    validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    message: "Please enter a valid email address."
  },
  password: {
    input: document.getElementById('password'),
    error: document.getElementById('passwordError'),
    validate: (v) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v),
    message: "Password must be at least 8 characters with a number and letter."
  },
  confirmPassword: {
    input: document.getElementById('confirmPassword'),
    error: document.getElementById('confirmPasswordError'),
    validate: () => fields.confirmPassword.input.value === fields.password.input.value,
    message: "Passwords must match."
  },
  phone: {
    input: document.getElementById('phone'),
    error: document.getElementById('phoneError'),
    validate: (v) => v === "" || /^\+?\d{7,15}$/.test(v),
    message: "Please enter a valid phone number."
  }
};

function validateAllFields() {
  let allValid = true;

  for (let key in fields) {
    const field = fields[key];
    const value = field.input.value;
    const valid = key === 'confirmPassword' ? field.validate() : field.validate(value);

    if (!valid) {
      allValid = false;
      field.error.textContent = field.message;
    } else {
      field.error.textContent = '';
    }
  }

  submitBtn.disabled = !allValid;
}

Object.values(fields).forEach(field => {
  field.input.addEventListener('input', validateAllFields);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateAllFields();

  if (!submitBtn.disabled) {
    // All validations passed
    window.location.href = '/login.html'; // Change as needed
  }
});
