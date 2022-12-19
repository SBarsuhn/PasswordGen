// Assignment code here
// STUFF I ADDED
const lowercase = "abcdefghijklmnopqrstuvwxyz" ;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const numbers = "1234567890" ;
const symbols = "!@#$%^&*()_=-+[]{}" ;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  let answer1 = prompt("Do you want lowercase letters in your password?");

  let answer2 = prompt("Do you want uppercase letters in your password?");

  let answer3 = prompt("Do you want numbers in your password?");
  
  let answer4 = prompt("Do you want symbols in your password?");
  


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// STUFF I ADDED
function randomLowercase() {
  if (answer1 === "yes")
  return lowercase[Math.floor(Math.random() * lowercase.length)];

}
console.log(randomLowercase());


function randomUppercase() {
  if (answer2 === "yes")
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}
console.log(randomUppercase());


function randomNumber() {
  if (answer3 === "yes")
  return numbers[Math.floor(Math.random() * numbers.length)];
}
console.log(randomNumber());


function randomSymbol() {
  if (answer4 === "yes")
  return symbols[Math.floor(Math.random() * symbols.length)];
}
console.log(randomSymbol());