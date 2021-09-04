// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  //Asks user to enter the password length they would like
  var passwordLength= window.prompt("Please enter the length of your desired password (min 8 characters max 125 characters)");
  console.log(passwordLength);

  //Stop function if user presses cancel
  if(!passwordLength) {
    return;
  }

  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "1234567890";
  var special = "!@#$%^&*()?";

  var passwordcharSet= window.prompt("Type in criteria you would like to apply separated by a comma: uppercase, lowercase, number, special, all");
  
  //Generate password
  var charSet = "";

  if (passwordcharSet === "uppercase") {
    charSet = alphabet;
  }

  if (passwordcharSet === "lowercase") {
    charSet = alphabet.toLowerCase();
  }

  if (passwordcharSet === "number") {
    charSet = number;
  }

  if (passwordcharSet === "special") {
    charSet = special;
  }

  //adds all datatypes together
  if (passwordcharSet === "all") {
    charSet = alphabet+number+special+alphabet.toLowerCase();
  }

  if (passwordcharSet !== "all") {
    //function to add features by typing
    var passwordValue = [];
    for (let index = 0; index < passwordcharSet.length; index++) {
      passwordValue = passwordcharSet[index];
      charset = charset[index];
    }
  }

  var text="";
  for (let index = 0; index < passwordLength; index++) {
    var i = Math.floor(Math.random() * charSet.length);
    text += charSet.charAt(i);
  }
  return text;
}

  /*if (passwordLength > 8 || passwordLength < 125) {
    console.log(passwordLength);
    alert("You are generating a " + passwordLength + " character password")
    passwordCriteria();
    return passwordLength;
  } else if (passwordLength < 8 || passwordLength > 125 || passwordLength == null) {
    //if password is under or over max lengths, restart function
    alert("Insufficient password length entered, must be more than 8 characters and less than 125 characters");
    generatePassword();
  }*/

function writePassword() {
  var password = generatePassword();
  var passwordcharSet = document.querySelector("#password");

  passwordcharSet.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
