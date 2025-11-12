// Hardcoded "database" (email -> password)
// Passwords meet the required complexity rules.
const USERS = {
  "test@example.com": "Test@1234",
  "dev@acme.io": "A1b2c3d!"
};

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const pwdInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const pwdError = document.getElementById("pwdError");
const forgot = document.getElementById("forgotLink");
const togglePw = document.getElementById("togglePw");

const authCard = document.getElementById("authCard");
const welcomeCard = document.getElementById("welcomeCard");
const welcomeEmail = document.getElementById("welcomeEmail");
const logoutBtn = document.getElementById("logoutBtn");

function resetErrors() {
  emailError.textContent = "";
  pwdError.textContent = "";
  emailInput.setAttribute("aria-invalid", "false");
  pwdInput.setAttribute("aria-invalid", "false");
}

function validatePassword(pw) {
  // length 8-16
  if (pw.length < 8 || pw.length > 16) return "Password must be 8–16 characters.";
  // at least one uppercase
  if (!/[A-Z]/.test(pw)) return "Password must include an uppercase letter.";
  // at least one lowercase
  if (!/[a-z]/.test(pw)) return "Password must include a lowercase letter.";
  // at least one digit
  if (!/[0-9]/.test(pw)) return "Password must include a number.";
  // at least one symbol (non-alphanumeric)
  if (!/[^A-Za-z0-9]/.test(pw)) return "Password must include a symbol.";
  return "";
}

function showWelcome(email) {
  welcomeEmail.textContent = email;
  authCard.classList.add("hidden");
  welcomeCard.classList.remove("hidden");
}

function showLogin() {
  welcomeCard.classList.add("hidden");
  authCard.classList.remove("hidden");
  form.reset();
  resetErrors();
}

togglePw.addEventListener("click", () => {
  const isPw = pwdInput.getAttribute("type") === "password";
  pwdInput.setAttribute("type", isPw ? "text" : "password");
  togglePw.setAttribute("aria-pressed", isPw ? "true" : "false");
});

forgot.addEventListener("click", (e) => {
  e.preventDefault();
  alert("This is a demo. Please contact support@example.com to reset your password.");
});

logoutBtn.addEventListener("click", () => {
  showLogin();
  emailInput.focus();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resetErrors();

  const email = emailInput.value.trim();
  const pw = pwdInput.value;

  if (!email) {
    emailError.textContent = "Email must not be empty.";
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.focus();
    return;
  }

  // Validate password rules regardless of email existence
  const pwMsg = validatePassword(pw);
  if (pwMsg) {
    pwdError.textContent = pwMsg;
    pwdInput.setAttribute("aria-invalid", "true");
    pwdInput.focus();
    return;
  }

  // Check email existence
  if (!Object.prototype.hasOwnProperty.call(USERS, email)) {
    emailError.textContent = "This email does not exist.";
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.focus();
    return;
  }

  // Email exists, verify password
  if (USERS[email] !== pw) {
    pwdError.textContent = "Incorrect password for this email.";
    pwdInput.setAttribute("aria-invalid", "true");
    pwdInput.focus();
    return;
  }

  // Success!
  showWelcome(email);
});
