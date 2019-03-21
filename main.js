function welcomeUser(){
	var name = prompt("Enter your name:");
	alert("Welcome " + name + "!");
}

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
	//INCOMPLETE
	var number1 = prompt("Enter a number")
	var number2 = prompt("Enter another number")
	var number3 = prompt("Enter a third number")
	var x = number1 + number2 + number3
	if (x < 0){
		alert("The product is negative")
	} else if (x > 0){
		alert("The product is positive")
	}
}

function orderedNumbers(){
	//UNSURE IF WORKING
	var number1 = prompt("Enter a number")
	var number2 = prompt("Enter another number")
	var number3 = prompt("Enter a third number")
	if (number1 > number2 > number3)
		alert(number1 + ", " + number2 + ", " + number3)
	else if (number1 > number3 > number2)
		alert(number1 + ", " + number3 + ", " + number2)
	else if (number2 > number1 > number3)
		alert(number2 + ", " + number1 + ", " + number3)
	else if (number2 > number3 > number1)
		alert(number2 + ", " + number3 + ", " + number1)
	else if (number3 > number1 > number2)
		alert(number3 + ", " + number1 + ", " + number2)
	else (number3 > number2 > number1)
		alert(number3 + ", " + number2 + ", " + number1)
}