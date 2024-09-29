import {storeNewTeacher} from './storage'

//Handle registerForm Submit Event
// 📌 Always ✨retrieve the value of an input field inside an event listener.✨
// 📌 Before event user may not have a chance to input anything yet.
export function handleSubmit(event) {
  event.preventDefault();

  // USER INPUT ELEMENTS
  const userName = document.getElementById("name");
  const userEmail = document.getElementById("email");
  const userPassword = document.getElementById("password");
  // ERROR Messages <p> Elements
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");

  console.log(nameError, emailError, passwordError);  // Log to check if they're defined

  nameValidation(userName, nameError);
  emailValidation(userEmail, emailError);
  passwordValidation(userPassword, passwordError);

  if (nameValidation && passwordValidation && emailValidation) {
    const newTeacher = {
      name: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    };
  
    storeNewTeacher(newTeacher);
    document.getElementById("registerForm").style.display = "none";
    alert('Registration successful!');
    document.getElementById("loginForm").style.display = "flex";
    
    return true;
  }

}

// Display or hide Error Messages
export function nameErrorMessage(userName) {
  const errorMessage = document.getElementById("name-error");

  console.log("Wrong, the name has at least two words.");
  errorMessage.hidden = false;
  errorMessage.innerHTML = "Wrong, the name has to have at least two words.";
  errorMessage.style.color = "red";
  userName.classList.add("input-border--invalid");
}
export function emailErrorMessage(userEmail) {
  const errorMessage = document.getElementById("email-error");

  console.log("Wrong, the email format is invalid.");
  errorMessage.hidden = false;
  errorMessage.innerHTML = "Invalid email format.";
  errorMessage.style.color = "red";
  userEmail.classList.add("input-border--invalid");
}
export function passwordErrorMessage(userPassword) {
  const errorMessage = document.getElementById("password-error");

  console.log("Wrong: The password format is invalid");
  errorMessage.hidden = false;
  errorMessage.innerHTML =
    "Your password must have at least one lowercase letter, one uppercase letter, one digit, and is at least 8 characters long";
  errorMessage.style.color = "red";
  userPassword.classList.add("input-border--invalid");
}
export function clearErrorState(inputElement, errorElement) {
  inputElement.classList.remove("input-border--invalid", "input-border--valid");
  errorElement.hidden = true;
}
// Validate registerForm input values
export function nameValidation(userName, nameError) {
  console.log("Function nameValidations is being called");
  clearErrorState(userName, nameError);  // Reset error state and styling

  const nameInput = userName.value.trim();
  let splitName = nameInput.split(/\s+/);
  console.log("Split user name: " + splitName);

  if (splitName.length >= 2) {
    console.log("Correct: The name has at least two words.");
    userName.classList.add("input-border--valid");
    nameError.hidden = true;
    return true;
  } else {
    nameErrorMessage(userName);
    return false;
  }
}
export function emailValidation(userEmail, emailError) {
  console.log("EmailValidations is being called");
  clearErrorState(userEmail, emailError);

  const emailInput = userEmail.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput)) {
    console.log("Correct: The email format is valid.");
    userEmail.classList.add("input-border--valid");
    emailError.hidden = true;
    return true;
  } else {
    emailErrorMessage(userEmail);
    return false;
  }
}
export function passwordValidation(userPassword, passwordError) {
  console.log("passwordValidations is being called");
  clearErrorState(userPassword, passwordError);

  const passwordInput = userPassword.value;
  console.log(`logged password ${passwordInput}`);
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (passwordPattern.test(passwordInput)) {
    console.log("Correct: The password format is valid.");
    userPassword.classList.add("input-border--valid");
    passwordError.hidden = true;
    return true;
  } else {
    passwordErrorMessage(userPassword);
    return false;
  }
}