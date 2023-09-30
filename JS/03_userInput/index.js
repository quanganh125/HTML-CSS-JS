//  EASY WAY with window promt

// let userName = window.prompt("What's your name?");
// console.log(userName);

//  DIFFICULT WAY with html textbox

let userName;

document.getElementById("submitButton").onclick = function () {
  userName = document.getElementById('userName').value;
  console.log(userName);

  document.getElementById("userNameLabel").innerHTML = "Hello " + userName;
}
