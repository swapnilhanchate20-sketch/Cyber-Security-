// ==========================
// LOGIN
// ==========================

const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");
const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");

// Show / hide password
if (toggle && password) {
  toggle.addEventListener("click", function () {
    password.type =
      password.type === "password" ? "text" : "password";
  });
}

// Login
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
      username.value === "investigator" &&
      password.value === "Test123!"
    ) {
      window.location.href = "Mfa.html";
    } else {
      alert("Invalid username or password!");
    }
  });
}


// ==========================
// MFA
// ==========================

const mfaForm = document.getElementById("mfaForm");
const mfaCode = document.getElementById("mfaCode");

if (mfaForm) {
  mfaForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (mfaCode.value === "123456") {
  window.location.href = "./Authorisation.html";
} else {
  alert("Invalid verification code!");
}
  });
}

// ==========================
// AUTHORIZATION
// ==========================

const roleSelect = document.getElementById("roleSelect");
const continueButton = document.getElementById("continueButton");
const accessMessage = document.getElementById("accessMessage");
const dashboardButton = document.getElementById("dashboardButton");

if (continueButton) {

  continueButton.addEventListener("click", function() {

    const selectedRole = roleSelect.value;

    if (selectedRole === "") {
      accessMessage.textContent = "Please select a role.";
      dashboardButton.style.display = "none";
      return;
    }

    accessMessage.textContent =
      "Access granted: " + selectedRole;

    dashboardButton.style.display = "block";
  });
}


// ==========================
// OPEN DASHBOARD
// ==========================

if (dashboardButton) {

  dashboardButton.addEventListener("click", function() {

    window.location.href = "./Dashboard.html";

  });

}

// ==========================
// DASHBOARD NOTES
// ==========================

const saveNotesButton = document.getElementById("saveNotesButton");
const investigationNotes = document.getElementById("investigationNotes");
const saveMessage = document.getElementById("saveMessage");

if (saveNotesButton) {

  saveNotesButton.addEventListener("click", function() {

    if (investigationNotes.value.trim() === "") {
      saveMessage.textContent = "Please enter investigation notes.";
      return;
    }

    saveMessage.textContent = "Notes saved successfully.";

  });

}
