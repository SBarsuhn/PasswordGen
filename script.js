// These are the starting strings that the script will pick from to add to "newstring"
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_=-+[]{}<>,./?";
var newstring = "";

// Assignment code here
// This function starts by asking how many and what type of characters you want. It will also revert the user back to the beginning if they chose options outside of the parameters
function generatePassword() {
  var answer5 = prompt("How many characters do you want your password to be?");
  if (answer5 <= 7 || answer5 >= 129) {
    alert("Your password must be between 8 and 128 characters long");
    generatePassword();
  } else {
    var answer1 = confirm("Do you want lowercase letters in your password?");
    var answer2 = confirm("Do you want uppercase letters in your password?");
    var answer3 = confirm("Do you want numbers in your password?");
    var answer4 = confirm("Do you want symbols in your password?");

    if (
      answer1 != true &&
      answer2 != true &&
      answer3 != true &&
      answer4 != true
    ) {
      alert(
        "You must have at leaast one character type to generate a password."
      );
      generatePassword();
    }

   // This section checks to see if you picked a certain character type and then adds it to the new string that the password will be generated from.
    if (answer1 === true) {
      newstring = newstring + lowercase;
    }

    if (answer2 === true) {
      newstring = newstring + uppercase;
    }

    if (answer3 === true) {
      newstring = newstring + numbers;
    }

    if (answer4 === true) {
      newstring = newstring + symbols;
    }
    var password = "";
 // This section will count up to the number of characters the user chose whiile adding a random character from the new string to generate the password.
    for (var index = 0; index < answer5; index++) {
      var result = newstring[Math.floor(Math.random() * newstring.length)];

      password = password + result;
    }
    return password;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
