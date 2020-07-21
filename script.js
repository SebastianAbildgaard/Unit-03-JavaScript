// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// declare varaibles from dom after load to make sure they are current
const results = document.querySelector("#textarea");
const UNInum = [48, 57];
const UNIupper = [65, 90];
const UNIlower = [97, 122];
const UNIsym = [33, 47];
document.querySelector("#generate").addEventListener('click', () => {
    const length = document.querySelector("#length").value;
    const upper = document.querySelector("#uppercase").checked;
    const lower = document.querySelector("#lowercase").checked;
    const numbers = document.querySelector("#numbers").checked;
    const symbols = document.querySelector("#symbols").checked;
    const randSelector = [];
    const password = [];

    if (upper===false & numbers===false & symbols===false & lower===false){
      alert("Selection is Required");
    }
    else {
//String.fromCharCode();
      if (upper === true) {
          for (let i = UNIupper[0]; i <= UNIupper[1]; i++) {
            randSelector.push(i);
         }
// console.log(randSelector[6]);
      }
      if (numbers === true) {
          for (let i = UNInum[0]; i <= UNInum[1]; i++) {
             randSelector.push(i);
          }
// console.log(randSelector);
     }
     if (symbols === true) {
         for (let i = UNIsym[0]; i <= UNIsym[1]; i++) {
            randSelector.push(i);
          }
     }
     if (lower === true) {
          for (let i = UNIlower[0]; i <= UNIlower[1]; i++) {
            randSelector.push(i);
         }
     }
      for (let i = 0; i < length; i++) {
        password.push(String.fromCharCode(randSelector[Math.floor(Math.random() * randSelector.length)]))
     }
     results.textContent = password.join("");
   }
})
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





