const resultSpan = document.getElementById('result');
let currentExpression = '';
const operators = ['+', '-', '*', '/'];

const buttons = document.querySelectorAll('.button-box');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

function handleButtonClick(event) {
    const value = event.target.textContent;

    switch (value) {
        case 'C':
            currentExpression = '';
            break;
        case 'DEL':
            currentExpression = currentExpression.slice(0, -1);
            break;
        case '=':
            try {
                const result = evaluateExpression(currentExpression);
                currentExpression = parseFloat(result).toFixed(3);
            } catch (error) {
                currentExpression = 'Error';
            }
            break;
        default:
            if (operators.includes(value)) {
                if (operators.includes(currentExpression.slice(-1))) {
                    currentExpression = currentExpression.slice(0, -1) + value;
                } else {
                    currentExpression += value;
                }
            } else {
                currentExpression += value;
            }
    }

    resultSpan.textContent = currentExpression;
}

function evaluateExpression(expression) {
    return eval(expression);
}