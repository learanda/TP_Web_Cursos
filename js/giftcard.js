$(document).ready(function(){

	inicializarVistaPrevia();

	editarDestinatario();
	seleccionarColorDeFuente();
	seleccionarTamanioDeFuente();
	editarMonto();


});

function inicializarVistaPrevia() {
	actualizarColorDeFuente();
	actualizarTamanioDeFuente();	
}

function actualizarColorDeFuente() {
	var colorDeFuente = $("input[name='color']:checked").val();
	$("#tituloDestinatario").css("color", colorDeFuente);		
}

function actualizarTamanioDeFuente() {
	var tamanioFuente = $("input[name='tamanioFuente']:checked").val();
	$("#tituloDestinatario").css("font-size", tamanioFuente);
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

function seleccionarTamanioDeFuente() {
	$("input[name='tamanioFuente']").change(function(){
		actualizarTamanioDeFuente();
	});
}

function editarMonto() {
	$("#montoGiftcard").keyup(function(){

		var monto = $(this).val();

		if (monto === "") {
			monto = getMontoDefault();			
		}

		$("#precioVistaPrevia").text(formatearMonto(monto));		
	});
}

function getMontoDefault() {
	return "0000.-";
}

function formatearMonto(monto) {
	return "$" + monto;
}