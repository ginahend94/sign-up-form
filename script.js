const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    submitForm();
});




const isValidEmail = emailValue => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email.value.toString().toLowerCase());
}

// Take in value
const validate = () => {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    const errorMessage = element => element.parentElement.querySelector('.error');
    const errorIcon = element => element.parentElement.querySelector('.error-icon');
    const successIcon = element => element.parentElement.querySelector('.success-icon');

    const invalid = (element, message) => {
        element.classList.remove('valid');
        element.classList.add('invalid');
        errorMessage(element).textContent = message;
        errorIcon(element).style.display = 'block';
        successIcon(element).style.display = 'none';
    }

    const valid = (element) => {
        element.classList.remove('invalid');
        element.classList.add('valid');
        errorMessage(element).textContent = '';
        errorIcon(element).style.display = 'none';
        successIcon(element).style.display = 'block';
    }

// If value is empty, message is "required"
    if (firstName.value.trim() == '') {
        invalid(firstName, 'First name is required.');
    } else valid(firstName);

    if (lastName.value.trim() == '') {
        invalid(lastName, 'Last name is required.');
    } else valid(lastName);
    
    if (phone.value == '') {
        invalid(phone, 'Phone number is required.');
    }
// If value is wrong, message is "enter valid blablabla"
    else if (!phone.value.trim().match(/[0-9]/g)) {
        invalid(phone, 'Please enter a phone number.');
    } else valid(phone);

    if (email.value.trim() == '') {
        invalid(email, 'Email is required.');
    }
    else if (!isValidEmail(email)) {
        invalid(email, 'Please enter an email address.');
    } else valid(email);

    if (password.value == '') {
        invalid(password, 'Password is required.');
    } else if (password.value.length < 8) {
        console.log(password.value);
        invalid(password, 'Password must be at least 8 characters.');
    } else valid(password);

    if (confirmPassword.value.trim() == '') {
        if (password.value == '') {
            invalid(confirmPassword, 'Password is required.');
        }else invalid(confirmPassword, 'Please confirm password.');
    } else if (confirmPassword.value.trim() !== password.value.trim()) {
        invalid(confirmPassword, 'Passwords do not match.');
    } else valid(confirmPassword);
}

const submitForm = () => {
    validate();
    if (Array.from(inputs).every(a => a.classList.contains('valid'))) {
        console.log(window.location)
    }
}
// Change color
// Wiggle
// Show icon
// If everything is good, redirect to dummy welcome screen w/name and stuff
// Link at bottom goes to dummy login screen