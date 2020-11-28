// Assignment Code // Our goal is to randomly generate

// when the user comes to the screen
// they should be able to click the generate password button

// We need 4 arrays to store possible password data
let allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let allSpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];


var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// We'll need a generatePassword function that creates a password based on the user criteria
function generatePassword() {
	// an array to store the password data the user selected
	let allChoices = [];
	// a variable to store the password data after the user selects the criteria
	let newPassword = '';

	// Ask the user how long they want their password to be
	// after clicking the button they will be asked the length of their password?
	let passwordLength = parseInt(prompt('What is Your Passwords length. Must be between 8-128 charactrers'));
	// use that number to specify how long the users password should be
	// proceed to asking user which other characters they want in their password

	
	// if the password length is less than 8 characters or greater than 128 characters than...
	if (passwordLength < 8 || passwordLength > 128) {
		// than we should alert an error message and return
		alert('Error! length must be between 8 and 128 characters!');
		return;
		// else if the password length is greater than 8 characters and less than 128 characters
		// proceed to the next question...
	} else {

		
		return newPassword;
	}

	// randomly generate the password here
	// at the end of function we should return a new password
	// and store that in a variable
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);