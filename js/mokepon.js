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
var mascotaJugadorObjeto
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
var intervalo
var mapaBackground = new Image()
mapaBackground.src = "./assets/mokemap.webp"



let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vidas, fotoMapa, x = 10, y = 10 ){
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 40
        this.alto = 40
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
          )
    }
}

let Square = new Mokepon('Square', './assets/Square.webp', 5, "./assets/ratigueya.webp")

let Circol = new Mokepon('Circol', './assets/Circle.webp', 5, "./assets/hipodoge.png")

let Trayangle = new Mokepon('Trayangle', './assets/Triangle.webp', 5, "./assets/capipepo.webp")

let SquareEnemigo = new Mokepon('Square', './assets/Square.webp', 5, "./assets/ratigueya.webp", 200, 190)

let CircolEnemigo = new Mokepon('Circol', './assets/Circle.webp', 5, "./assets/hipodoge.png", 80, 120)

let TrayangleEnemigo = new Mokepon('Trayangle', './assets/Triangle.webp', 5, "./assets/capipepo.webp", 150, 95)

Square.ataques.push(
    { nombre: '🔥', id: 'Ataque-Fuego' },
    { nombre: '🔥', id: 'Ataque-Fuego' },
    { nombre: '🔥', id: 'Ataque-Fuego' },
    { nombre: '💧', id: 'Ataque-Agua' },
    { nombre: '🌱', id: 'Ataque-Planta' },

)

SquareEnemigo.ataques.push(
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

CircolEnemigo.ataques.push(
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

TrayangleEnemigo.ataques.push(
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
    sectionVerMapa.style.display = "flex"
    iniciarMapa()
    
    
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
    console.log("Ataques enemigo", ataqueMokeponEnemigo);
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

function pintarCanvas() {
    
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.clientWidth, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,

        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()
    SquareEnemigo.pintarMokepon()
    CircolEnemigo.pintarMokepon()
    TrayangleEnemigo.pintarMokepon()
        if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
            revisarColision(CircolEnemigo)
            revisarColision(SquareEnemigo)
            revisarColision(TrayangleEnemigo)
        }
}

function moverDerecha() {
    
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda() {
    
    mascotaJugadorObjeto.velocidadX = -5
}

function moverAbajo() {
    
    mascotaJugadorObjeto.velocidadY = 5
}

function moverArriba() {
    
    mascotaJugadorObjeto.velocidadY = -5
}

function detenerMovimiento() {
   
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case "ArrowUp":
            moverArriba()
            break;
        case "ArrowDown":
            moverAbajo()
            break;
        case "ArrowLeft":
            moverIzquierda()
            break;
        case "ArrowRight":
            moverDerecha()
            break;
        default:
            break;
    }
}

function iniciarMapa() {
    mapa.width = 320
    mapa.height = 240
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    console.log(mascotaJugadorObjeto, mascotaJugador);
    intervalo = setInterval(pintarCanvas, 50) 
      
    window.addEventListener("keydown", sePresionoUnaTecla)
    
    window.addEventListener("keyup", detenerMovimiento)
      
}

function obtenerObjetoMascota() {

    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i] 
     
           }  
           
        }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota= mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
        
        ) {
        return;
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log("se detecto caderiñia");
    sectionSeleccionarAtaque.style.display = "flex"
    sectionVerMapa.style.display = "none"
    seleccionarMokeponEnemigo(enemigo)
    
}

window.addEventListener("load" , iniciarJuego)