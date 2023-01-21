const form = document.querySelector("form");
const email = document.getElementById("mail");
const country = document.getElementById("country");
const zipCode = document.getElementById("zip-code");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirmation");

// errors
const error = document.querySelector("span.error");
const countryErrorMsg = document.querySelector("#country + span.error");

email.addEventListener('input', () => {
    if (email.validity.valid) {
        error.textContent = "";
        error.className = "error";
    } else {
        emailError();
    }
});

country.addEventListener('input', () => {
    if (country.validity.valid) {
        countryErrorMsg.textContent = "";
        countryErrorMsg.className = "error";
    } else {
        countryError();
    }
});

form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
        emailError();
        e.preventDefault();
    }
    if (!country.validity.valid) {
        countryError();
        e.preventDefault();
    }
    e.preventDefault();
});

function emailError() {
    if (email.validity.valueMissing) {
        error.textContent = "Enter a valid email address!";
    } else if (email.validity.tooShort) {
        error.textContent = "Email too short"
    }

    error.className = "error active";
}

function countryError() {
    if (country.validity.valueMissing) {
        countryErrorMsg.textContent = "Enter your country";
    } else if (country.validity.tooShort) {
        countryErrorMsg.textContent = "Too short";
    }

    countryError.className = "error active"
}