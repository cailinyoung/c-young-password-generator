// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
// ask user for password length 8-128 characters 
var characterLength = Number(prompt("How many characters would you like your password to be?"));
console.log(characterLength);
  while(isNaN(characterLength) || characterLength<8 || characterLength>128) characterLength = Number(prompt("How many characters would you like your password to be?"));

// ask user about lowercase character preference
var charLower = confirm("Would you like your password to contain lowercase letters?");
console.log(charLower);

// ask user about uppercase characteter preference 
var charUpper = confirm("Would you like your password to contain uppercase letters?");
console.log(charUpper);

// ask user about number preference 
var charNumber = confirm("Would you like your password to contain numbers?");
console.log(charNumber);

// ask user about special character preference 
var charSpecial = confirm("Would you like your password to contain special letters?");
console.log(charSpecial);

// confirming at least 1 character type 
while(!charLower&& !charUpper&& !charNumber&& !charSpecial){
  alert("You must have at least one character type");
   charLower = confirm("Would you like your password to contain lowercase letters?");
   charUpper = confirm("Would you like your password to contain uppercase letters?");
   charNumber = confirm("Would you like your password to contain numbers?");
   charSpecial = confirm("Would you like your password to contain special letters?");
}
// random generator
// make an array, if yes.. 4 arrays = specifications, 5th array = empty pool. 


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
