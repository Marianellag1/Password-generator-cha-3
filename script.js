// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  passwordText.value = password;

}
//   GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var chooseCharac = "";
  var completedPassword = ""//with help by Paul TA
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  //ask if they want uppercase?
  //ask if they want lowercase?
  //ask if they want special characters?
  // console.log(keyboardCharacters);
  //if they want numerics?
  var upperLetters = confirm("Do you want to include upper-case characters in your password?");
  var lowLetters = confirm("Do you want to include lower-case characters in your password?");
  var keyboardCharacters = confirm("Do you want to include special characters in your password?")
  var numberLine = confirm("Do you want to include numbers in your password?")

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  //ask what the length should be 
  //answer nedds to be between 8 to 128 characters
  var desiredPasswordLength = prompt("How long do you want the password to be? Must be between 8 - 128 characters long");//help from Paul TA
  if ((parseInt(desiredPasswordLength) >= 8) && parseInt(desiredPasswordLength) <= 128) {//help from TA Paul

    console.log(desiredPasswordLength);
    console.log(chooseCharac);
    //check to see if uppercase characters was desired and add the characters to the bank of available characters
    //check to see if lowercase characters was desired and add the characters to the bank of available characters
    if (upperLetters) {
      chooseCharac = chooseCharac + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    console.log(upperLetters);
    if (lowLetters) {
      chooseCharac = chooseCharac + "abcdefghijklmnopqrstuvwxyz"//for future reference can use ".toLowerCase();" help from TA Paul
    }
    console.log(lowLetters);

    if (numberLine) {
      chooseCharac = chooseCharac + "123456789"
    }
    if (keyboardCharacters) {
      chooseCharac = chooseCharac + "~!@#$%^&*-_"
      console.log(keyboardCharacters);
    }
    
    console.log(numberLine)
    for (var i = 0; i < parseInt(desiredPasswordLength); i++) {//help from Paul TA
      
      //get a random index based on the length of the character bank and use that to select one character from that bank and then concatenate it onto the password
      var randomIndex = Math.floor(Math.random() * chooseCharac.length);//help from TA Paul
      console.log(randomIndex);
      var randomCharacter = chooseCharac[randomIndex];
      console.log(randomCharacter);
      completedPassword = completedPassword + randomCharacter;//help from Paul TA
      console.log(completedPassword);
    }
    
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    //all prompts anwered---verify that atleast one character type is chosen
    
    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    
    //return completed password
    return completedPassword;
  } else {
    //they enter the incorrect size
    alert("Please choose between 8 and 128 for length of password");
    alert("Please choose either upper-case, lower-case, special character or number for password, or try again");
    return "";
    // generatePassword();
  }
}
// if (chooseCharac != chooseCharac) {
//   console.log( chooseCharac)
  // }