var generateBtn = document.querySelector("#generate");

// password characters 
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

// Function to generate password randly
function generatePassword() {
  var password = "";
  
  // Prompt for password length
  var passwordLength = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  // Prompt for character types to include
  var useLowercase = confirm("Include lowercase characters?");
  var useUppercase = confirm("Include uppercase characters?");
  var useNumeric = confirm("Include numeric characters?");
  var useSpecial = confirm("Include special characters?");

  // Validate one
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("You must select at least one character type.");
    return "";
  }

  // Build 
  var charSet = "";
  if (useLowercase) charSet += lowercaseChars;
  if (useUppercase) charSet += uppercaseChars;
  if (useNumeric) charSet += numericChars;
  if (useSpecial) charSet += specialChars;

  // Generate the password
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  return password;
}

// Function for  HTML 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);