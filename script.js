// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  //Asks user to enter the password length they would like
  var passwordLength= prompt("Please enter a number for the length of your desired password (min 8 characters max 128 characters)");

  //if letter entered instead of number
  if (isNaN(passwordLength)) {
      alert("please enter numbers only")
      return;
    }

    //if number not between specified length or null
   if (passwordLength < 8 || passwordLength > 128) {
    alert("invalid password length entered, password must be between 8 and 128 characters")
    return;
   } 
  
  //options strings
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "1234567890";
  var special = "!@#$%&*()?.+/<>[]|";

  var passwordcharSet= prompt("Type in criteria you would like to apply (e.g. uns): uppercase = u, lowercase = l, number = n, special = s, all criteria = all");

  //if number entered instead of letter
  if(!isNaN(passwordcharSet)) {
    alert("Please enter letters only");
  } else {

  var charSet = ""; //empty string to create new password
  var options = ["u", "l", "n", "s", "all"];

  //finally figured out the selecting part!!!!
  //if prompt string includes specified part of string, add string to charSet

  if (passwordcharSet.includes(options[0])) {
    charSet += alphabet;
  }

  if (passwordcharSet.includes(options[1])) {
    charSet += alphabet.toLowerCase();
  }

  if (passwordcharSet.includes(options[2])) {
    charSet += number;
  }

  if (passwordcharSet.includes(options[3])) {
    charSet += special;
  }

  //all adds all the strings together
  if (passwordcharSet === options[4]) {
  charSet += alphabet+number+special+alphabet.toLowerCase();
  }

  //If string entered doesn't match the specified strings, alert user
  else if (!passwordcharSet.includes(options[0]) && !passwordcharSet.includes(options[1]) && !passwordcharSet.includes(options[2]) && !passwordcharSet.includes(options[3]) && !passwordcharSet.includes(options[4])) {
    alert("invalid option entered");
  }

  var text="";
  for (let index = 0; index < passwordLength; index++) {
    var i = Math.floor(Math.random() * charSet.length);
    text += charSet.charAt(i);
  }
  return text;
}
}

function writePassword() {
  var password = generatePassword();
  var passwordcharSet = document.querySelector("#password");

  passwordcharSet.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
