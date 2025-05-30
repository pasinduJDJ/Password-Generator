const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxzy"
const numberSet = "123456789"
const symbelSet = "~!@#$%^&*()_+/"

const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData = (dataset => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}) 
const generatePassword = (password = "") => {
    if(upperInput.checked){
        password = password + getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password = password + getRandomData(lowerSet)
    }
    if(numberInput.checked){
        password = password + getRandomData(numberSet)
    }
    if(symbolInput.checked){
        password = password + getRandomData(symbelSet)
    }
    if(password.length < totalChar.value){
        return generatePassword(password);
    }
    passBox.innerText = truncateString(password,totalChar.value);
}

document.getElementById("btn").addEventListener("click", function(){
    generatePassword();
})

function truncateString(str, num){
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    }else{
        return str;
    }
}