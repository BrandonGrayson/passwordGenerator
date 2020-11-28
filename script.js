// Assignment Code // Our goal is to randomly generate

// when the user comes to the screen 
// they should be able to click the generate password button 



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// We'll need a generatePassword function that creates a password based on the user criteria
function generatePassword() {

  const newPassword = '';

// after clicking the button they will be asked the length of their password?
const passwordLength = prompt('What is Your Passwords length. Must be between 8-128 charactrers')

// create an if statement that handles if the password length comes back to be less than 8 characters long

  // randomly generate the password here
  // at the end of function we should return a new password
  // and store that in a variable
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
