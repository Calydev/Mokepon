//hola mundo

const sectionSeleccionarAtaque = document.getElementById("Seleccionar-Ataque")
const sectionReiniciarCombate = document.getElementById("Combate-de-nuevo")
const SeleccionarJugdor = document.getElementById("Seleccionar")
const botonFuego = document.getElementById("Ataque Fuego")
const botonAgua = document.getElementById("Ataque Agua")
const botonPlanta = document.getElementById("Ataque Planta")
const botonReiniciar = document.getElementById("Otra-Oportunidad")

const imputSquare = document.getElementById("Square")
const imputCircol = document.getElementById("Circol")
const imputTrayangle = document.getElementById("Trayangle")
const spanMokeponJugador = document.getElementById("mokepon-Jugador")

const sectionSeleccionarMokepon = document.getElementById("Seleccionar-Mascota")
const ataqueAleatorio = aleatorio(1,3)
const spanMokeponEnemigo = document.getElementById("mokepon-enemigo")

const spanVidasJugador = document.getElementById("vidasJugador")
const spanVidasEnemigo = document.getElementById("vidasEnemigo")

const seccionAvisos = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")


var mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vidas){
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas
        this.ataques = []
    }
    
}

let Square = new Mokepon('Square', './assets/Square.webp', 5)

let Circol = new Mokepon('Circol', './assets/Circle.webp', 5)

let Trayangle = new Mokepon('Trayangle', './assets/Triangle.webp', 5)

Square.ataques.push(
    { nombre: '🔥', id: 'Ataque Fuego' },
    { nombre: '🔥', id: 'Ataque Fuego' },
    { nombre: '🔥', id: 'Ataque Fuego' },
    { nombre: '💧', id: 'Ataque Agua' },
    { nombre: '🌱', id: 'Ataque Planta' },

)

Circol.ataques.push(
    { nombre: '💧', id: 'Ataque Agua' },
    { nombre: '💧', id: 'Ataque Agua' },
    { nombre: '💧', id: 'Ataque Agua' },
    { nombre: '🔥', id: 'Ataque Fuego' },
    { nombre: '🌱', id: 'Ataque Planta' },

)

Trayangle.ataques.push(
    { nombre: '🌱', id: 'Ataque Planta' },
    { nombre: '🌱', id: 'Ataque Planta' },
    { nombre: '🌱', id: 'Ataque Planta' },
    { nombre: '💧', id: 'Ataque Agua' },
    { nombre: '🔥', id: 'Ataque Fuego' },

)




function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = "none"  
    sectionReiniciarCombate.style.display = "none"
    SeleccionarJugdor.addEventListener("click", seleccionarMokeponJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonPlanta.addEventListener("click", ataquePlanta)
    botonReiniciar.addEventListener("click", reiniciarJuego)
    
}

function seleccionarMokeponJugador(Mokepon){

    sectionSeleccionarAtaque.style.display = "flex"

        if (imputSquare.checked == true){
            spanMokeponJugador.innerHTML = "Square"
            //Mokepon = "Square"
        }

        else if 
        (imputCircol.checked== true){
            spanMokeponJugador.innerHTML = "Circol" 
            //Mokepon = "Circol"
        }
        else if
        (imputTrayangle.checked== true){
            spanMokeponJugador.innerHTML = "Trayangle" 
            //Mokepon = "Trayangle"
        }
        else {
       alert("Debes seleccionar un Mokepon") 
       
    } 
    
    seleccionarMokeponEnemigo()
    
}

function seleccionarMokeponEnemigo() {

    sectionSeleccionarMokepon.style.display = "none"
    if (ataqueAleatorio == 1){
        spanMokeponEnemigo.innerHTML = "Square"
    } else if (ataqueAleatorio == 2) {
        spanMokeponEnemigo.innerHTML = "Circol"
    } else if (ataqueAleatorio == 3){
        spanMokeponEnemigo.innerHTML = "Trayangle"
    }
}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}

function ataquePlanta(){
    ataqueJugador = "Planta"
    ataqueAleatorioEnemigo()
}
function ataqueAleatorioEnemigo(){
    let ataqueRng = aleatorio(1,3)
    
    if (ataqueRng == 1){
        ataqueEnemigo = "Fuego"
    } else if (ataqueRng == 2) {
        ataqueEnemigo = "Agua"
    } else if (ataqueRng == 3) {
        ataqueEnemigo = "Planta"
    }

   combate()
} 

function combate(){
   
    if(ataqueEnemigo == ataqueJugador){
        crearAviso("Poco Eficaz")
    } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Planta"){
        crearAviso("Es muy eficaz")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
        crearAviso("Es muy eficaz")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "Planta" && ataqueEnemigo == "Agua"){
        crearAviso("Es muy eficaz")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearAviso("Es muy poco eficaz")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarCombate()
}
function revisarCombate(){
    if (vidasEnemigo == 0){
        crearAvisoFinal("Has derrotado al oponente")
    } else if (vidasJugador == 0){
        crearAvisoFinal("Has sido derrotado")
    }

}

function crearAviso(resultado){
     
    let notificacion = document.createElement("p")
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    seccionAvisos.innerHTML = resultado 
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}
function crearAvisoFinal(resultadoFinal){
   
    seccionAvisos.innerHTML = resultadoFinal
    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
   
    botonPlanta.disabled = true
   
    sectionReiniciarCombate.style.display = "block"
}

function reiniciarJuego(){
    console.log("reiniciarJuego" + reiniciarJuego)
    location.reload()
}

function aleatorio (min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min) 
}

window.addEventListener("load" , iniciarJuego)