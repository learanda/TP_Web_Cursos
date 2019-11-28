window.onload=function(){
	if(sessionStorage.contador != undefined){
		document.getElementById("numcarrito").innerHTML = sessionStorage.contador
    }

}

function comprar(){
    // Si existe contador se incrementa y sino se inicializa
    if (sessionStorage.contador) {
        // Se convierte el contador a entero porque por defecto es una cadena
        sessionStorage.contador = parseInt(sessionStorage.contador) + 1;
    } else {
        sessionStorage.contador = 1;
    }
    document.getElementById("numcarrito").innerHTML = sessionStorage.contador;
}

/*
function resetearClicks() {
    localStorage.removeItem("contador");
}*/

/********** SLIDER **********/
$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
    });
  });