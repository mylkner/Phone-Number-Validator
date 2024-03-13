const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");

function inputCheck(input) {
    input = String(userInput.value);

    if (input === "") {
        alert("Please provide a phone number");
        return;
    }

    const message = document.createElement("div");
    message.className = "message";
    message.textContent = check(input);
    message.style.color = color(message.textContent);
    results.appendChild(message);

    userInput.value = "";
}

function check(input) {
    const phoneRegex =
        /^(1\s?)?(\((\d{3})\)|(\d{3}))[-\s]?(\d{3})[-\s]?(\d{4})$/;

    return phoneRegex.test(input)
        ? `Valid US number: ${input}`
        : `Invalid US number: ${input}`;
}

function color(text) {
    return text.includes("Valid") ? "green" : "red";
}

checkBtn.addEventListener("click", inputCheck);

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        inputCheck();
    }
});

clearBtn.addEventListener("click", () => {
    results.textContent = "";
});
