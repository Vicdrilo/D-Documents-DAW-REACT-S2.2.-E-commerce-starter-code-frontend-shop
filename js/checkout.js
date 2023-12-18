
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");  
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");  

	//Expresiones Regulares
	let nameRegex = /[A-Za-z]{3,}/g;
	let mailRegex = /^\w+([\.-]?\w*)*@\w+\.(es|com)$/g;
	let phoneRegex = /^6{1}(\d){8}/g;
	let pswdRegex = /[A-Za-z0-9]{4,8}/;
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || !nameRegex.test(fName.value)){
		error++;
		fName.classList.add('is-invalid');
		errorName.style.display = 'block';
	}	

	if(fEmail.value == "" || fEmail.value.length < 3 || !mailRegex.test(fEmail.value)){
		error++;
		fName.classList.add('is-invalid');
		errorEmail.style.display = 'block';
	}

	if(fAddress.value == "" || fAddress.value.length < 3){
		error++;
		fAddress.classList.add('is-invalid');
		errorAddress.style.display = 'block';
	}

	if(fLastN.value == "" || !nameRegex.test(fLastN.value)){
		error++;
		fLastN.classList.add('is-invalid');
		errorLastN.style.display = 'block';
	}

	if(fPassword.value == "" || !pswdRegex.test(fPassword.value)){
		error++;
		fPassword.classList.add('is-invalid');
		errorPassword.style.display = 'block';
	}

	if(fPhone.value == "" || !phoneRegex.test(fPhone.value)){
		error++;
		fPhone.classList.add('is-invalid');
		errorPhone.style.display = 'block';
	}

	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}


//ERRORES MÁS TIPICOS:
/*
*Me genera error en el test con el apellido cuando en el nombre está bien, y he probado en 
*un regex validator si estaba bien hecho.
*No consigo hacer que la pagina web mantenga el error, ya que refresca la pagina. 
*/