// Definición de las variables del caballero
let caballero = {
    monedas: 100,
    vida: 100,
    armamento: "Espada de acero",
    comidaDragon: 5,
    fuerza: 10,
    energia: 10
};

// Funciones para mostrar mensajes
function mostrarMensaje(mensaje) {
    const mensajeContainer = document.getElementById("mensajeContainer");
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = mensaje;

    // Eliminar cualquier mensaje anterior en el contenedor
    while (mensajeContainer.firstChild) {
        mensajeContainer.removeChild(mensajeContainer.firstChild);
    }

    // Agregar el nuevo mensaje al contenedor
    mensajeContainer.appendChild(nuevoParrafo);
}

// Actualiza la cantidad de monedas
function actualizarMonedas() {
    const cantidadMonedas = document.getElementById("monedas");

    if (cantidadMonedas) {
        cantidadMonedas.textContent = "Tenés " + caballero.monedas + " monedas en tu inventario.";
    }
}


// Función game over
function gameOver() {
    alert("Te has quedado sin vida. Tu caballero suelta la espada al piso, mientras tu dragón sale volando, dejándote atrás. Unas hadas con gorrita te roban el inventario.");
    const reiniciar = confirm("¿Quieres reiniciar el juego?");
    if (reiniciar) {
        reiniciarJuego(); // Asegúrate de tener una función para reiniciar el juego
    } else {
        alert("Pues te has equivocado Caballero, aquí el respawn es obligatorio.")
        reiniciarJuego();
    }
}

function reiniciarJuego() {
    caballero.vida = 100;
    caballero.comidaDragon = 5;
    caballero.monedas = 100;
    caballero.armamento = "Espada de acero";
    caballero.fuerza = 10;
    actualizarMonedas();
    mostrarMenuPrincipal();

    for (let enemigo of enemigos) {
        enemigo.vida = enemigo.vidaInicial;
    }

    document.getElementById("mensajeContainer").innerHTML = "";
    document.getElementById("inventarioCaballero").textContent = "";
}

// Función para mostrar el menú principal y ocultar los demás menús
function mostrarMenuPrincipal() {
    document.getElementById("menuPrincipal").style.display = "block";
    document.getElementById("menuTienda").style.display = "none";
    document.getElementById("menuMazmorra").style.display = "none";
    document.getElementById("menuEntrenar").style.display = "none";
    document.getElementById("menuBatalla").style.display = "none";
}

// Función para mostrar el menú de la tienda y ocultar los demás menús
function mostrarMenuTienda() {
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("menuTienda").style.display = "block";
    document.getElementById("menuMazmorra").style.display = "none";
    document.getElementById("menuEntrenar").style.display = "none";
    
}

// Función para mostrar el menú de la mazmorra y ocultar los demás menús
function mostrarMenuMazmorra() {
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("menuTienda").style.display = "none";
    document.getElementById("menuMazmorra").style.display = "block";
    document.getElementById("menuEntrenar").style.display = "none";
}

// Función para mostrar el menú de entrenamiento y ocultar los demás menús
function mostrarMenuEntrenar() {
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("menuTienda").style.display = "none";
    document.getElementById("menuMazmorra").style.display = "none";
    document.getElementById("menuEntrenar").style.display = "block";
    
}

// Función para comprar vida
function comprarVida() {
    if (caballero.monedas >= 20) {
        caballero.monedas -= 20;
        caballero.vida += 20;
        mostrarMensaje("Has comprado vida. Ahora tienes " + caballero.vida + " puntos de vida. Te quedan " + caballero.monedas + " monedas.");
        actualizarMonedas();
    } else {
        mostrarMensaje("No tienes suficientes monedas para comprar vida.");
    }
}

// Función para comprar armamento
function comprarArmamento() {
    if (caballero.monedas >= 10) {
        caballero.monedas -= 10;
        caballero.armamento = "Espada mágica";
        actualizarMonedas();
        mostrarMensaje("Has comprado nueva arma. Ahora tienes " + caballero.armamento + ". Te quedan " + caballero.monedas + " monedas.");
    } else {
        mostrarMensaje("No tienes suficientes monedas para comprar armamento.");
    }
}

// Función para comprar comida para el dragón
function comprarComidaDragon() {
    if (caballero.monedas >= 20) {
        caballero.monedas -= 20;
        caballero.comidaDragon += 5;
        actualizarMonedas();
        mostrarMensaje("Has comprado comida para tu dragón. Ahora tienes " + caballero.comidaDragon + " unidades de comida. Te quedan " + caballero.monedas + " monedas.");
    } else {
        mostrarMensaje("No tienes suficientes monedas para comprar comida para el dragón.");
    }
}


function verInventario() {
    const inventario = "Inventario del caballero:<br>" +
        "Vida: " + caballero.vida + "<br>" +
        "Armamento: " + caballero.armamento + "<br>" +
        "Energía: " + caballero.energia + "<br>" +
        "Comida para el dragón: " + caballero.comidaDragon;
    document.getElementById("inventarioCaballero").innerHTML = inventario;
}


