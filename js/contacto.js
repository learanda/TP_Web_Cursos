function validarNombre(){

var mensaje1="";
var error1=0;
resetNombre();

        if($(".nombre").val().length < 1){
            mensaje1+="Campo ''Nombre y Apellido'' es obligatorio.";
            error1++;
            $(".nombre").addClass('error1');
        } 
    
if (error1>0){
        
        $("#mensaje1").append(mensaje1);
        return false;
    }
    else{
        return true;
    }

}

function resetNombre(){
    $("#usuario").removeClass('error1');
    $("#mensaje1").empty();
}

$(document).ready(function() {
    
    $("#form").submit(function() {
        return validarNombre();
    });
    
    $(".nombre").keyup(function() {
        validarNombre();
    });
    
});

function validarEmail(){

var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
var mensaje2="";
var error2=0;
resetEmail();

        if(!$(".email").val().match(regexemail)){
            mensaje2+="Campo ''E-Mail'' es obligatorio y debe ser válido. Ej: ejemplo@ejemplo.com";
            error2++;
            $(".email").addClass('error2');
        } 
    
if (error2>0){
        
        $("#mensaje2").append(mensaje2);
        return false;
    }
    else{
        return true;
    }

}

function resetEmail(){
    $(".email").removeClass('error2');
    $("#mensaje2").empty();
}

$(document).ready(function() {
    
    $("#form").submit(function() {
        return validarEmail();
    });
    
    $(".email").keyup(function() {
        validarEmail();
    });
    
});

function validarTelefono(){

var regextel = /^([0-9]{4})+(-)+([0-9]{4})$/;
var mensaje3="";
var error3=0;
resetTel();

        if(!$(".tel").val().match(regextel)){
            mensaje3+="Campo ''Teléfono'' debe ser válido. <p>Ej: 1234-5678</p>";
            error3++;
            $(".tel").addClass('error3');
        } 
    
if (error3>0){
        
        $("#mensaje3").append(mensaje3);
        return false;
    }
    else{
        return true;
    }

}

function resetTel(){
    $(".tel").removeClass('error3');
    $("#mensaje3").empty();
}

$(document).ready(function() {
    
    $("#form").submit(function() {
        return validarTelefono();
    });
    
    $(".tel").keyup(function() {
        validarTelefono();
    });
    
});


function validarTextarea(){

var mensaje4="";
var error4=0;
resetTextarea();

        if($(".area").val().length > 1000){
            mensaje4+="Ha superado el límite permitido de caracteres.";
            error4++;
            $(".area").addClass('error4');
        } 
    
if (error4>0){
        
        $("#mensaje4").append(mensaje4);
        return false;
    }
    else{
        return true;
    }

}

function resetTextarea(){
    $(".area").removeClass('error4');
    $("#mensaje4").empty();
}

$(document).ready(function() {
    
    $("#form").submit(function() {
        return validarTextarea();
    });
    
    $(".area").keyup(function() {
        validarTextarea();
    });
    
});


/*------------------CONTADOR DE CARACTERES-------------------*/
$(document).ready(function(){

    var max_chars = 1000;

    $('#max').html(max_chars);

    $('.area').keyup(function() {
        var chars = $(this).val().length;
        var diff = max_chars - chars;
        $('#contador').html(diff);   
    });
});