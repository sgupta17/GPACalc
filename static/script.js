function login() {
  var textField = document.getElementById("text-field");
  var value = textField.value;
  console.log("You have failed him");
  window.location = "http://0.0.0.0:8080/"
}

function changeText(){
  var textField = document.getElementById("text-field");
  var value = textField.value;
  var textToChange = document.getElementById("text-to-change");
  textToChange.innerHTML = value;
}