// Función para entrenar fuerza
function entrenarFuerza() {
    if (caballero.monedas >= 30) {
        caballero.monedas -= 30;
        caballero.fuerza += 1;
        actualizarMonedas();
        mostrarMensaje("Has entrenado tu fuerza. Ahora tienes " + caballero.fuerza + " puntos de fuerza.");
    } else {
        mostrarMensaje("No tienes suficientes monedas para entrenar fuerza.");
    }
}


// NARRATIVAS - funcionan cuando se espera al otro día 
const narrativas = [
    {texto: "La noche es larga e intensa. El frío asecha en las oscuridades del bosque. Tu dragón enciende la fogata con su aliento y duermes con él toda la noche. Pierdes 5 unidades de comida.",
        efecto: () => {caballero.comidaDragon -= 5, caballero.vida += 5;}
    },
    {texto: "Has tenido un sueño tranquilo. Tu dragón ronca suavemente mientras descansa.",
        efecto: () => {caballero.comidaDragon -= 3, caballero.vida += 5;}
    },
    {texto: "Unos pequeños elfos asaltan tu campamento, tu dragón sale volando y quedas atrapado dentro de un círculo enemigo. Sacás la espada pero es más fácil patearlos. Tu dragón aparece y simplemente se recuesta sobre ellos. Ganás dos puntos de fuerza.",
        efecto: () => {caballero.fuerza += 2, caballero.comidaDragon -= 3, caballero.vida += 5;}
    },
    {texto: "La noche pasa sin incidentes. Despiertas sintiéndote renovado y listo para enfrentar un nuevo día.",
        efecto: () => {caballero.comidaDragon -= 3, caballero.vida += 5;}
    }
];

function esperarAlOtroDia() {
    const narrativaIndex = Math.floor(Math.random() * narrativas.length);
    const narrativa = narrativas[narrativaIndex];

    narrativa.efecto(); 

    if (caballero.comidaDragon < 0) {
        caballero.comidaDragon = 0;
    }
    mostrarMensaje(`Has esperado al otro día. ${narrativa.texto} Has recuperado 5 unidades de vida.`);
}


// Asignar las funciones a los botones en el menú principal
document.getElementById("btnTienda").addEventListener("click", mostrarMenuTienda);
document.getElementById("btnMazmorra").addEventListener("click", mostrarMenuMazmorra);
document.getElementById("btnEntrenar").addEventListener("click", mostrarMenuEntrenar);
document.getElementById("btnEsperar").addEventListener("click", esperarAlOtroDia);

// Asignar las funciones a los botones en el menú de la tienda
document.getElementById("btnComprarVida").addEventListener("click", comprarVida);
document.getElementById("btnComprarArmamento").addEventListener("click", comprarArmamento);
document.getElementById("btnComprarComidaDragon").addEventListener("click", comprarComidaDragon);
document.getElementById("btnSalirTienda").addEventListener("click", mostrarMenuPrincipal);

// Asignar las funciones a los botones en el menú de la mazmorra
document.getElementById("btnExplorarHabitacion").addEventListener("click", iniciarBatalla);
document.getElementById("btnVerInventario").addEventListener("click", verInventario), 
document.getElementById("btnSalirMazmorra").addEventListener("click", mostrarMenuPrincipal);

// Asignar las funciones a los botones en el menú de entrenamiento
document.getElementById("btnEntrenarFuerza").addEventListener("click", entrenarFuerza);
document.getElementById("btnEntrenarEnergia").addEventListener("click", entrenarEnergia);
document.getElementById("btnSalirEntrenar").addEventListener("click", mostrarMenuPrincipal);

// Actualizar la cantidad de monedas en la interfaz al inicio del juego
actualizarMonedas();

// BATALLAS

/// Definir enemigos con atributos
let enemigos = [
    { nombre: "Orco", fuerza: 40, vida: 30, vidaInicial: 40 },
    { nombre: "Vampiro", fuerza: 25, vida: 40, vidaInicial: 30 },
    { nombre: "Dragon", fuerza: 30, vida: 60, vidaInicial: 60 },
    { nombre: "Hechizero", fuerza: 15, vida: 70, vidaInicial: 25 }
];

// Variable para controlar el turno del jugador
let enemigoActual = null;

// Función para iniciar una batalla con un enemigo aleatorio
function iniciarBatalla() {
    const enemigoActual = enemigos[Math.floor(Math.random() * enemigos.length)];
    for (let enemigo of enemigos) {
        enemigo.vida = enemigo.vidaInicial;
    }
    alert("¡Has encontrado un " + enemigoActual.nombre + " enemigo! ¿Qué deseas hacer?");
    mostrarAccionesBatalla(enemigoActual);

}

