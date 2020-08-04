var url = 'https://didigitales.live/';
var url2 = 'https://codigo.didigitales.live/';
var cod = localStorage.getItem('codigo');
var tel = localStorage.getItem('telefono');
console.log(cod+tel);
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		console.log('Received Device Ready Event');
		document.addEventListener("backbutton", onBackKeyDown, false);
		document.addEventListener("menubutton", onMenuKeyDown, false);
		document.addEventListener("resume", onResume, false);
		document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
		document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        app.Welcome();
	},
	Welcome: function(){
		//cordova.plugins.backgroundMode.enable();
		//cordova.plugins.backgroundMode.setEnabled(true);
		var t = setTimeout(() => {
			cordova.plugins.notification.local.schedule({
				title: 'My first notification',
				text: 'Thats pretty easy...',
				foreground: true
			});
		}, 8000);
	}
};
function onVolumeUpKeyDown() {
	$('#Pie').empty();
	$('#Pie').append(`<div class="conexion">Volumen Arriba </div>`);
	var x = setTimeout(function(){
		$('#Pie').empty();
	},4000);
}
function onVolumeDownKeyDown() {
	$('#Pie').empty();
	$('#Pie').append(`<div class="conexion">Volumen Abajo </div>`);
	var x = setTimeout(function(){
		$('#Pie').empty();
	},4000);
}
function onBackKeyDown() {
	$('#Pie').empty();
	$('#Pie').append(`<div class="conexion">Atras </div>`);
	var x = setTimeout(function(){
		$('#Pie').empty();
	},4000);
}
function onMenuKeyDown() {
	$('#Pie').empty();
	$('#Pie').append(`<div class="conexion">Menu </div>`);
	var x = setTimeout(function(){
		$('#Pie').empty();
	},4000);
}
function onResume() {
	$('#Pie').empty();
	$('#Pie').append(`<div class="conexion">Resumen</div>`);
	var x = setTimeout(function(){
		$('#Pie').empty();
	},4000);
}

$('#VTelefono').on('submit', function(e){
	e.preventDefault();
	if(navigator.onLine){
		var xhttp = new XMLHttpRequest();
		
		var cod = $('#Codigo').val();
		var Tel = $('#Telefono').val();
		var xurl = url+"veri-usuario"+'?cod='+cod+'&movil='+Tel;
		
		if(Tel.length >= 10){
		   
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
		xhttp.open("GET", xurl, true);
		//xhttp.setRequestHeader("Content-type", "application/x-www-formurlencoded");
		xhttp.send();
		
		}else{
			$('#Pie').empty();
				$('#Pie').append(`<div class="conexion">Ingrese su numero de telefono.</div>`);
				var x = setTimeout(function(){
					$('#Pie').empty();
				},4000);
		}
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
		var cor = $('#Mail').val();
		var cod = localStorage.getItem('codigo');
		var tel = localStorage.getItem('telefono');
		var xurl = url+"validar-mail"+'?cor='+cor+'&cod='+cod+'&movil='+tel;
		
		if(/@gmail.com/.test(cor) || /@outlook.com/.test(cor) || /@didigitales.live/.test(cor) || /@cesarernesto.net.ve/.test(cor) ){
		
		xhttp.onreadystatechange = function(){
			var r = this.responseText;
			console.log(xurl);
			if(this.readyState == 4 && this.status == 200){
				localStorage.setItem("correo", cor);
				pb = this.responseText;
				if(pb == 1){
				  validar();
				}else{
					window.location = "home.html";
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
		xhttp.open("GET", xurl, true);
		//xhttp.setRequestHeader("Content-type", "application/x-www-formurlencoded");
		xhttp.send();
		
		}
		else{
			$('#Pie').empty();
				$('#Pie').append(`<div class="conexion">El correo gmail.com, outlook.com </div>`);
				var x = setTimeout(function(){
					$('#Pie').empty();
				},4000);
		}
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
	if(navigator.onLine){
	var xhttp = new XMLHttpRequest();
	var mail = localStorage.getItem('correo');
	var xurl = url2+"validar.php"+'?de='+mail;
	console.log(xurl);
		xhttp.onreadystatechange = function(){
			var r = this.responseText;
			if(this.readyState == 4 && this.status == 200){
				
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
		xhttp.open("GET", xurl, true);
		//xhttp.setRequestHeader("Content-type", "application/x-www-formurlencoded");
		xhttp.send();
	}else{
		$('#Pie').empty();
		$('#Pie').append(`<div class="conexion">Verifica tu conexión red</div>`);
		var x = setTimeout(function(){
			$('#Pie').empty();
		},4000);
	}
}
$('#Validar').on('submit', function(e){
	e.preventDefault();
	if(navigator.onLine){
		var xhttp = new XMLHttpRequest();
		
		var cov = $('#CodigoV').val();
		var cod = localStorage.getItem('codigo');
		var tel = localStorage.getItem('telefono');
		var xurl = url+"validando"+'?codigo='+cov+'&cod='+cod+'&movil='+tel;
		xhttp.onreadystatechange = function(){
			
			console.log(xurl);
			if(this.readyState == 4 && this.status == 200){
				
				pb = this.responseText;
				console.log(pb);
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
		xhttp.open("GET", xurl, true);
		//xhttp.setRequestHeader("Content-type", "application/x-www-formurlencoded");
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