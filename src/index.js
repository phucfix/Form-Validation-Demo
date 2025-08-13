import "./styles.css";

import { getInputErrorMessage } from './validate.js';

// DOM
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const passwordInput = form.querySelector("#password");
const confirmPasswordInput = form.querySelector("#confirm-password");

// Live validation
inputs.forEach(input => {
    const messageDiv = input.parentNode.querySelector(".message");

    input.addEventListener("input", () => {
        if (input.type === "password") return;

        if (input.validity.valid) {
            messageDiv.textContent = "✅ Looks good!";
            messageDiv.className = "message success";
        } else {
            messageDiv.textContent = "❌ " + getInputErrorMessage(input);
            messageDiv.className = "message error";
        }
    });
});

form.addEventListener("submit", (event) => {
    inputs.forEach(input => {
        const messageDiv = input.parentNode.querySelector(".message");

        if (!input.checkValidity()) {
            messageDiv.textContent = "❌ " + getInputErrorMessage(input);
            messageDiv.className = "message error";
            event.preventDefault();
        } else {
            messageDiv.textContent = "";
        }
    });
});

passwordInput.addEventListener("input", function() {
    const pass = passwordInput.value;
    const confirm = confirmPasswordInput.value;
    const messageDiv = this.parentNode.querySelector(".message");
    const confirmPasswordMessageDiv = confirmPasswordInput.parentNode.querySelector(".message");

    if (!this.validity.valid) {
        messageDiv.textContent = "❌ " + getInputErrorMessage(this);
        messageDiv.className = "message error";
    } else {
        messageDiv.textContent = "✅ Looks good!";
        messageDiv.className = "message success";
    }

    if (pass !== confirm) {
        confirmPasswordMessageDiv.textContent = "❌ " + "Fuck! Passwords must match";
        confirmPasswordMessageDiv.className = "message error";
    } else {
        confirmPasswordMessageDiv.textContent = "✅ Passwords matched";
        confirmPasswordMessageDiv.className = "message success";
    }
});

confirmPasswordInput.addEventListener("input", function() {
    const pass = passwordInput.value;
    const confirm = this.value;
    const messageDiv = this.parentNode.querySelector(".message");

    if (confirm !== pass) {
        messageDiv.textContent = "❌ " + "Fuck! Passwords must match";
        messageDiv.className = "message error";
    } else {
        messageDiv.textContent = "✅ Passwords matched";
        messageDiv.className = "message success";
    }
});
