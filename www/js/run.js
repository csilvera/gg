var url = 'http://didigitales.live/';
var url2 = 'http://codigo.didigitales.live/';
$('#VTelefono').on('submit', function(e){
	e.preventDefault();
	if(navigator.onLine){
		var xhttp = new XMLHttpRequest();
		var xurl = url+"veri-usuario";
		var cod = $('#Codigo').val();
		var Tel = $('#Telefono').val();
		xhttp.onreadystatechange = function(){
			var r = this.responseText;
			console.log(xurl+'?cod='+cod+'&movil='+Tel);
			if(this.readyState == 4 && this.status == 200){
				pb = this.responseText;
				localStorage.setItem("codigo", cod);
				localStorage.setItem("telefono", Tel);
				if(pb == 0){
				   window.location = "correo-v.html";
				}else if(pb == 1 ){
				   window.location = "home.html"; 
				}

			}
			else if(this.readyState == 4 && this.status == 500){
				$('#Pie').empty();
				$('#Pie').append(`<div class="conexion">Intente mas tarde.</div>`);
				var x = setTimeout(function(){
					$('#Pie').empty();
				},4000);
			}
		}
		xhttp.open("GET", xurl+'?cod='+cod+'&movil='+Tel, true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
	}
	else{
		$('#Pie').empty();
		$('#Pie').append(`<div class="conexion">Verifica tu conexión red</div>`);
		var x = setTimeout(function(){
			$('#Pie').empty();
		},4000);
	}
} );
$('#VCorreo').on('submit', function(e){
	e.preventDefault();
	if(navigator.onLine){
		var xhttp = new XMLHttpRequest();
		var xurl = url+"validar-mail";
		var cor = $('#Mail').val();
		var cod = localStorage.getItem('codigo');
		var tel = localStorage.getItem('telefono');
		xhttp.onreadystatechange = function(){
			var r = this.responseText;
			console.log(xurl+'?cor='+cor+'&cod='+cod+'&movil='+tel);
			if(this.readyState == 4 && this.status == 200){
				localStorage.setItem("correo", cor);
				pb = this.responseText;
				if(pb == 1){
				  validar();
				}

			}
			else if(this.readyState == 4 && this.status == 500){
				$('#Pie').empty();
				$('#Pie').append(`<div class="conexion">Intente nuevamente.</div>`);
				var x = setTimeout(function(){
					$('#Pie').empty();
				},4000);
			}
		}
		xhttp.open("GET", xurl+'?cor='+cor+'&cod='+cod+'&movil='+tel, true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
	}
	else{
		$('#Pie').empty();
		$('#Pie').append(`<div class="conexion">Verifica tu conexión red</div>`);
		var x = setTimeout(function(){
			$('#Pie').empty();
		},4000);
	}
} );
function validar(){
	
	var xurl = url2+"validar.php";
	var mail = localStorage.getItem('correo');
	xhttp.onreadystatechange = function(){
			var r = this.responseText;
			console.log(xurl+'?de='+mail);
			if(this.readyState == 4 && this.status == 200){
				localStorage.setItem("correo", cor);
				pb = this.responseText;
				if(pb == 1){
				   window.location = "validacion.html";
				}else{
					window.location = "home.html";
				}

			}
			else if(this.readyState == 4 && this.status == 500){
				$('#Pie').empty();
				$('#Pie').append(`<div class="conexion">Intente mas tarde.</div>`);
				var x = setTimeout(function(){
					$('#Pie').empty();
				},4000);
			}
		}
		xhttp.open("GET", xurl+'?de='+mail, true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
}
$('#Validar').on('submit', function(e){
	e.preventDefault();
	if(navigator.onLine){
		var xhttp = new XMLHttpRequest();
		var xurl = url+"validando";
		var cov = $('#CodigoV').val();
		var cod = localStorage.getItem('codigo');
		var tel = localStorage.getItem('telefono');
		xhttp.onreadystatechange = function(){
			var r = this.responseText;
			console.log(xurl+'?codigo='+cov+'&cod='+cod+'&movil='+tel);
			if(this.readyState == 4 && this.status == 200){
				
				pb = this.responseText;
				if(pb == 1){
				  window.location = "home.html";
				}else{
					$('#Pie').empty();
					$('#Pie').append(`<div class="conexion">Codigo incorrecto.</div>`);
					var x = setTimeout(function(){
						$('#Pie').empty();
					},4000);
				}

			}
			else if(this.readyState == 4 && this.status == 500){
				$('#Pie').empty();
				$('#Pie').append(`<div class="conexion">Intente nuevamente.</div>`);
				var x = setTimeout(function(){
					$('#Pie').empty();
				},4000);
			}
		}
		xhttp.open("GET", xurl+'?cor='+cor+'&cod='+cod+'&movil='+tel, true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
	}
	else{
		$('#Pie').empty();
		$('#Pie').append(`<div class="conexion">Verifica tu conexión red</div>`);
		var x = setTimeout(function(){
			$('#Pie').empty();
		},4000);
	}
} );
$('#Omitir').on('click', function(e){
	e.preventDefault();
	window.location = "home.html";	
} );