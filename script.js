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

  var passwordcharSet= window.prompt("Type in criteria you would like to apply (e.g. uns): uppercase = u, lowercase = l, number = n, special = s, all criteria = all");

  //Generate password

  if(!passwordcharSet) { //uppercase default if left blank
  var charSet = alphabet;
  } else {
    charSet = ""; //empty string if options entered
  }

  //finally figured out the selecting part!!!!
  //if prompt string includes specified part of string, add string to charSet
  //This method works, but you can write any word containing the specified letters and it will work, will need to change for real world app
  //can change it to full word, but I feel that is too much typing

  if (passwordcharSet.includes("u")) {
    charSet += alphabet;
  }

  if (passwordcharSet.includes("l")) {
    charSet += alphabet.toLowerCase();
  }

  if (passwordcharSet.includes("n")) {
    charSet += number;
  }

  if (passwordcharSet.includes("s")) {
    charSet += special;
  }

  //all adds all the strings together
  if (passwordcharSet === "all") {
  charSet += alphabet+number+special+alphabet.toLowerCase();
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
