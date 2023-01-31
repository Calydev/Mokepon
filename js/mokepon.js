let sectionSeleccionarAtaque = document.getElementById("Seleccionar-Ataque")

let sectionReiniciarCombate = document.getElementById("Combate-de-nuevo")
let SeleccionarJugdor = document.getElementById("Seleccionar")
let botonFuego = document.getElementById("Ataque Fuego")
let botonAgua = document.getElementById("Ataque Agua")
let botonPlanta = document.getElementById("Ataque Planta")
let botonReiniciar = document.getElementById("Otra-Oportunidad")

let imputSquare = document.getElementById("Square")
let imputCircol = document.getElementById("Circol")
let imputTrayangle = document.getElementById("Trayangle")
let spanMokeponJugador = document.getElementById("mokepon-Jugador")

let sectionSeleccionarMokepon = document.getElementById("Seleccionar-Mascota")
let ataqueAleatorio = aleatorio(1,3)
let spanMokeponEnemigo = document.getElementById("mokepon-enemigo")

let spanVidasJugador = document.getElementById("vidasJugador")
let spanVidasEnemigo = document.getElementById("vidasEnemigo")

let seccionAvisos = document.getElementById("resultado")
let ataqueDelJugador = document.getElementById("ataque-del-jugador")
let ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")



let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

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