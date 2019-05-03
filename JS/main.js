function welcomeUser(){
	var name = prompt("Enter your name:");
	document.getElementById("usersName").innerHTML = "Welcome " + name + "!"
}

function largerInteger(){
	var inFo = alert("In this small program, the website will determine which of the two numbers you put in is larger.")
	var number1 = parseInt(prompt("Enter a number"));
	var number2 = parseInt(prompt("Enter another number"));
	if (number1 > number2) {
		alert("The first number: " + number1);
	} else if (number2 > number1){
		alert("The second number: " + number2);
	} else {
		alert("Oki doki something brokie")
	}
}

function positiveNegative(){
	var inFo = alert("In this small program, the website will determine whether the product of three numbers (of your choice) will create a positive or negative number.")
	var number1 = parseInt(prompt("Enter a number"));
	var number2 = parseInt(prompt("Enter another number"));
	var number3 = parseInt(prompt("Enter a third number"));
	var x = number1 + number2 + number3;
	if (x < 0){
		alert("The product is negative");
	} else if (x > 0){
		alert("The product is positive");
	} else if (x = 0){
		alert("Bro, that's just 0. Neither positive nor negative")
	} else{
		alert("Oki doki something brokie")
	}
}

function orderedNumbers(){
	var inFo = alert("In this small program, the website will take three numbers of your choice and order them from largest to smallest");
	var no1 = parseInt(prompt("Enter a number"));
	var no2 = parseInt(prompt("Enter another number"));
	var no3 = parseInt(prompt("Enter a third number"));
	if (no1 > no2 && no1 > no3){
		if (no2 > no3){
			alert(no1 + ", " + no2 + ", " + no3)
		} else if (no3 > no2){
			alert(no1 + ", " + no3 + ", " + no2)
		} else {
			alert("Oki doki something brokie")
		}
	} else if (no2 > no1 && no2 > no3){
		if (no1 > no3){
			alert(no2 + ", " + no1 + ", " + no3)
		} else if (no3 > no1){
			alert(no2 + ", " + no3 + ", " + no1)
		} else {
			alert("Oki doki something brokie")
		}
	} else if (no3 > no1 && no3 > no2){
		if (no1 > no2){
			alert(no3 + ", " + no1 + ", " + no2)
		} else if (no2 > no1){
			alert(no3 + ", " + no2 + ", " + no1)
		} else {
			alert("Oki doki something brokie")
		}
	}
	 else {
		alert("Oki doki something brokie")
	}
}

function namePlease(userName){
	if (userName = "Tidalwave001"){
		console.log("Hello " + userName);
	} else if (userName = "Joe"){
		console.log("Welcome " + userName);
	} else {
		console.log("Invalid username");
	}
}

namePlease("Joe");

function yoMama(age){
	if (age<0){
		console.log("that can't be right");
	} else if (age<32){
		console.log("you have time left");
	} else{
		console.log("wow that's old");
	}
}

function countingLoop(number){
	 if (number%3==0 && number%5==0){
		console.log("ThreeFive!")
	} else if (number%5==0){
		console.log("Five!")
	} else if (number%3==0){
		console.log("Three!")
	} else {
		console.log(number)
	}
}
for (i = 1; i < 101; i++)
	countingLoop(i);

function guessNumber(){
	var guess = parseInt(prompt("I'm thinking of a number between 1 and 100"));
	var rNg = Math.floor(Math.random()*100);
	if (guess != rNg) {
		prompt("Try again boi")
	} else if (guess = rNg) {
		alert("Ayy lmao, you got it!");
	} else {
		alert("Oki doki something brokie")
	}
}

function markiBoi(){
var marksList = [96, 69, 70, 54];
var listLength = marksList.length;
//checking for more marks
var uhMarks = prompt("Would you like to add to the marks list?[Y/N]")
  if (uhMarks = Y){
    var addMarks = parseInt(prompt("What's the mark you would like to add?"))
    marksList.push(addMarks)
  } else {
    alert ("ok")
  }

//average calculator
var marksAverage = 0;
  marksAverage = (marksAverage + marksList[i])/marksList.length

//showing the good stuff
for (i=0; i<listLength; i++);
  console.log ("You got a " + marksList[i] + "on a test!")
  console.log ("Your average is " + marksAverage)
}

function lengthReader() {
	var string = prompt("What text would you like us to measure?")
	var stringLength = string.length
	document.getElementById("stringLengthReader").innerHTML = "The length of the following text is " + stringLength + "letters. " + string	
}

function mockingSpongebob() {
	var memetext = prompt("What message would you like to mock with?");
	var changed = "";
	var stringLength = memetext.length;
	for (i=0; i<stringLength; i++){
		if (i % 2==0){
			changed = changed + memetext[i].toLocaleLowerCase();
				document.getElementById("spongemockery").innerHTML = changed
		} else {
			changed = changed + memetext[i].toLocaleUpperCase();
				document.getElementById("spongemockery").innerHTML = changed
		}
	}
}

function signIn() {
	var ign = "BENISCOOL";
	var passphrase = "ITSPAYDAYFELLAS";
	var igninput = prompt("What's the user's name?").toLocaleUpperCase();
	if (igninput==ign){
		var passphraseinput = prompt("What's the password?").toLocaleUpperCase();
		if (passphraseinput==passphrase) {
			alert("Welcome to the rice fields!");
		} else {
			alert ("You're WRONG!");
		}
	} else {
		alert ("You're WRONG!");
	}

}