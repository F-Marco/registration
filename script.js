const form = document.getElementById('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const genderMale = document.getElementById('gendermale');
const genderFemale = document.getElementById('genderfemale');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('passwordtwo');


form.addEventListener('submit',e  => {
     
    e.preventDefault();

    checkInputs();

});


function checkInputs(){

const firstNameValue = firstName.value.trim();
const lastNameValue = lastName.value.trim();
const genderMaleValue = genderMale.checked;
const genderFemaleValue = genderFemale.checked;
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const passwordTwoValue = passwordTwo.value.trim();
           
           // check inputs
          
    if (firstNameValue === '') {
        // error message 
        setErrorFor(firstName, 'please enter your first name');
    } else {
        // succes message
        setSuccessFor(firstName);
    }

    if (lastNameValue === '') {

        setErrorFor(lastName,'please enter your last name');
        
    } else { 
        setSuccessFor(lastName);
    }

    if ( !genderMaleValue && !genderFemaleValue) {

        setErrorFor(genderMale,'please select your gender')

        
    } else {

        setSuccessFor(genderMale.parentElement);
        
    }

    if (emailValue === '') {

        setErrorFor(email,'please enter your email')

        
    } else {

        setSuccessFor(email);
        
    }

    if (passwordValue === '') {

        setErrorFor(password,'please enter your password')

        
    } else {

        setSuccessFor(password);
        
    }

    if (passwordTwoValue === '') {

        setErrorFor(passwordTwo,'please re-enter your password')

        
    } else {

        setSuccessFor(passwordTwo);
        
    }

    if (passwordValue !== passwordTwoValue) {

        setErrorFor(passwordTwo,'passwords do not match');
        
    } else {
        
        setSuccessFor(passwordTwo)
    }

    if (passwordTwoValue && passwordValue === '') {

        setErrorFor(password,'please enter your password')
        setErrorFor(passwordTwo,'please re-enter your password') 
    }

}

function setErrorFor(input, message){
    
    // add error message & ad class
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';

}

function setSuccessFor(input){
    
    // ad class
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}
