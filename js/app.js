/*
 * Archivo principal de JS
 */

(function imgdisplay(){
	var fotos = Array.from(document.getElementsByClassName("img-portfolio"));//tomo la clase de las imagenes
	var modal = document.getElementById("portfolioimgs");//lugar donde se va a mostrar
	var bodyModal, close, img;

	fotos.forEach(function(foto){
		foto.addEventListener("click", function(){

			modal.innerHTML = "";
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = foto.innerHTML;			
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});

		})
	})
})();



/* FUNCIÓN BOTON DOWNLOAD*/
var downloadbtn = document.getElementById("download");

downloadbtn.onclick = function(){
	alert("Thank you for your download!");
}


/* VALIDACIÓN FORMULARIO */
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