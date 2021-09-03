// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphabet= ["A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers=[1,2,3,4,5,6,7,8,9,0];
var specialCharacters=["!", '@', '#', '$', '%', '^', '&', '*', '(', ')'];

//Get random function
function getRandom(arrayInput) {
  var i= Math.floor(Math.random() * arrayInput.length);
  return arrayInput[i];
}

// Write password to the #password input
function generatePassword() {
  //Asks user to enter the password length they would like
  var passwordLength= window.prompt("Please enter the length of your desired password (max 25 characters)");

  for (let index = 0; index < passwordLength; index++) {
  //Create new array that chooses an array, then chooses random element from that array
  var getRand = [getRandom(alphabet), getRandom(numbers), getRandom(specialCharacters)];
  //Choose random number from array.length e.g. 2 from either alphabet, numbers, specialCharacters arrays
  var i = Math.floor(Math.random() * getRand.length);
  var choice= getRand[i]; //display the array and chosen array index e.g. 2nd item in specified array
  console.log(choice);
  }
  return;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
