//inicia a função calcular
function calcula_imc(){
	// define as variaveis peso e altura
	var altura = document.imcForm.altura.value;
	var peso = document.imcForm.peso.value;
	
	// variavel altura ao quadrado
	var quadrado = (altura * altura);
	

	var imc = (peso/quadrado);
	
	if(imc<18.5){
	alert("Você está magro com esse indice: " + imc);
	}
	else if(imc>=18.5 && imc <24.9){
	alert("Você está normal com esse indice: " + imc );
	}
	
	else if(imc >=25 && imc <29.9) {
	alert("Você está com sobre peso com esse indice: " + imc );
	}
	else if(imc >=30 && imc <39.9) {
	alert("Você está com obesidade com esse indice: " + imc );
	}
	else if (imc >40)
	alert("Você estácom obesidade grave com esse indice: " + imc );
	}