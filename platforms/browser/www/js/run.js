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
        app.receivedEvent('deviceready');
		welcome();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};
function welcome(){

		$('#Contenido').empty();
		$('#Contenido').append(`<div class="ico-logo"></div>
           			<div class="wel ng">Bienvenido</div>
           			<div class="wel-v ng-m">Versión: 1.0.0</div>
           			<div class="wel-b blink">Has clic en aceptar</div>
           			<div class="btn btn-primary acepta" id="Inicio">Aceptar</div>`);
}

$('#Contenido').on('click','#Ini', function(e){
	if(navigator.onLine){
		$('#Cabecera').empty();
		$('#Cabecera').append(`<header class="fn" style="display: block;">
							<div class="titl ng-m">Delivery GG</div>
							</header>`);
		$('#Contenido').empty();
		$('#Contenido').append(`<div class="s-mn">	
           			<div class="btn btn-light se">Cliente</div>
           			<div class="btn btn-light se">Negocio</div>
           			<div class="btn btn-light se">Servicio</div>
           		</div>`);
	}else{
		$('#Pie').empty();
		$('#Pie').append(`<div class="conexion">Verifica tu conexión red</div>`);
	}
});