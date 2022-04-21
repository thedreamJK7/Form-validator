const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-container error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-container success";
}

// check email
function validateEmail(input) {
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid')
    }
}

function checkRequired(inputArray) {
    inputArray.forEach(element => {
        if(element.value.trim() == '') {
            showError(element, `${messageF(element)} is required`);
        } else {
            showSuccess(element);
        }
    });
}

// Message function
function messageF(element) {
    return element.id.charAt(0).toUpperCase() + element.id.slice(1);
}

// CheckLength Function
function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${messageF(input)} must be at least ${min}`);
    } else if (input.value.length > max) {
        showError(input, `${messageF(input)} must be less than ${max} character`);
    } else {
        showSuccess(input);
    }
}

// Match password
function matchPassword(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Password is not mutch')
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 15)
    validateEmail(email);
    matchPassword(password, password2)
    // if(username.value == '') {
    //     showError(username, "Username must be at least 3 characters");
    // } else {
    //     showSuccess(username);
    // }
    // if (email.value == "") {
    //     showError(email, "Email is not valid");
    // } else if (!validateEmail(email.value)) {
    //     showError(email, "Email is not valid");
    // } else {
    //     showSuccess(email);
    // }
    // if (password.value == "") {
    //     showError(password, "Password must be at least 6 characters");
    // } else {
    //     showSuccess(password);
    // }
    // if (password2.value == "") {
    //     showError(password2, "Password2 is required");
    // } else {
    //     showSuccess(password2);
    // }
})
