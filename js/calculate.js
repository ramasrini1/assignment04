
function calculate(num1, num2, operator){
    // CHECK TO SEE WHAT OPERATION THEY'RE USING
    let add      = "add";
    let subtract = "subtract";
    let multiply = "multiply";
    let divide   = "divide";
    let result   = 0;

    switch ( operator) {
        case add: {
            result = addNumber(num1, num2);
            break;
        }
        case subtract: {
            result = subtractNumber(num1, num2);
            break;
        }
        case  multiply: {
            result = multiplyNumber(num1,  num2);
            break;
        }
        case divide: {
            result = divideNumber(num1, num2);
            break;
        }
        default: {
                
        }
    }
    return result;
 }

function addNumber(number1, number2){
    var result = number1 + number2;
    return result;
}

function subtractNumber(number1, number2){
    var result = number1 - number2;
    return result;
}

function multiplyNumber( number1, number2){
    var result = number1 * number2;
    return result;
}

function divideNumber( number1, number2){
    var result = number1/number2;
    return result;
}

export {calculate};