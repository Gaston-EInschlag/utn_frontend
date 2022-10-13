//1

// function hola(nombre, apellido, serie) {
//     console.log ("Hola"+  nombre + apellido +  " Tu serie favorita es " + serie)
// }

// hola(" Gastón", " Einschlag", " Rings of Power")

//2

// function cantidadLetras(palabra){

//     let palabraIngresada = prompt ("ingrese una palabra")

//     alert ("su palabra tiene " + palabraIngresada.length + " letras");
// }

// cantidadLetras()

// function pagoEnCuotas() {
//   let importeProducto = parseFloat(prompt("ingrese el valor"));

//   alert("en una cuota tendra 20% de descuento");

//   let cantidadDeCuotas = parseFloat(prompt("¿en cuantas cuotas va a pagar?"));

//   if (cantidadDeCuotas === 1) {
//     alert("su pago con descuento es $ " + importeProducto * 0.8);
//   } else {
//     alert("seran " + parseInt(cantidadDeCuotas) + " cuotas "  + " de $ " + importeProducto / cantidadDeCuotas);
//   }
// }

// pagoEnCuotas();

// function demoraTurnos () {
    
//     let demoraPorTurno = 15;
//     let cantidadTurnos = parseFloat(prompt("¿cuantos turnos tiene por delante?"));
//     alert("cada turno tiene una demora de 15 minutos");
//     alert("su demora sera de: " + cantidadTurnos * demoraPorTurno + " minutos");

// }

// demoraTurnos()

//promedioEdad

const promedioEdad = ()=>{
    let edad1 = parseFloat(prompt("ingrese la primera edad"));
    let edad2 = parseFloat(prompt("ingrese la segunda edad"));
    let edad3 = parseFloat(prompt("ingrese la tercera edad"));
    let edad4 = parseFloat(prompt("ingrese la cuarta edad"));

    alert("la edad promedio es " + ((edad1 + edad2 + edad3 + edad4)/4))

}

promedioEdad()
