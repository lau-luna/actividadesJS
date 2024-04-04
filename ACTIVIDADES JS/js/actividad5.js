/*Crea un programa donde el usuario ingrese un dato y deberás verificar si es un numero */

let dato = prompt('Ingrese un dato');


if (!isNaN(dato)){
    if(dato < 1000){
        alert('Es un numero y es menor a 1000.');
    } else{
        alert('Es un numero y no es menor a 1000.');
    }
} else {
    alert('No es numero.')
}