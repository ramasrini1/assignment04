// IMPORT THE MODULE
import {calculate} from './calculate.js';

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
var num1;  
var num2;
var operator;

var add =      "add";
var subtract = "subtract";
var multiply = "multiply";
var divide  =  "divide";
var result  =   0;

var operationMap = new Map([
    [add,      "+"],
    [subtract, "-"],
    [multiply, "*"],
    [divide,  "/"]
]);

getAndCheckInput();
result = calculate(num1, num2, operator);
console.log("the result is  " + result);
alert( num1 + " " + operationMap.get(operator) + " " + num2 + " = " + result );  


function getAndCheckInput(){
    var valid;
    var msg;
    var tmp;
    var operatorValid;

    do {
        msg = "";
        tmp = "";
        valid = true;

        // Get input from user
        var input1 = prompt("Enter the first number");
        var input2 = prompt("Enter the second number");
        num1 =  Number(input1);
        num2 =  Number(input2);
        operator = prompt("Enter add, subtract, multiply or divide");
        operator = operator.toLowerCase();

        if ( isNaN(num1) || isNaN(num2) ){
            valid = false;
            
            if (isNaN(num1)){
                tmp = "First Number entered:" + input1 + " is not valid\n";
                msg += tmp;
            } 
            if ( isNaN(num2) ) {
                tmp = "Second number entered: " + input2 + " is not valid\n";
                msg += tmp;
            } 
        }
        // Check operator
        if ( (operator === add ) || (operator === subtract) || (operator === multiply) || (operator === divide )){
            operatorValid = true;
       }  else {
           tmp = "Operator entered: " + operator + " is not valid";
           msg += tmp;
           operatorValid = false;
       }

       if ( valid === false || operatorValid == false){
           alert (msg + "\nPlease enter your data again");
       } else {
           console.log("Valid Input");
       }
        
    } while (valid === false || operatorValid === false);
}


