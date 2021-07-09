function validarSenhaForca_investidor(){
  console.log("validarSenhaForca_investidor");
	var senha = document.getElementById('Password_investidor').value;
  console.log(senha);

	var forca = 0;
	/*Imprimir a senha*/
	/*document.getElementById("impSenha").innerHTML = "Senha " + senha;*/

	if((senha.length >= 4) && (senha.length <= 7)){
		forca += 10;
	}else if(senha.length > 7){
		forca += 25;
	}

	if((senha.length >= 5) && (senha.match(/[a-z]+/))){
		forca += 10;
	}

	if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
		forca += 20;
	}

	if((senha.length >= 7) && (senha.match(/[@#$%&;*]/))){
		forca += 25;
	}

	if(senha.match(/([1-9]+)\1{1,}/)){
		forca += -25;
	}

  mostrarForca_investidor(forca);
}

function validarSenhaForca_startup(){
  console.log("validarSenhaForca_startup");
	var senha = document.getElementById('Password_startup').value;
  console.log(senha);
	var forca = 0;
	/*Imprimir a senha*/
	/*document.getElementById("impSenha").innerHTML = "Senha " + senha;*/

	if((senha.length >= 4) && (senha.length <= 7)){
		forca += 10;
	}else if(senha.length > 7){
		forca += 25;
	}

	if((senha.length >= 5) && (senha.match(/[a-z]+/))){
		forca += 10;
	}

	if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
		forca += 20;
	}

	if((senha.length >= 7) && (senha.match(/[@#$%&;*]/))){
		forca += 25;
	}

	if(senha.match(/([1-9]+)\1{1,}/)){
		forca += -25;
	}

	mostrarForca_startup(forca);
}

function mostrarForca_investidor(forca){
	/*Imprimir a força da senha*/
	/*document.getElementById("impForcaSenha").innerHTML = "Força: " + forca;*/

	if(forca < 30 ){
		document.getElementById("erroSenhaForca_investidor").innerHTML = '<div class="progress"><div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>';
	}else if((forca >= 30) && (forca < 50)){
		document.getElementById("erroSenhaForca_investidor").innerHTML = '<div class="progress"><div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>';
	}else if((forca >= 50) && (forca < 70)){
		document.getElementById("erroSenhaForca_investidor").innerHTML = '<div class="progress"><div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div>';
	}else if((forca >= 70) && (forca < 100)){
		document.getElementById("erroSenhaForca_investidor").innerHTML = '<div class="progress"><div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div>';
	}
}

function  mostrarForca_startup(forca){
	/*Imprimir a força da senha*/
	/*document.getElementById("impForcaSenha").innerHTML = "Força: " + forca;*/

	if(forca < 30 ){
		document.getElementById("erroSenhaForca_startup").innerHTML = '<div class="progress"><div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>';
	}else if((forca >= 30) && (forca < 50)){
		document.getElementById("erroSenhaForca_startup").innerHTML = '<div class="progress"><div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div></div>';
	}else if((forca >= 50) && (forca < 70)){
		document.getElementById("erroSenhaForca_startup").innerHTML = '<div class="progress"><div class="progress-bar bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div>';
	}else if((forca >= 70) && (forca < 100)){
		document.getElementById("erroSenhaForca_startup").innerHTML = '<div class="progress"><div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div>';
	}
}


function aSenhaehForteInvestidor(){
  console.log("aSenhaehForteInvestidor");

  var senha = document.getElementById('Password_investidor').value;
  console.log(senha);

  var forca = 0;
	/*Imprimir a senha*/
	/*document.getElementById("impSenha").innerHTML = "Senha " + senha;*/

	if((senha.length >= 4) && (senha.length <= 7)){
		forca += 10;
	}else if(senha.length > 7){
		forca += 25;
	}

	if((senha.length >= 5) && (senha.match(/[a-z]+/))){
		forca += 10;
	}

	if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
		forca += 20;
	}

	if((senha.length >= 7) && (senha.match(/[@#$%&;*]/))){
		forca += 25;
	}

	if(senha.match(/([1-9]+)\1{1,}/)){
		forca += -25;
	}
	

  if(forca < 30 ){ alert("Senha Fraca tente usar Letras, Numeros e simbolos > 8 caracteres"); return false;
	}else if((forca >= 30) && ((forca < 100))){  return true;
	}


}

function aSenhaehForteStartup(){

  var senha = document.getElementById('Password_startup').value;
    // verifica se tem 6 caracteres ou mais
		console.log(senha);

		var forca = 0;
		/*Imprimir a senha*/
		/*document.getElementById("impSenha").innerHTML = "Senha " + senha;*/
	
		if((senha.length >= 4) && (senha.length <= 7)){
			forca += 10;
		}else if(senha.length > 7){
			forca += 25;
		}
	
		if((senha.length >= 5) && (senha.match(/[a-z]+/))){
			forca += 10;
		}
	
		if((senha.length >= 6) && (senha.match(/[A-Z]+/))){
			forca += 20;
		}
	
		if((senha.length >= 7) && (senha.match(/[@#$%&;*]/))){
			forca += 25;
		}
	
		if(senha.match(/([1-9]+)\1{1,}/)){
			forca += -25;
		}
		
	
		if(forca < 30 ){ alert("Senha Fraca tente usar Letras, Numeros e simbolos > 8 caracteres"); return false;
		}else if((forca >= 30) && ((forca < 100))){  return true;
		}
}