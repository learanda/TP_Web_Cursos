$(document).ready(function(){

	inicializarVistaPrevia();

	editarDestinatario();
	seleccionarColorDeFuente();


});

function inicializarVistaPrevia() {
	actualizarColorDeFuente();
}

function actualizarColorDeFuente() {
	var colorDeFuente = $("input[name='color']:checked").val();
	$("div.titulo").css("color", colorDeFuente);		
}

function editarDestinatario() {
	$("#NombreDestinatario").keyup(function(){

		var destinatario = $(this).val();

		if (destinatario === "") {

			destinatario = getTituloDestinatarioDefault();
		}

		$("#tituloDestinatario").text(destinatario);
	});
}

function getTituloDestinatarioDefault() {
	return "Destinatario";
}

function seleccionarColorDeFuente() {
	$("input[name='color']").change(function(){
		actualizarColorDeFuente();
	});
}
