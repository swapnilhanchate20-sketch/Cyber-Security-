const analyzeButton = document.getElementById("analyzeButton");
const result = document.getElementById("result");

analyzeButton.addEventListener("click", function () {

    const sender = document.getElementById("sender").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!sender || !subject || !email) {
        result.innerHTML = "<p>Please fill in all fields.</p>";
        return;
    }

    let score = 0;
    let warnings = [];

    // Check for suspicious words
    const suspiciousWords = [
        "urgent",
        "verify",
        "password",
        "account suspended",
        "click here",
        "confirm your account",
        "login",
        "security alert"
    ];

    const emailText = (subject + " " + email).toLowerCase();

    suspiciousWords.forEach(function(word) {
        if (emailText.includes(word)) {
            score += 10;
            warnings.push("Suspicious phrase detected: " + word);
        }
    });

    // Check for links
    if (email.includes("http://")) {
        score += 15;
        warnings.push("Unsecured HTTP link detected.");
    }

    if (email.includes("https://")) {
        warnings.push("Email contains a link. Check the destination carefully.");
    }

    // Check sender
    if (!sender.includes("@")) {
        score += 25;
        warnings.push("Sender email address appears invalid.");
    }

    // Limit score to 100
    if (score > 100) {
        score = 100;
    }

    // Display result
    let riskLevel;

    if (score >= 50) {
        riskLevel = "HIGH RISK";
    } else if (score >= 25) {
        riskLevel = "MEDIUM RISK";
    } else {
        riskLevel = "LOW RISK";
    }

    result.innerHTML = `
        <h3>${riskLevel}</h3>
        <p>Risk Score: ${score}/100</p>
        <br>
        <h4>Findings:</h4>
        ${
            warnings.length > 0
            ? "<ul>" + warnings.map(warning => `<li>${warning}</li>`).join("") + "</ul>"
            : "<p>No obvious phishing indicators detected.</p>"
        }
    `;
});

