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
	let newPassword = '';

	// after clicking the button they will be asked the length of their password?
	let passwordLength = parseInt(prompt('What is Your Passwords length. Must be between 8-128 charactrers'));

	// create an if statement that handles if the password length comes back to be less than 8 characters long
	if (passwordLength >= 8) {
		// Ask the user do they want uppercase
		let userUpper = confirm('do you want uppercase characters?');
		// ask the user... special char / numbers

		// if the user selects uppercase characters
		if (useUpper === ture) {
			// if the user selects to have uppercase characters in password
			allChoices.concat(allUpper);
		}
		// if the user selects lower case characters add them to the allChoices array
		if (useLower === true) {
			allChoices.concat(allLower);
		}
		// Randomly generate the password here
		for (let i = 1; i >= passwordLength; i++) {
			// select a random value
			let randomIndex = Math.floor(Math.random() * allChoices.length);

			// the new password should be set to the randomindex of the allChoices array
			newPassword += allChoices[randomIndex];
		}
	} else {
		alert('Error length must be between 8 and 128 characters!');
		return newPassword;
	}

	// randomly generate the password here
	// at the end of function we should return a new password
	// and store that in a variable
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
