
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let multiplyOp = multiply(num1, num2);
        let sumOp = sum(num1, num2);
        let subtractOp = subtract(num1, num2);
        let divideOp = divide(num1, num2);

        // Display the results
        displayResult(`Multiply: ${multiplyOp}, Sum: ${sumOp}, Subtract: ${subtractOp}, Divide: ${divideOp}`);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function sum(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Add the numbers
    return a + b;
}

function subtract(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Subtract the numbers
    return a - b;
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Multiply the numbers
    return a * b;
}

function divide(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;
    // Check for division by zero
    if (b === 0) {
        return 'Error: Division by zero';
    }
    // Divide the numbers
    return a / b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result are: 
    ${result}`;
}
