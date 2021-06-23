//variables que almacenan los inputs
let Nombre  = document.getElementById("nombre");
let Email  = document.getElementById("mail");
let Materia  = document.getElementById("materia");
let boton  = document.getElementById("btn_enviar");
let Resultado = document.getElementById("resultado");

//evento de boton 
boton.addEventListener("click",(e)=> {
    e.preventDefault();//se utiliza para detener una acción por omisión, utilizada
    // comunmente sobre etiquetas (a) o botones input:submit .. e. stopPropagation() 
    //en cambio detiene la propagación de un evento, 
    //con el objetivo de q no se realice otra ejecución u otro listener
    // lo escuche a través del DOM
     let error =verificar();
     //metodo creado para verificar
     if (error[0]) {
         //se revisa si error es igual a cero, si lo es muestra el error
         Resultado.innerHTML = error[1];//esta parte del array es un texto y muestra
         //el mensaje de error
     } else {
         Resultado.innerHTML = "Solicitud enviada con exito";
         //si no hay error muestra el mensaje
         Resultado.classList.add("color");
         
     }
})

const verificar = () =>{
    let error = [];//array
    
    //para comprar lo que tiene dentro el objeto nombre. usamos value para entrar a su valor
    // y length par medir sus caracteres
    if (Nombre.value.length < 5) {
        error[0] = true;//el indice cero es igual a true, por lo que se sumple
        //la condicion en la boton, debajo muestra el otro indice, que es un texto
        error[1] = "El nombre no puede ser menor a 5 caracteres"
        return error;// retornamos error, para que se muestre
    } else if(Nombre.value.length> 40){
        error[0] = true;
        error[1] = "El nombre no puede ser mayor a 40 caracteres"
        return error;
    } else if(Email.value.length < 5) {
    
        error[0] = true;
        error[1] = "El Email no puede ser menor a 5 caracteres"
        return error
    } else if(Email.value.length > 40 ){
        error[0] = true;
        error[1] = "El Email no puede ser mayor a 5 caracteres"
        return error

    }else if(Email.value.indexOf("@") == -1){
        error[0] = true;
        error[1] = "El Email debe llevar el signo de arroba @"
        return error

    }else if(Email.value.indexOf(".com") == -1){
        error[0] = true;
        error[1] = "El Email debe llevar un dominio ejemplo .com";
        return error;

    } else if(Materia.value.length < 4){
        error[0] = true;
        error[1] = "La nombre de la materia no exite";
        return error;

    }else if(Materia.value.length > 40){
        error[0] = true;
        error[1] = "La nombre de la materia no exite";
        return error;

    }

    //si no se cumple, pasamos error como false, para que se salte la parte de 
    //el if en el boton.
    error[0] = false;
    return error;
    //retornamos error
}

