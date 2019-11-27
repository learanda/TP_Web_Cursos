$(document).ready(function(){

	editarDestinatario();


});

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
