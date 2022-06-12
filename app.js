function randomPass() {
    let variable = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";
    let password = " ";

  for (let i = 0; i < 16; i++) {
    let randomNum = Math.random() * variable.length;
    password += variable.substring(randomNum, randomNum + 1);
  }
  document.getElementById('txt').innerHTML = password;
  document.getElementById('txt').value = password;
}

//create a function that copies the password to the clipboard
function copyPassword() {
  let copyText = document.getElementById('txt');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}