const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById("gen-btn")
let password1 = document.getElementById("randomp-1")
let password2 = document.getElementById("randomp-2")
let charLength = document.getElementById("char-length")
generateBtn.addEventListener("click", function(){
    
    password1.textContent = passwordGeneration()
    password2.textContent = passwordGeneration()
       
})
function passwordGeneration() {
    let randpass = ""
    let length = Number(charLength.value)
    for (let i = 0; i < length; i++ ) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        randpass += characters[randomIndex]
        }
    return randpass
}
password1.addEventListener("click", function(){
    copyPassword(password1.textContent)
})
password2.addEventListener("click", function(){
    copyPassword(password2.textContent)
})
function copyPassword(pass){
    navigator.clipboard.writeText(pass)
}