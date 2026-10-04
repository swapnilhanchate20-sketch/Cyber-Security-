const transactionForm = document.getElementById("transactionForm");

transactionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const amount = Number(document.getElementById("amount").value);
    const location = document.getElementById("location").value.trim().toLowerCase();
    const previousLocation = document.getElementById("previousLocation").value.trim().toLowerCase();
    const transactionTime = document.getElementById("transactionTime").value;
    const newDevice = document.getElementById("newDevice").value;
    const international = document.getElementById("international").value;

    let riskScore = 0;
    let reasons = [];

    // Check transaction amount
    if (amount >= 50000) {
        riskScore += 30;
        reasons.push("High-value transaction detected.");
    } else if (amount >= 20000) {
        riskScore += 15;
        reasons.push("Transaction amount is higher than normal.");
    }

    // Check location change
    if (location !== previousLocation) {
        riskScore += 20;
        reasons.push("Transaction location differs from the previous transaction location.");
    }

    // Check transaction time
    const hour = Number(transactionTime.split(":")[0]);

    if (hour >= 0 && hour < 6) {
        riskScore += 20;
        reasons.push("Transaction occurred during unusual hours.");
    }

    // Check new device
    if (newDevice === "yes") {
        riskScore += 20;
        reasons.push("Transaction was made using a new device.");
    }

    // Check international transaction
    if (international === "yes") {
        riskScore += 10;
        reasons.push("International transaction detected.");
    }
