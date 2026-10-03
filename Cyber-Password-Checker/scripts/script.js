const passwordInput = document.getElementById("password");
const strength = document.getElementById("strength");

passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const password = passwordInput.value;
        let score = 0;

        if (password.length >= 8) {
            score++;
        }

        if (/[A-Z]/.test(password)) {
            score++;
        }

        if (/[a-z]/.test(password)) {
            score++;
        }

        if (/[0-9]/.test(password)) {
            score++;
        }

        if (/[^A-Za-z0-9]/.test(password)) {
            score++;
        }

        if (score <= 2) {
            strength.textContent = "Weak";
        } else if (score <= 4) {
            strength.textContent = "Medium";
        } else {
            strength.textContent = "Strong";
        }
    }
});
