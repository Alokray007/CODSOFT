let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function openParenthesis(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function closeParenthesis(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateSquareRoot() {
    displayValue = Math.sqrt(eval(displayValue));
    document.getElementById("display").value = displayValue;
}

function calculatePower() {
    displayValue = eval(displayValue) ** 2;
    document.getElementById("display").value = displayValue;
}

function calculateFactorial() {
    let num = parseInt(displayValue);
    let result = 1;
    while (num > 1) {
        result *= num;
        num--;
    }
    displayValue = result;
    document.getElementById("display").value = displayValue;
}

function calculateSin() {
    displayValue = Math.sin(eval(displayValue));
    document.getElementById("display").value = displayValue;
}

function calculateCos() {
    displayValue = Math.cos(eval(displayValue));
    document.getElementById("display").value = displayValue;
}

function calculateTan() {
    displayValue = Math.tan(eval(displayValue));
    document.getElementById("display").value = displayValue;
}
