const jugadores = [
    
    {name: "Varela",
    club: "Boca",
    posicion: "mediocentro",
    valor: 15000000
    
},
    {name: "Langoni",
    club: "Boca",
    posicion: "extremo",
    valor: 20000000
},
    {name: "Gomez",
    club: "Velez",
    posicion: "central",
    valor: 4000000
},
]

const contenedorJugadoresHTML = document.getElementById("contenedorJugadores")


const crearPlantilla = (jugador)=>{

    return `<div class = "jugadores">
    <h2> ${jugador.name} </h2>
    <p> ${jugador.club}</p>
    <p> ${jugador.posicion}</p>
    <p> ${"$" + jugador.valor}</p>
</div>`
}

for (let jugador of jugadores){
    contenedorJugadoresHTML.innerHTML += crearPlantilla (jugador)
}

