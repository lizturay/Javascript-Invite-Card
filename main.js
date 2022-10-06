// ticket number generator
let min = 10000;
let max = 90000;
let num = Math.floor(Math.random() * min) + max;

// this will display the ticket number
document.getElementById("ticketNum").innerText = num;

// On click yes button
function maybeAlert() {
  alert("Perfect! :D");
}

// on click sign me up button
function signUpPrompt() {
  let name = prompt("Great! Please provide your name: ");
  prompt("Please provide your email: ");

  // this will display user name
  document.getElementById("userMsg").innerText = `See you then, ${name}!`;
}