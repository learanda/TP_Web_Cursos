function calcularCosto(){
    var num = 0;

    $('.celdas').each(function(){
        num++;
    });
    $("#valor_total").html(num*100+"$.-");
}
$(document).ready(function(){

   calcularCosto();
    $("#agregar").click(function(){
        var pivot= $(".celdas").last();
        //clonamos
        var clon= $(".celdas").first().clone();
        //limpiamos los inputs
        $(clon).children().val("");
        //insertamos
        $(clon).clone().insertAfter(pivot);
        calcularCosto();      
    })               
});

$(document).on("click",".eliminar",function(){
    var padre =$(this).parent(); 
    var pivot= $(".celdas").first();
    if(!padre.is(pivot)){
        padre.remove();
    }else{
        padre.children().val("");
    }
    calcularCosto(); 

}) 

$(document).ready(function(){

//Modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("insc");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    var contenido = "";
    var tags = ["Nombre", "Apellido", "Dni"];
    var i = 0;
    var cantPer = 1;

    $('.celdas').each(function(){
        contenido = contenido.concat("<ul>");
        contenido = contenido.concat("<li>PERSONA "+cantPer+"</li>");
        
       $(this).find("input").each(function(){
        contenido = contenido.concat("<li>");
        contenido = contenido.concat(tags[i]+": "+$(this).val()+" ")
        contenido = contenido.concat("</li>");
         i++;
         
      });
      contenido = contenido.concat("</ul>");
      i=0;
      cantPer +=1;
        
     });
     $("#ingresar_per").html(contenido);
  modal.style.display = "block";
  return false;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});