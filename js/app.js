/*
 * Archivo principal de JS
 */

var inputname = document.getElementById("name");
var inputemail = document.getElementById("email");
var inputphone = document.getElementById("phonenumber");
var inputmessage = document.getElementById("message");

var botonsend = document.getElementById("sendbtn");

inputname.onclick = function(){
	this.value = "";
}

inputemail.onclick = function(){
	this.value = "";
}

inputphone.onclick = function(){
	this.value = "";
}

inputmessage.onclick = function(){
	this.value = "";
}

botonsend.onclick = function(){
	function name(){
		var inputname = document.getElementById("name").value;
		if(inputname.length == 0){
			alert("Please enter your name");
		}
	}
	name();

	function email(){
		var inputemail = document.getElementById("email");
		if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(inputemail)) ) {
  		alert("Please enter a valid email");
		}
	}
	email();

	function numero(){
	var phone = document.getElementById("phonenumber").value;
	if( !(/^\d{9}$/.test(phone)) ) { //Validación para ingresar 9 numeros
 			alert("Please enter a valid phone number");
		}
	}
	numero();

	function message(){
		var inputmessage = document.getElementById("message").value;
		if(inputmessage.length == 0){
			alert("Please write a message");
		}
	}
	message();
	alert("Thank you for contacting us, we will reach you soon :) ");
}