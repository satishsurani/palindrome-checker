const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    const textInput = document.getElementById("text-input").value;
    const lowerCaseStr = textInput.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    if (textInput === "") {
        alert("Please input a value");
    }
    else {
        lowerCaseStr === [...lowerCaseStr].reverse().join('') ? result.innerHTML = `${textInput} is a palindrome.` : result.innerHTML = `${textInput} is not a palindrome`
        
    }
})