function atacar(turnoJugador) {
    let atacante = turnoJugador ? caballero : enemigoActual;
    let defensor = turnoJugador ? enemigoActual : caballero;

    defensor.vida -= atacante.fuerza;

    if (defensor.vida <= 0) {
        if (turnoJugador) {
            mostrarMensaje("¡Ganaste la batalla!");
        } else {
            mostrarMensaje("¡Perdiste la batalla!");
        }
        volverAMenuMazmorra();
    } else {
        if (turnoJugador) {
            mostrarMensaje("Atacaste al enemigo.");
            actualizarVidaEnemigo();
            setTimeout(function() {
                mostrarMensaje("El enemigo te atacó.");
                caballero.vida -= enemigoActual.fuerza;  
                actualizarVidaCaballero();
            }, 750);
        } else {
            mostrarMensaje("El enemigo te atacó.");
            caballero.vida -= enemigoActual.fuerza;  
            actualizarVidaCaballero();
        }
    }
}

function mostrarMenuBatalla(enemigo) {
    document.getElementById("menuMazmorra").style.display = "none";
    document.getElementById("menuBatalla").style.display = "block";
    enemigoActual = enemigo;
    actualizarVidaCaballero();
    actualizarVidaEnemigo();
}


// funcion para que dragón ataque
let puedeAtacarDragon = true;  // 

function usarAtaqueDragon() {
    if (puedeAtacarDragon) {
        if (caballero.comidaDragon >= 5) {
            enemigoActual.vida -= 30;
            caballero.comidaDragon -= 5;
            if (caballero.comidaDragon < 0) {
                caballero.comidaDragon = 0;
            }
            if (enemigoActual.vida <= 0) {
                mostrarMensaje("¡Ganaste la batalla!");
                volverAMenuMazmorra();
            } else {
                mostrarMensaje("El dragón atacó al enemigo.");
                actualizarVidaEnemigo();
                actualizarComidaDragon();
                turnoEnemigo();
            }
        } else {
            mostrarMensaje("No tienes suficiente comida para que el dragón ataque.");
        }
        puedeAtacarDragon = false;  
    } else {
        mostrarMensaje("Tu dragón no puede atacar, le falta comida o ya ha atacado en este turno.");
    }
}

function huirBatalla() {
    mostrarMensaje("Huyes de la batalla.");
    volverAMenuMazmorra();
}

function volverAMenuMazmorra() {
    document.getElementById("menuMazmorra").style.display = "block";
    document.getElementById("menuBatalla").style.display = "none";
    enemigoActual = null;
}

function actualizarVidaCaballero() {
    document.getElementById("vidaCaballero").textContent = caballero.vida;

    if (caballero.vida <= 0) {
        gameOver();
    }
}

function actualizarVidaEnemigo() {
    document.getElementById("vidaEnemigo").textContent = enemigoActual.vida;
}

function actualizarEnergia() {
    document.getElementById("energiaCaballero").textContent = caballero.energia;
}

// Función de la Energía

function entrenarEnergia() {
    if (caballero.monedas >= 30) {
        caballero.monedas -= 30;
        caballero.energia += 5;
        actualizarMonedas();
        mostrarMensaje("Le has pedido al Mago de Toz que te enseñe un truco, saca sus cartas de su riño y te mira fijo. 'En realidad, no soy mago... pero aprendí este truco en la calle...' . Aprendes el truco a medias, aún así obtienes 5 orbes de energía.");
    } else {
        mostrarMensaje("No tienes suficientes monedas para pagarle al Mago de Toz.");
    }
}

function usarHabilidad(enemigo) { 
    if (caballero.energia >= 15) {
        enemigo = enemigoActual;
        caballero.energia -= 15;
        enemigoActual.vida -= 50;
        actualizarEnergia();
        if (enemigoActual.vida <= 0) {
            mostrarMensaje("El rayo a pulverizado al enemigo. Has ganado 20 monedas.")
            volverAMenuMazmorra();
        } else {
            mostrarMensaje("Tus ojos cambian de color, mientras un aura recorre tu cuerpo. Observás fijo a tu oponente y atacás con un rayo láser. Has gastado 15 orbes de energía.")
            actualizarVidaEnemigo();
            
        }
    } else {
   mostrarMensaje("Empezás a juntar fuerzas en posición karateka y empiezas a levitar. Te das cuenta que el enemigo te mira fijo. Te ponés nervioso, caes al piso y te lastimas la pierna. Tienes que conseguir más orbes de energía, o ir al psicólogo. Has perdido 5 unidades de vida.")
    caballero.vida -= 5;
    actualizarVidaCaballero();
    
}
}

document.getElementById("btnExplorarHabitacion").addEventListener("click", function() {
    let enemigoAleatorio = enemigos[Math.floor(Math.random() * enemigos.length)];
    mostrarMenuBatalla(enemigoAleatorio);
});

document.getElementById("btnAtacar").addEventListener("click", function() {
    atacar(true);
});

document.getElementById("btnAtaqueDragon").addEventListener("click", function() {
    usarAtaqueDragon();
});

document.getElementById("btnHabilidad").addEventListener("click", function() {
    usarHabilidad();
});

document.getElementById("btnHuir").addEventListener("click", function() {
    huirBatalla();
});