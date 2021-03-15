//STEP 1
var number;
var number1;
var i;

number = 5;
function halfNumber(number){
    return number/2;
}
console.log(`half of ${number} is ` + halfNumber(number));

//STEP 2
number = 3;
function square(number){
    return number * number;
}
console.log(`Square of ${number} is ` + square(number));

//STEP 3
number = 2;
number1 = 4;
function percentOf(number, number1){
    return (number * 100)/number1;
}
console.log(`${number} is ` + percentOf(number, number1) + `% of ${number1}`);

//STEP 4
number =  4;
number1 = 10;
function findModulus(number, number1){
    return ( number1 % number);
}
console.log( findModulus(4,10) + ` is modulus of ${number} and ${number1}`);

//STEP 5
var total = 0;
function calculateSum() {
    for (i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
// Get the numbers from the user
var userResponse = String(prompt("Enter numbers seperated by commas to get the sum"));
var list = userResponse.split(',');
var num = 0;
var sum = 0;
for ( i = 0; i<list.length; i++ ){
    num = Number(list[i]);
    sum += num;
}
console.log("Sum is " + sum);












