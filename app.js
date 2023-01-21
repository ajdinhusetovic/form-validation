const form = document.querySelector("form");
const email = document.getElementById("mail");
const country = document.getElementById("country");
const zipCode = document.getElementById("zip-code");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password2");

// errors
const error = document.querySelector("span.error");
const countryErrorMsg = document.querySelector("#country + span.error");
const zipCodeErrorMsg = document.querySelector("#zip-code + span.error");
const passwordErrorMsg = document.querySelector("#password + span.error");
const passwordConfirmErrorMsg = document.querySelector("#password2 + span.error");

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

zipCode.addEventListener('input', () => {
    if (zipCode.validity.valid) {
        zipCodeErrorMsg.textContent = "";
        zipCodeErrorMsg.className = "error";
    } else {
        zipCodeError();
    }
});

password.addEventListener('input', () => {
    if (password.validity.valid) {
        passwordErrorMsg.textContent = "";
        passwordErrorMsg.className = "error";
    } else {
        passwordError();
    }
});

passwordConfirm.addEventListener('input', () => {
    if (passwordConfirm.validity.valid) {
        passwordConfirmErrorMsg.textContent = "";
        passwordConfirmErrorMsg.className = "error";
    } else {
        passwordConfirmError();
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
    if (!zipCode.validity.valid) {
        zipCodeError();
        e.preventDefault();
    }
    if (!password.validity.valid) {
        passwordError();
        e.preventDefault();
    }
    if (!passwordConfirm.validity.valid) {
        passwordConfirmError();
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

function zipCodeError() {
    if (zipCode.validity.valueMissing) {
        zipCodeErrorMsg.textContent = "Enter zip code";
    } else if (zipCode.validity.tooShort) {
        zipCodeErrorMsg.textContent = "Too short";
    }

    zipCodeError.className = "error active";
}

function passwordError() {
    if (password.validity.valueMissing) {
        passwordErrorMsg.textContent = "Enter a password";
    } else if (password.validity.tooShort) {
        passwordErrorMsg.textContent = "Too short";
    }

    passwordError.className = "error active";
}

function passwordConfirmError() {
    if (passwordConfirm.validity.valueMissing) {
        passwordConfirmErrorMsg.textContent = "Enter password again";
    } else if (password.value !== passwordConfirm.value) {
        passwordConfirmErrorMsg.textContent = "Passwords don't match";
    }

    passwordConfirmError.className = "error active";
}

function checkPasswordMatch() {
    if (password.value === passwordConfirm.value) {
        return true;
    }else {
        return false;
    }
}

checkPasswordMatch();