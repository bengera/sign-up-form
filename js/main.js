const form = document.getElementById('form');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const error = document.querySelector('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted');
    checkInputs();
})



function checkInputs(){

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First name cannot be empty');    
    } else {
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {
        setErrorFor(lastName, 'Last name cannot be empty');
    } else {
        setSuccessFor(lastName);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Looks like this is not an email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');

    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be empty');
    } else {
        setSuccessFor(password);
    }



}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    const errorIcon = formControl.querySelector('.i-error');
    errorIcon.setAttribute("style", "display:block");
    formControl.className = 'form-control error';     
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = '';
    formControl.className = 'form-control success';
    const errorIcon = formControl.querySelector('.i-error');
    errorIcon.setAttribute("style", "display:none");
    
    
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}