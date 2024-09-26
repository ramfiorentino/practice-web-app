// Hi! This is your root js file, where the logic comes together to make great changes!

document.getElementById("name").addEventListener("change", nameValidation);

function nameValidation() {
  console.log("Im name validating");
  document.getElementById("div-alert").style.backgroundColor = "red";
  document.getElementById("div-alert").innerHTML = "THIS IS SO WRONG";
}
