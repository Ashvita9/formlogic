const form = document.getElementById("signupForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  clearErrors();

  let isValid = true;

  // Name validation
  if (name.value.trim() === "") {
    showError(name, "Name is required");
    isValid = false;
  }

  // Email validation
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else if (!email.value.includes("@")) {
    showError(email, "Email must contain @");
    isValid = false;
  }

  // Password validation
  if (password.value.trim() === "") {
    showError(password, "Password is required");
    isValid = false;
  } else if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  // Confirm password validation
  if (confirmPassword.value.trim() === "") {
    showError(confirmPassword, "Confirm password is required");
    isValid = false;
  } else if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach(error => error.textContent = "");
}
