//hola mundo

const sectionSeleccionarAtaque = document.getElementById("Seleccionar-Ataque")
const sectionReiniciarCombate = document.getElementById("Combate-de-nuevo")
const SeleccionarJugdor = document.getElementById("Seleccionar")

const botonReiniciar = document.getElementById("Otra-Oportunidad")
botonReiniciar.addEventListener("click", reiniciarJuego)

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

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

var mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
var opcionesDeMokepon
let imputSquare
let imputCircol 
let imputTrayangle
var mascotaJugador
var ataquesMokepon
var ataqueMokeponEnemigo
let botonFuego
let botonAgua
let botonPlanta 
var botones = []
var indexAtaqueJugador
var indexAtaqueEnemigo 
var victoriasJugador = 0
var victoriasEnemigo = 0
var lienzo = mapa.getContext("2d")


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
    sectionVerMapa.style.display = "none"

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

    //sectionSeleccionarAtaque.style.display = "flex"
      sectionVerMapa.style.display = "flex"
      var imagenDeSquare = new Image()
      imagenDeSquare.src = Square.foto  
      lienzo.drawImage(
        imagenDeSquare,
        20,
        40,
        100,
        100
      )
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
        <button id=${ataque.id} class="botonAtaque bAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    } )
     botonFuego = document.getElementById("Ataque-Fuego")
     botonAgua = document.getElementById("Ataque-Agua")
     botonPlanta = document.getElementById("Ataque-Planta")
     botones = document.querySelectorAll(".bAtaque")

    
     
    
}

function secuenciaAtaque() {
    
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            
            if (e.target.textContent === "🔥") {
                 ataqueJugador.push("Fuego")
                 console.log(ataqueJugador)
                 boton.style.background = "#112f58"   
                 boton.disabled = true   
            } else if(e.target.textContent === "💧"){
                ataqueJugador.push("Agua")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true  
            } else {
                ataqueJugador.push("Planta")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true  
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}

function seleccionarMokeponEnemigo() {
    let ataqueAleatorio = aleatorio(0,mokepones.length -1)
    sectionSeleccionarMokepon.style.display = "none"
    spanMokeponEnemigo.innerHTML = mokepones[ataqueAleatorio].nombre
    ataqueMokeponEnemigo = mokepones[ataqueAleatorio].ataques
    secuenciaAtaque()
}


function ataqueAleatorioEnemigo(){
    let ataqueRng = aleatorio(0,ataqueMokeponEnemigo.length -1)
    
    if (ataqueRng == 0 || ataqueRng ==1){
        ataqueEnemigo.push("Fuego")
    } else if (ataqueRng == 3 || ataqueRng == 4 ) {
        ataqueEnemigo.push("Agua")
    } else {
        ataqueEnemigo.push("Planta")
    }
    
    iniciarCombate()
   
} 

function iniciarCombate() {
    if (ataqueJugador.length === 5) {
        combate()
        
    }
}

function indexAmbosOponentes(jugador, enemigo) {
        indexAtaqueJugador = ataqueJugador[jugador];
        indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate(){
   
    for (let index = 0; index < ataqueJugador.length; index++) {
        console.log("for " + (ataqueJugador[index] === ataqueEnemigo[index]))
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearAviso("Poco Eficaz")
        } else if (ataqueJugador[index] === "Fuego" && ataqueEnemigo[index] === "Planta") {
            indexAmbosOponentes(index, index)
            crearAviso("Es muy Eficaz")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === "Agua" && ataqueEnemigo[index] === "Fuego") {
            indexAmbosOponentes(index, index)
            crearAviso("Es muy Eficaz")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === "Planta" && ataqueEnemigo[index] === "Agua") {
            indexAmbosOponentes(index, index)
            crearAviso("Es muy Eficaz")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearAviso("Es muy poco eficaz")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        
        
    }
    revisarCombate()
}
function revisarCombate(){
    if (victoriasJugador === victoriasEnemigo){
        crearAvisoFinal("Esto ha sido empate!")
    } else if (victoriasJugador > victoriasEnemigo){
        crearAvisoFinal("Felicitaciones!, Has vencido.")
    } else {
        crearAvisoFinal("Has sido derrotado")
    }

}

function crearAviso(resultado){
     
    let notificacion = document.createElement("p")
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    seccionAvisos.innerHTML = resultado 
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}
function crearAvisoFinal(resultadoFinal){
   
    seccionAvisos.innerHTML = resultadoFinal
    
   
    sectionReiniciarCombate.style.display = "block"
}

function reiniciarJuego(botonReiniciar){
    
    location.reload(botonReiniciar)
}

function aleatorio (min, max) {
    return Math.floor( Math.random() * (max - min + 1) + min) 
}

window.addEventListener("load" , iniciarJuego)