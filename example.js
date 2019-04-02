//Syntax Errors
function welcomeUser(){
	var name = promp("Enter your name:");
	alert("Welcome " + name + "!");
}

function welcomeUser2(){
	var name = prompt("Enter your name:");
	alert("Welcome " + "name" + "!");
}

function largerInteger(){
	var number1 = parseInt(prompt("Enter a number"));
	var number2 = parseInt("Enter another number");
	if (number1 > number2) {
		alert("The first number: " + number1);
	} else if (number2 > number1){
		alert("The second number: " + number2);
	} else
		alert(error)
}

//Runtime Errors
function largerInteger(){
	var number1 = parseInt(prompt("Enter a number"));
	var number2 = parseInt(prompt("Enter another number");
	if (number1 > integer1) {
		alert("The first number: " + number1);
	} else if (number2 > digit1){
		alert("The second number: " + number2);
	} else
		alert(error)
}

function largerInteger2(){
	var number1 = prompt("Enter a number");
	var number2 = prompt("Enter another number");
	if (number1 > number2) {
		alert("The first number: " + number1);
	} else if (number2 > number1){
		alert("The second number: " + number2);
	} else
		alert(error)
}

//Logic Errors
function largerInteger(){
	var number1 = prompt("Enter a number")
	var number2 = prompt("Enter another number")
	if (number1 > number2) {
		alert("The first number: " + number1)
	} else if (number2 > number1){
		alert("The second number: " + number2)
	} else
		alert(error)
}

function positiveNegative(){
	var number1 = prompt("Enter a number");
	var number2 = prompt("Enter another number");
	var number3 = prompt("Enter a third number");
	var x = number1 + number2 + number3;
	if (x < 0){
		alert("The product is negative");
	} else if (x > 0){
		alert("The product is positive");
	}
}