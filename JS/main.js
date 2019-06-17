function welcomeUser(){
	var name = prompt("Enter your name:");
	document.getElementById("usersName").innerHTML = "Welcome " + name + "!"
}

function largerInteger(){
	var inFo = alert("In this small program, the website will determine which of the two numbers you put in is larger.")
	var number1 = parseInt(prompt("Enter a number"));
	var number2 = parseInt(prompt("Enter another number"));
	if (number1 > number2) {
		document.getElementById("biggie").innerHTML = "The first number: " + number1
		alert(number1)
	} else if (number2 > number1) {
		document.getElementById("biggie").innerHTML = "The second number: " + number2
		alert(number2)
	} else {
		document.getElementById("biggie").innerHTML = "Oki doki something brokie"
		alert("Ya broke it")
	}
}

function positiveNegative(){
	var inFo = alert("In this small program, the website will determine whether the product of three numbers (of your choice) will create a positive or negative number.")
	var number1 = parseInt(prompt("Enter a number"));
	var number2 = parseInt(prompt("Enter another number"));
	var number3 = parseInt(prompt("Enter a third number"));
	var x = number1 + number2 + number3;
	if (x < 0){
		document.getByElementId("positivity").innerHTML = "The product is negative"
	} else if (x > 0){
		document.getByElementId("positivity").innerHTML = "The product is positive"
	} else if (x = 0){
		document.getByElementId("positivity").innerHTML = "Bro, that's just 0. Neither positive nor negative"
	} else{
		document.getByElementId("positivity").innerHTML = "Oki doki something brokie"
	}
}

function orderedNumbers(){
	var inFo = alert("In this small program, the website will take three numbers of your choice and order them from largest to smallest");
	var no1 = parseInt(prompt("Enter a number"));
	var no2 = parseInt(prompt("Enter another number"));
	var no3 = parseInt(prompt("Enter a third number"));
	if (no1 > no2 && no1 > no3){
		if (no2 > no3){
			document.getByElementId("LawAndOrder").innerHTML = no1 + ", " + no2 + ", " + no3
		} else if (no3 > no2){
			document.getByElementId("LawAndOrder").innerHTML = no1 + ", " + no3 + ", " + no2
		} else {
			document.getByElementId("LawAndOrder").innerHTML = "Oki doki something brokie"
		}
	} else if (no2 > no1 && no2 > no3){
		if (no1 > no3){
			document.getByElementId("LawAndOrder").innerHTML = no2 + ", " + no1 + ", " + no3
		} else if (no3 > no1){
			document.getByElementId("LawAndOrder").innerHTML = no2 + ", " + no3 + ", " + no1
		} else {
			document.getByElementId("LawAndOrder").innerHTML = "Oki doki something brokie"
		}
	} else if (no3 > no1 && no3 > no2){
		if (no1 > no2){
			document.getByElementId("LawAndOrder").innerHTML = no3 + ", " + no1 + ", " + no2
		} else if (no2 > no1){
			document.getByElementId("LawAndOrder").innerHTML = no3 + ", " + no2 + ", " + no1
		} else {
			document.getByElementId("LawAndOrder").innerHTML = "Oki doki something brokie"
		}
	}
	 else {
		document.getByElementId("LawAndOrder").innerHTML = "Oki doki something brokie"
	}
}


function namePlease(userName){ //NOT PART OF WEBSITE
	if (userName = "TIdalwave001"){
		console.log("Hello " + userName);
	} else if (userName = "Joe"){
		console.log("Welcome " + userName);
	} else {
		console.log("InvalId username");
	}
}

namePlease("Joe");

function yoMama(age){ //NOT PART OF WEBSITE
	if (age<0){
		console.log("that can't be right");
	} else if (age<32){
		console.log("you have time left");
	} else{
		console.log("wow that's old");
	}
}

function countingLoop(number){ //PRINTS TO CONSOLE
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
	function rnG (){
		return Math.floor(Math.random() * Math.floor(101));
	}
	console.log("Answer: " + rnG())
	var rNg = rnG()
	var guess = parseInt(prompt("I'm thinking of a number between 1 and 100"));
	while (guess !== rNg){
		var guess = parseInt(prompt("Nope, try again"))
	if (guess == rNg) {
		break;
	}
	}
	alert("Ayy lmao, you got it!")
}




function markiBoi(){
var marksList = [90];
var listLength = marksList.length;
	while (uhMarks = "Y"){
   	var addMarks = parseInt(prompt("What's the mark you would like to add?"));
    marksList.push(addMarks);
    var uhMarks  = prompt("Would you like to add to the marks list?[Y/N]").toLocaleUpperCase();
    if (uhMarks !== "Y")  {
    	break;
		}
		function getSum (total, num){
			return total + num
		}
		var bigMark = marksList.reduce(getSum)
		var marksAverage = bigMark / listLength
    	for (i=0; i<listLength; i++){
    	document.getElementById("AverageJoe").innerHTML = "Your grades are: " + marksList[i] + ", "
  		document.getElementById("AverageJoey").innerHTML = "You got a " + marksList[i] + " on a test!"
  		document.getElementById("AverageJoestar").innerHTML = "Your average is " + marksAverage
		}
	}
}
    //Doesn't work from here







function lengthReader() {
	var string = prompt("What text would you like us to measure?")
	var stringLength = string.length
	document.getElementById("longBoi").innerHTML = "The length of the following text is " + stringLength + " letters: " + string	
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
			document.getByElementId("gucci").innerHTML = "Welcome to the rice fields!"
		} else {
			alert ("You're WRONG!");
		}
	} else {
		alert ("You're WRONG!");
	}

}

function pigLatin () {
	//Does not work
	var text = prompt("What would you like to encrypt in Pig Latin?")
	var tobetranslated = text.split(" ", text.length)
	for (var i=0; i < tobetranslated.length; i++)
		if (i.length < 4){
			console.log(encrypted)
		} else if (i.length > 3) {
			var tobetranslated = tobetranslated.split(" ", tobetranslated.length)
			for (var i=0; i < tobetranslated.length; i++)
				tobetranslated.push(1)
				tobetranslated.unshift(1)
				tobetranslated = tobetranslated + "ay"
		} else {
			console.log ("No")
		}
	var encrypted = tobetranslated

}	

function encryptionThingy () {
	var passphrase = "PRODUCTIVE";
	var passphraseinput = prompt("Password?").toLocaleUpperCase();
	if (passphraseinput = passphrase) {
		var text = prompt("What would you like to hIde?");
		var ugh = ""
		var length = text.length
		for (var i=0; i<length; i++){
			var r = text.charCodeAt(i)
			var s = r*9
			var t = String.fromCharCode(s)
			ugh += t
		}
		console.log(ugh)
		document.getElementById("encryption").innerHTML = "Encrypted text: " + ugh
	} else {
		alert("You're Wrong Ding Dong")
	}
}

function decryptionThingy(){
	var passphrase = "PRODUCTIVE"
	var passphraseinput = prompt("Password?").toLocaleUpperCase();
	if (passphraseinput = passphrase){
			var ugh = ""
			var text = prompt("What text would you like to understand?");
			var length = text.length
			for (var i=0; i<length; i++){
				var r = text.charCodeAt(i)
				var s = r/9
				var t = String.fromCharCode(s)
				ugh += t
			}
			console.log(ugh)
			document.getElementById("decryption").innerHTML = "Decrypted text: " + ugh
	} else {
		alert("You're Wrong Ding Dong")
	}
}