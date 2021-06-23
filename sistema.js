//se crea un arreglo con varios objetos

let alumno = [{
    nombre:"Wiliams Alexander Tzoc Ixcoy",
    email:"wiliamsg295@gmail.com",
    materia:"Matematica"
},{
    nombre:"Daniel Montes",
    email:"montes2@gmail.com",
    materia:"Quimica"
},{
    nombre:"Venancio lux",
    email:"venancio675@gmail.com",
    materia:"Biologia"
},{
    nombre:"Sara Pelico",
    email:"pelicosara@gmail.com",
    materia:"Lenguaje"
},{
    nombre:"Mario Ixocy",
    email:"mario89pelico@gmail.com",
    materia:"Matematica"
},{
    nombre:"Marco Lobos",
    email:"antony785@gmail.com",
    materia:"Geologia"
}];

let button = document.querySelector(".button");//boton para evento


button.addEventListener("click", function(){//programacion del evento
    //creamos una variable que tenga al div con el select y los options
    let elementos = document.querySelectorAll(".semana");

    //creamos otra variable que tendra al select con los dos options
    let semanaElegida = document.querySelectorAll(".semana-elegida");

    //for en donde itera los objetos que tiene adentro el div, los cuales son
    // select y 2 options
    for (elemento in elementos) {
        //creamos una varible en donde asignamos los objetos que tenga 
        // elementos que a su vez los tiene elemento
     let semana = elementos[elemento];

     //a semana le inyectamos el html de la varible semanaElegida(esta contiene 
     // dos options), dentro tendra elemento que es el que tiene la opcion elegida 
     // de los options, y value para que se tenga su valor
        semana.innerHTML = semanaElegida[elemento].value;
      
    }
})


//for para que recorra alumno y que en cada vuelta este almacenada en alumnos
for (alumnos in alumno) {
    let datos = alumno[alumnos];
    //en datos obtenemos lo de almuno, que a su vez esta guardada en alumnos
    let nombre = datos["nombre"];
    //creamos variables que sirven para almacenar el dato que viene del objeto
    //datos funciona como mensajero que trae los datos del objeto en este caso nombre
    // email y materia y los guarda en las viables
    let email = datos["email"];
    let materia = datos["materia"];

    //inyectamos codigo html dentro de una variable, de esta manera creamos html desde 
    //javascript, en cada div agregamos los datos, que son nombre email y materia, para
    //que en cada vuelta del for se cree uno nuevo y sea dinamico
    let htmlCode = `
    <div class="grid-items nombre">${nombre}</div>
    <div class="grid-items email">${email} </div>
    <div class="grid-items materia">${materia}</div>
    <div class="grid-items semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        
        </select>
    </div>
`;
document.querySelector(".grid-container").innerHTML+= htmlCode;
//traermos a grid-container que es el nombre del contenedor padre
// y dentro agregamos la variable que tiene el html, que es htmlCode, se usa +=
    
}

