//hola mundo

const sectionSeleccionarAtaque = document.getElementById("Seleccionar-Ataque")
const sectionReiniciarCombate = document.getElementById("Combate-de-nuevo")
const SeleccionarJugdor = document.getElementById("Seleccionar")

const botonReiniciar = document.getElementById("Otra-Oportunidad")
const spanMokeponJugador = document.getElementById("mokepon-Jugador")

const sectionSeleccionarMokepon = document.getElementById("Seleccionar-Mascota")

const spanMokeponEnemigo = document.getElementById("mokepon-enemigo")

const spanVidasJugador = document.getElementById("vidasJugador")
const spanVidasEnemigo = document.getElementById("vidasEnemigo")

const seccionAvisos = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

var mokepones = []
let ataqueJugador
let ataqueEnemigo
var opcionesDeMokepon
let imputSquare
let imputCircol 
let imputTrayangle
var mascotaJugador
var ataquesMokepon
let botonFuego
let botonAgua
let botonPlanta 


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
    { nombre: '🔥', id: 'Ataque-Fuego' },
    { nombre: '🔥', id: 'Ataque-Fuego' },
    { nombre: '🔥', id: 'Ataque-Fuego' },
    { nombre: '💧', id: 'Ataque-Agua' },
    { nombre: '🌱', id: 'Ataque-Planta' },

)

Circol.ataques.push(
    { nombre: '💧', id: 'Ataque-Agua' },
    { nombre: '💧', id: 'Ataque-Agua' },
    { nombre: '💧', id: 'Ataque-Agua' },
    { nombre: '🔥', id: 'Ataque-Fuego' },
    { nombre: '🌱', id: 'Ataque-Planta' },

)

Trayangle.ataques.push(
    { nombre: '🌱', id: 'Ataque-Planta' },
    { nombre: '🌱', id: 'Ataque-Planta' },
    { nombre: '🌱', id: 'Ataque-Planta' },
    { nombre: '💧', id: 'Ataque-Agua' },
    { nombre: '🔥', id: 'Ataque-Fuego' },

)

mokepones.push(Square,Circol,Trayangle)


function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = "none"  

    mokepones.forEach((Mokepon) =>{
        opcionesDeMokepon =  `
        <input type="radio" name="Mokepones" id=${Mokepon.nombre} />
                    <label class="tarjeta-de-mokepon" for=${Mokepon.nombre}>
                        <p>${Mokepon.nombre}</p>
                        <img src=${Mokepon.foto} alt=${Mokepon.nombre}
                        style="width: 67px;">
                    </label>
        `
        contenedorTarjetas.innerHTML += opcionesDeMokepon
         imputSquare = document.getElementById("Square")
         imputCircol = document.getElementById("Circol")
         imputTrayangle = document.getElementById("Trayangle")
    })

    sectionReiniciarCombate.style.display = "none"
    SeleccionarJugdor.addEventListener("click", seleccionarMokeponJugador)
   
    
}

function seleccionarMokeponJugador(Mokepon){
    sectionSeleccionarMokepon.style.display = "none"

    sectionSeleccionarAtaque.style.display = "flex"

        if (imputSquare.checked == true){
            spanMokeponJugador.innerHTML = imputSquare.id
            mascotaJugador = imputSquare.id
        }
        else if 
        (imputCircol.checked== true){
            spanMokeponJugador.innerHTML = imputCircol.id
            mascotaJugador = imputCircol.id
        }
        else if
        (imputTrayangle.checked== true){
            spanMokeponJugador.innerHTML = imputTrayangle.id
            mascotaJugador = imputTrayangle.id
        }
        else {
       alert("Debes seleccionar un Mokepon") 
       
    } 
    extraerAtaques(mascotaJugador)
    seleccionarMokeponEnemigo()
    
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques =  mokepones[i].ataques 
        }
        
    }
    
    mostrarAtaques(ataques)
}


function mostrarAtaques(ataques){
    ataques.forEach((ataque) =>{
        ataquesMokepon = `
        <button id=${ataque.id} class="botonAtaque">${ataque.nombre} </button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    } )
     botonFuego = document.getElementById("Ataque-Fuego")
     botonAgua = document.getElementById("Ataque-Agua")
     botonPlanta = document.getElementById("Ataque-Planta")
    console.log(botonFuego)
    console.log(botonAgua)
    console.log(botonPlanta)

     botonFuego.addEventListener("click", ataqueFuego)
     botonAgua.addEventListener("click", ataqueAgua)
     botonPlanta.addEventListener("click", ataquePlanta)
    
}

function seleccionarMokeponEnemigo() {
    let ataqueAleatorio = aleatorio(0,mokepones.length -1)
    sectionSeleccionarMokepon.style.display = "none"
    spanMokeponEnemigo.innerHTML = mokepones[ataqueAleatorio].nombre
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
    
    location.reload()
}

function aleatorio (min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min) 
}

window.addEventListener("load" , iniciarJuego)