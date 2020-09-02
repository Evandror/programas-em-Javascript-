// DECLARACAO da funcao validar()
function validar() {
	// inicio da function validar()
	// recuperar valores das caixas de texto (INPUT)
	var nome = formSignUp.nomeUsuario.value;
	var email = formSignUp.emailUsuario.value;
	var senha = formSignUp.senhaUsuario.value;
	var confirm_senha = formSignUp.confirmSenhaUsuario.value;
	console.log(nome);

	var usuario = document.getElementById('nomeUsuario').value;
	console.log(usuario);

	var msgErro = document.getElementById('msg_erro');
	console.log(msgErro);

	if (nome === '') {
		// alert('Nome é obrigatório');
		// armazendo informacao dentro do INPUT (proriedade VALUE)
		formSignUp.nome.value = 'Faltou o nome.';
		// propriedade innerHTML vai injetar uma informação
		// dentro do elemento HTML (no caso SPAN)
		msgErro.innerHTML = 'Nome é obrigatório';
		// metodo focus() coloca o cursor dentro da caixa de texto
		formSignUp.nome.focus();
		return false;
	}

	if (email === '') {
		// alert('Email é obrigatório');
		msgErro.innerHTML = 'E-mail é obrigatório';
		formSignUp.email.focus();
		return false;
	}

	// senha deve ter mais de 3 caracteres (caso contrario msg erro)
	// senha e confirm_senha devem ser iguais (caso contrario msg erro)

	if (senha === '' || senha.length < 3) {
		// alert('Senha é obrigatório');
		msgErro.innerHTML = 'Preencha o campo senha com no minimo 3 caracteres';
		formSignUp.senha.focus();
		return false;
	}

	if (confirm_senha === '') {
		// alert('Confirm Senha é obrigatório');
		msgErro.innerHTML = 'É obrigatório confirmar a senha';
		formSignUp.confirm_senha.focus();
		return false;
	}if (confirm_senha != senha){
        msgErro.innerHTML = 'As senhas devem ser iguais'    ;
		formSignUp.confirm_senha.focus();
		return false;
    }if (senha == confirm_senha){
        msgErro.innerHTML = "<strong><font color=green>Cadastro feito com sucesso</font></strong>";
		return false;
    }
} // fim da funcao validar()    