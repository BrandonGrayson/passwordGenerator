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

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// We'll need a generatePassword function that creates a password based on the user criteria
function generatePassword() {
	// an array to store the password data the user selected
	let allChoices = [];
	// a variable to store the password data after the user selects the criteria
	let newPassword = '';

	// Ask the user how long they want their password to be
	// store response in passwordLength variable
	let passwordLength = parseInt(prompt('What is Your Passwords length. Must be between 8-128 charactrers'));
	// use that number to specify how long the users password should be
	// proceed to asking user which other characters they want in their password
	
	// if the password length is greater than or equal to 8 characters and less than or equal to 128 characters than...
	if (passwordLength >= 8 && passwordLength <= 128) {
		// we want to ask the user would they like to use uppercase characters
		console.log(passwordLength)

		// check to see if the user would like to use uppercase characters
		let useUpper = confirm('Would you like to use Uppercase characters?')
		console.log(useUpper)
		// check to see if the user would like to use lowercase characters
		let useLower = confirm('Would you like to use lowercase characters?')
		console.log(useLower)
		// check to see if the user would like to use numbers
		let useNumbers = confirm('Would you like to use Numbers?')
		console.log(useNumbers)
		// check to see if the user would like to use special characters
		let useSpecial = confirm('Would you like to use Special Characters?')
		console.log(useSpecial)

		// set up an if statement to add user Picks to allchoices array options
		if (useUpper === true) {
			allChoices = allChoices.concat(allUpper)
			console.log(allChoices)
		}
		// if useLower = true add useLower to allchoices array
		if (useLower === true) {
			allChoices = allChoices.concat(allLower)
		}
		// if useNumbers = true add useNumbers to array choices
		if (useNumbers === true) {
			allChoices = allChoices.concat(allNumbers)
		}
		// if useSpecial = true add useSpecial to allChoices array
		if (useSpecial === true) {
			allChoices = allChoices.concat(allSpecial)
		}

		// generate a random password for the user
		// we'll need to loop through our array based on the password length
		// and select a random number based on the index of the array
		for (let i = 1; i <= passwordLength; i++) {
			let randomIndex = Math.floor(Math.random() * allChoices.length)
			console.log(randomIndex)
			newPassword += allChoices[randomIndex]
		}
	} else {
		// else if password doesnt meet criteria then we should send an alert message...
		alert('Error! Password Length must be betweeen 8-128 characters')
		// return user to screen so they can try again
		return ('Try Again!!!')
	}
	// Once password is generated display to user
	return newPassword;
}
		
	//	return newPassword;
	

	// randomly generate the password here
	// at the end of function we should return a new password
	// and store that in a variable


