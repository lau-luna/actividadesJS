//Averigua que tipo de dato ingreso el usuario y conventirlo a numero si es cadena (Indica si es posible convertirlo a numero o no).

let dato = prompt('Ingrese un dato');

let tipo = typeof dato;

if (tipo = 'string'){
    let numero = parseInt(dato);

    if(isNaN(numero)){
        alert('No se puede convertir en numero.');
    } else {
        alert('Si se puede convertir en numero.');
        alert(`El numero es: ${dato}`)
    }

} else {
    alert('No se puede convertir en numero.');
}