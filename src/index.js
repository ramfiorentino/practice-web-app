// Hi! This is your root js file, where the logic comes together to make great changes!

// listening to SUBMIT BUTTON
document.getElementById("registerForm").addEventListener("submit", handleSubmit);

//Passing event to the callback for safe preventDefault
function handleSubmit(event) {
    nameValidation(event);
    event.preventDefault();
  }

// listening to NAME
//document.getElementById("name").addEventListener("change", nameValidation);


function nameValidation() {
  console.log("Function nameValidations is being called");

  // turning the user name string into an array, separating items wherever there is a blank space
  const userName = document.getElementById("name").value.split(" ");
  console.log("Split user name " + userName);

  if (userName.length >= 2) {
    console.log("Correct: The name has at least two words.");
  } 
  else {
    const alertMessage = "Wrong, the name has at least two words.";
    console.log(alertMessage);
    document.getElementById("name").style.border = "3px solid red";
    document.getElementById("name-error").innerHTML = "Wrong, the name has at least two words.";
    document.getElementById("name-error").hidden = false;
  };

}
