const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function palcheck(){
    const textInput = document.getElementById("text-input").value;
    const lowerCaseStr = textInput.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    if (textInput === "") {
        alert("Please input a value");
    }
    else {
        lowerCaseStr === [...lowerCaseStr].reverse().join('') ? result.innerHTML = `${textInput} is a palindrome.` : result.innerHTML = `${textInput} is not a palindrome`
        
    }
}

document.getElementById('text-input').addEventListener("keypress", (e)=>{
    if (e.key === 'Enter') {
        palcheck()
    }
})
