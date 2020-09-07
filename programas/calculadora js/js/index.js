// declaração da função
function calcular(oper) {

	//declarando as variaveis
	var valor1 = document.calcform.valor1.value;
	var valor2 = document.calcform.valor2.value;
 
	// estruturando a logica 
	if (oper == "somar") {
	   var res = parseInt(valor1) + parseInt(valor2);
	} else {
	   if (oper == "subtrair") {
		  var res = valor1-valor2;
	   } else {
		  if (oper == "multiplicar") {
			 var res = valor1*valor2;
		  } else {
			 var res = valor1/valor2;
		  }
	   }
	}
 
	document.calcform.res.value = res;
 }