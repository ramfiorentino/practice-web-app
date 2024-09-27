
document.getElementById("registerForm").addEventListener("submit", handleSubmit);

//Passing event to the callback for safe preventDefault of form submission
function handleSubmit(event) {
  event.preventDefault();
  // 📌 INPUT ELEMENTS: Always retrieve the value of an input field inside an event listener
  //                Retrieving the value immediatly when the script runs means 
  //                the user has not had a chance to type anything into the field yet.
  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const userPassword = document.getElementById("password").value;
  // 📌 GROUP DOM LOOKUPS: INCLUDE ERROR <P>s

  nameValidation(userName);
  emailValidation(userEmail);
  passwordValidation(userPassword);
}

//  📌 DISPLAY AND HIDE ERROR HELPER FUNCTIONS: to not repeat myself
//
//


// VALIDATION FUNCTIONS
function nameValidation(userName) {
  console.log("Function nameValidations is being called");
  let splitName = userName.split(" ");
  console.log("Split user name: " + splitName);

  if (splitName.length >= 2) {
    console.log("Correct: The name has at least two words.");
    document.getElementById("name").style.border = "1px dashed aqua";
    document.getElementById("name-error").hidden = true;
  } else {
    console.log("Wrong, the name has at least two words.");

    document.getElementById("name").style.border = "3px solid red";
    document.getElementById("name-error").innerHTML =
      "Wrong, the name has to have at least two words.";
    document.getElementById("name-error").style.color = "red";
    document.getElementById("name-error").hidden = false;
  }
}

function emailValidation(userEmail) {
  console.log("EmailValidations is being called");
  console.log(userEmail);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(userEmail)) {
    console.log("Correct: The email format is valid.");
    document.getElementById("email").style.border = "1px dashed aqua";
    document.getElementById("email-error").hidden = true;
  } else {
    console.log("Wrong: The email format is invalid.");
    document.getElementById("email").style.border = "3px solid red";
    document.getElementById("email-error").innerHTML = "Invalid email format.";
    document.getElementById("email-error").style.color = "red";
    document.getElementById("email-error").hidden = false;
  }

}

function passwordValidation(userPassword) {
  console.log("passwordValidations is being called");
  console.log("logged password :" + userPassword);
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (passwordPattern.test(userPassword)) {
    console.log("Correct: The password format is valid.");
    document.getElementById("password").style.border = "1px dashed aqua";
    document.getElementById("pass-error").hidden = true;
  } else {
    console.log("Wrong: The password format is invalid");
    document.getElementById("password").style.border = "3px solid red";
    document.getElementById("pass-error").innerHTML = "Your password must have at least one lowercase letter, one uppercase letter, one digit, and is at least 8 characters long";
    document.getElementById("pass-error").style.color = "red";
    document.getElementById("pass-error").hidden = false;
  }
}