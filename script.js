const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "#@!$&+=";

const allChar = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passwordBox.value = password;
}

document.querySelector(".generatebutton").addEventListener("click", () => {
    createPassword()
})

function copyPassword() {
    navigator.clipboard.writeText(passwordBox.value)
}

const img = document.querySelector(".copyImage")

img.addEventListener("click", () => {
    if(!passwordBox.value) return;
    if(img.src === 'photo.png') return

    img.src = 'photo.png'
    copyPassword();

    setTimeout(()=>{
        img.src = 'copy.png'
    }, 3000)
})