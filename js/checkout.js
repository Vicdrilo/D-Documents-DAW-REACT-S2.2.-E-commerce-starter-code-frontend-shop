
// Exercise 6
function validate() {
	var error = 0;
	let errorMessage = "";

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
	let lastNameRegex = /[A-Za-z]{3,}/g;
	let mailRegex = /^\w+([\.-]?\w*)*@\w+\.(es|com)$/g;
	let phoneRegex = /^6{1}(\d){8}/g;
	let pswdRegex = /[A-Za-z0-9]{4,8}/;
	
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || !nameRegex.test(fName.value)){
		console.log('Valor fLastN: '+fName.value);
		console.log('Validación RegEx fLastN: '+nameRegex.test(fName.value));
		error++;
		errorMessage += 'Nombre error. ';
		fName.classList.add('is-invalid');
		errorName.style.display = 'block';
	}else{
		fName.classList.remove('is-invalid');
		errorName.style.display = 'none';
	}	

	if(fEmail.value == "" || fEmail.value.length < 3 || !mailRegex.test(fEmail.value)){
		error++;
		errorMessage += 'Email error. ';
		fEmail.classList.add('is-invalid');
		errorEmail.style.display = 'block';
	}else{
		fEmail.classList.remove('is-invalid');
		errorEmail.style.display = 'none';
	}

	if(fAddress.value == "" || fAddress.value.length < 3){
		error++;
		errorMessage += 'Direccion error. ';
		fAddress.classList.add('is-invalid');
		errorAddress.style.display = 'block';
	}else{
		fAddress.classList.remove('is-invalid');
		errorAddress.style.display = 'none';
	}

	if(fLastN.value == "" || !lastNameRegex.test(fLastN.value)){
		console.log('Valor fLastN: '+fLastN.value);
		console.log('Validación RegEx fLastN: '+lastNameRegex.test(fLastN.value));
		error++;
		errorMessage += 'Apellido error. ';
		fLastN.classList.add('is-invalid');
		errorLastN.style.display = 'block';
	}else{
		fLastN.classList.remove('is-invalid');
		errorLastN.style.display = 'none';
	}

	if(fPassword.value == "" || !pswdRegex.test(fPassword.value)){
		error++;
		errorMessage += 'Password error. ';
		fPassword.classList.add('is-invalid');
		errorPassword.style.display = 'block';
	}else{
		fPassword.classList.remove('is-invalid');
		errorPassword.style.display = 'none';
	}

	if(fPhone.value == "" || !phoneRegex.test(fPhone.value)){
		error++;
		errorMessage += 'Movil error. ';
		fPhone.classList.add('is-invalid');
		errorPhone.style.display = 'block';
	}else{
		fPhone.classList.remove('is-invalid');
		errorPhone.style.display = 'none';
	}

	 
	if(error>0){
		alert("Error" + errorMessage);
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