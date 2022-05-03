// Iniciamos las variables globales
var inter;
var id;
var posicion;
var contador;
var dificultad = 30;
var nuevoTexto;
var nuevoElemento;
var estado = false;
var audio;

// También las variables para las pulsaciones de teclas
var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

// E iniciamos los arrays que nos ayudarán a manejar la información en cada casilla
var arrayVivas = new Array();
var arrayMuertas = new Array();
var arrayConPlantas = new Array();

// Ésta es la primera instrucción que se ejecutará cuando el documento esté cargado
window.addEventListener('load', iniciar, false);

/**
 * Función iniciar
 * Aquí irán las llamadas a funciones que se tienen que activar cuando se carga la página
 */
function iniciar() {
    // Creamos todos los elementos gráficos
    // ------------------------------------

    // h1
    nuevoElemento = document.createElement("h1");
    nuevoTexto = document.createTextNode("EL COLOR QUE CAYÓ DEL CIELO");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementsByTagName("body")[0].appendChild(nuevoElemento);

    // div intro
    nuevoElemento = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(nuevoElemento);
    nuevoElemento.setAttribute("class", "intro");
    nuevoElemento.setAttribute("id", "intro");

    // div intrucciones
    nuevoElemento = document.createElement("div");
    document.getElementById("intro").appendChild(nuevoElemento);
    nuevoElemento.setAttribute("id", "instrucciones");

    nuevoElemento = document.createElement("p");
    nuevoTexto = document.createTextNode("Un meteorito radiactivo ha caído en tu granja.");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("instrucciones").appendChild(nuevoElemento);

    nuevoElemento = document.createElement("p");
    nuevoTexto = document.createTextNode("Recoge todos los tomates que puedas antes de que la tierra se vuelva infértil por la radioactividad (de color gris).");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("instrucciones").appendChild(nuevoElemento);

    nuevoElemento = document.createElement("ul");
    nuevoTexto = document.createTextNode("instrucciones:");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("instrucciones").appendChild(nuevoElemento);

    nuevoElemento = document.createElement("li");
    nuevoTexto = document.createTextNode('Utiliza las teclas "WASD" o las flechas para moverte por el tablero');
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("instrucciones").appendChild(nuevoElemento);
	
	nuevoElemento = document.createElement("li");
    nuevoTexto = document.createTextNode("Si recolectas un tomate, aparecerá otro en otra casilla");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("instrucciones").appendChild(nuevoElemento);
	
	nuevoElemento = document.createElement("li");
    nuevoTexto = document.createTextNode("Si un terreno se vuelve infértil y tiene un tomate, éste se pierde y, en este caso, no crecerá uno nuevo");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("instrucciones").appendChild(nuevoElemento);

    nuevoElemento = document.createElement("li");
    nuevoTexto = document.createTextNode("Recuerda: las vacas no están por la labor de facilitarte el paso");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("instrucciones").appendChild(nuevoElemento);

    nuevoElemento = document.createElement("li");
    nuevoTexto = document.createTextNode("A mayor dificultad, menos tiempo para recolectar");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("instrucciones").appendChild(nuevoElemento);

    nuevoElemento = document.createElement("p");
    document.getElementById("instrucciones").appendChild(nuevoElemento);
    nuevoElemento = document.createElement("strong");
    nuevoTexto = document.createTextNode('¡Elige dificultad y pulsa "Jugar" para empezar la partida!');
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("instrucciones").lastChild.appendChild(nuevoElemento);

    // div dificultad
    nuevoElemento = document.createElement("div");
    document.getElementById("intro").appendChild(nuevoElemento);
    nuevoElemento.setAttribute("id", "dificultad");
    nuevoElemento.setAttribute("class", "buttonbox");

    nuevoElemento = document.createElement("button");
    nuevoTexto = document.createTextNode("Fácil");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("dificultad").appendChild(nuevoElemento);
    nuevoElemento.setAttribute("alt", "facil");
    nuevoElemento.setAttribute("id", "facil");

    nuevoElemento = document.createElement("button");
    nuevoTexto = document.createTextNode("Medio");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("dificultad").appendChild(nuevoElemento);
    nuevoElemento.setAttribute("alt", "medio");
    nuevoElemento.setAttribute("id", "medio");

    nuevoElemento = document.createElement("button");
    nuevoTexto = document.createTextNode("Difícil");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("dificultad").appendChild(nuevoElemento);
    nuevoElemento.setAttribute("alt", "dificil");
    nuevoElemento.setAttribute("id", "dificil");

    // div juegonuevo
    nuevoElemento = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(nuevoElemento);
    nuevoElemento.setAttribute("id", "juegonuevo");
    nuevoElemento.setAttribute("class", "buttonbox oculto");

    nuevoElemento = document.createElement("button");
    nuevoTexto = document.createTextNode("Jugar");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("juegonuevo").appendChild(nuevoElemento);
    nuevoElemento.setAttribute("id", "jugar");
    nuevoElemento.setAttribute("alt", "jugar");

    // div cancelarjuego
    nuevoElemento = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(nuevoElemento);
    nuevoElemento.setAttribute("id", "cancelarjuego");
    nuevoElemento.setAttribute("class", "buttonbox oculto");

    nuevoElemento = document.createElement("button");
    nuevoTexto = document.createTextNode("¡Me rindo!");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("cancelarjuego").appendChild(nuevoElemento);
    nuevoElemento.setAttribute("id", "rendirse");
    nuevoElemento.setAttribute("alt", "rendirse");

    // div puntuacion
    nuevoElemento = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(nuevoElemento);
    nuevoElemento.setAttribute("id", "puntuacion");
    nuevoElemento.setAttribute("class", "buttonbox oculto");

    nuevoElemento = document.createElement("strong");
    nuevoTexto = document.createTextNode("¡FIN DEL JUEGO!");
    nuevoElemento.appendChild(nuevoTexto);
    document.getElementById("puntuacion").appendChild(nuevoElemento);
    nuevoElemento = document.createElement("p");
    document.getElementById("puntuacion").appendChild(nuevoElemento);

    // div game
    nuevoElemento = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(nuevoElemento);
    nuevoElemento.setAttribute("id", "game");
    nuevoElemento.setAttribute("class", "game oculto");

    // audio
    audio = document.createElement("audio");
    audio.src = "audio/pop.mp3";

    // Iniciamos las demás funciones
    // -----------------------------
    /* Según la dificultad, un número mayor de casillas cambiará cada 3 segundos
     * Es decir, el jugador tendrá menos tiempo de recolección
     * Cada uno de los botones de dificultad establece el parámetro "dificultad" y esconde los botones, 
     * además de mostrar el de "jugar"
     */
    document.getElementById("facil").addEventListener('click', function () {
        dificultad = 30;
        document.getElementById("dificultad").setAttribute("class", "buttonbox oculto");
        document.getElementById("juegonuevo").setAttribute("class", "buttonbox");
    }, false);
    document.getElementById("medio").addEventListener('click', function () {
        dificultad = 50;
        document.getElementById("dificultad").setAttribute("class", "buttonbox oculto");
        document.getElementById("juegonuevo").setAttribute("class", "buttonbox");
    }, false);
    document.getElementById("dificil").addEventListener('click', function () {
        dificultad = 70;
        document.getElementById("dificultad").setAttribute("class", "buttonbox oculto");
        document.getElementById("juegonuevo").setAttribute("class", "buttonbox");
    }, false);

    // Llamadas a las funciones asignadas a los botones
    document.getElementById("jugar").addEventListener('click', empezarJuego, false);
    document.getElementById("rendirse").addEventListener('click', cancelarjuego, false);
}

/**
 * Función empezarJuego
 * Se esonden los elementos innecesarios para el juego y se muestran los que sí son necesarios
 * Se crea el tablero y se inicia el temporizador y el granjero
 */
function empezarJuego() {
    // Ponemos el contador de puntuación a 0 al inicio del juego y borramos el indicador de puntuación que se muestra 
    // al término del juego
    contador = 0;
    document.getElementById("puntuacion").removeChild(document.getElementById("puntuacion").getElementsByTagName("p")[0]);

    // Eescondemos "jugar" y la puntuación
    document.getElementById("juegonuevo").setAttribute("class", "buttonbox oculto");
    document.getElementById("instrucciones").setAttribute("class", "oculto");
    document.getElementById("puntuacion").setAttribute("class", "buttonbox oculto");

    // Mostramos "cancelarjuego" y "game"
    document.getElementById("cancelarjuego").setAttribute("class", "buttonbox");
    document.getElementById("game").setAttribute("class", "game");

    // // Creamos un nuevo tablero y la posición inicial del granjero, e iniciamos el temporizador
    crearTablero();
    iniciarGranjero();
    iniciarTemp();
}

/**
 * Función crearTablero
 * Creamos el tablero de juego con las casillas normales, con vacas y con plantas
 */
function crearTablero() {
    // Creamos un array bidimensional que será la guía
    var arrayTablero = new Array(8);
    for (var i = 0; i < arrayTablero.length; i++) {
        arrayTablero[i] = new Array(8);
    }

    // Borramos el antiguo tablero si lo hubiera
    if(document.getElementById("game").childNodes[0] != null && document.getElementById("game").childNodes[0] != undefined) {
        document.getElementById("game").removeChild(document.getElementById("game").childNodes[0]);
    }    

    //Creamos primero un elemento contenedor
    var tablero = document.createElement("div");
    tablero.setAttribute("class", "tablero");
    tablero.setAttribute("id", "tablero");
    document.getElementById("game").appendChild(tablero);

    // Por cada posición de la matriz crearemos una casilla
    let z = 0;
    for (var i = 0; i < arrayTablero.length; i++) {
        for (var j = 0; j < arrayTablero.length; j++) {
            var nuevaCasilla = document.createElement("div");
            id = "" + i + j;
            nuevaCasilla.setAttribute("class", "casilla");
            nuevaCasilla.setAttribute("id", id);

            // Existen dos casillas en el tablero que serán vacas y que no se podrán atravesar
            if ((i == 2 && j == 2) || (i == 6 && j == 5)) {
                nuevaCasilla.style.backgroundImage = "url('./img/cow.png')";
                nuevaCasilla.setAttribute("estado", "tocon");
            } else {
                nuevaCasilla.style.backgroundImage = "url('./img/grass.png')";
                nuevaCasilla.setAttribute("estado", "0");

                // Llenamos arrayVivas con las casillas en buen estado
                arrayVivas[z] = id;
                z++;
            }
            document.getElementById("tablero").appendChild(nuevaCasilla);
        }
    }

    // Mostramos plantas en 10 casillas aleatorias sin repetir
    for (var i = 0; i < 10; i++) {
        do {
            var h = aleatorio(0, arrayVivas.length);
        }
        while (arrayConPlantas.includes(arrayVivas[h]))
        id = arrayVivas[h];

        // Y las incluimos en un arrayConPlantas
        arrayConPlantas.push(id);

        // Establecemos la planta en la casilla
        var nuevaPlanta = document.createElement("img");
        nuevaPlanta.setAttribute("src", "./img/plant.png");
        nuevaPlanta.setAttribute("id", "plant");
        nuevaPlanta.setAttribute("class", "plant");
        document.getElementById(id).appendChild(nuevaPlanta);
    }
}

/**
 * Función iniciarGranjero
 * Se establece un granjero en una posición inicial aleatoria que no esté ocupada por una vaca
 */
function iniciarGranjero() {
    // Tiene que aparecer en una casilla en la que no haya planta
    do {
        var posicionInicial = aleatorio(0, arrayVivas.length);
    }
    while (arrayConPlantas.includes(arrayVivas[posicionInicial]))

    //Si es correcto, asignamos la posición
    id = arrayVivas[posicionInicial];
    posicion = id;

    // Creamos el granjero
    var granjero = document.createElement("img");
    granjero.setAttribute("src", "./img/farmerS.png");
    granjero.setAttribute("id", "farmer");
    document.getElementById(id).appendChild(granjero);

    // Macarmos el estado como true
    estado = true;
}

/**
 * Función iniciarTemp
 * Iniciamos un temporizador cada 3 segundos que nos ayudará a ir cambiando el estado del terreno
 */
function iniciarTemp() {
    // Iniciamos el temporizador
    inter = setInterval(function () {
        let i = 0;
        // Según la dificultad, un número mayor de casillas cambiará
        numCasillas = aleatorio(0, dificultad);

        // Mientras queden casillas "vivas" y repitiendo el bucle un número aleatorio de veces, se ejcuta el código
        do {
            // Seleccionamos una casilla aleatoria dentro de las vivas
            var h = aleatorio(0, arrayVivas.length);
            id = arrayVivas[h];

            // Según el estado de la casilla, se lo cambiamos al siguiente con fondo incluido
            if (document.getElementById(id).attributes["estado"].nodeValue == 0) {
                document.getElementById(id).style.backgroundImage = "url('./img/bad.png')";
                document.getElementById(id).attributes["estado"].nodeValue = 1;
            } else if (document.getElementById(id).attributes["estado"].nodeValue == 1) {
                document.getElementById(id).style.backgroundImage = "url('./img/danger.png')";
                document.getElementById(id).attributes["estado"].nodeValue = 2;
            } else {
                document.getElementById(id).style.backgroundImage = "url('./img/dead.png')";
                document.getElementById(id).attributes["estado"].nodeValue = 3;

                // Si una tierra se muere, se pierde la planta que tenía
                if (document.getElementById(id).childNodes[0] != null
                && document.getElementById(id).childNodes[0] != undefined 
                && document.getElementById(id).childNodes[0].attributes["id"].nodeValue == "plant") {
                    document.getElementById(id).removeChild(document.getElementById(id).childNodes[0]);

                    // La casilla dejará de estar entre las casillas con plantas
                    arrayConPlantas.splice(arrayConPlantas.indexOf(id), 1);                    
                }

                // Quitamos la casilla muerta del array de vivas, la pasamos a las muertas
                arrayVivas.splice(arrayVivas.indexOf(id), 1);
                arrayMuertas.push(id);

                // Si ya no hay más plantas en el tablero se acaba el juego
                if (document.getElementsByClassName("plant").length == 0) {
                    cancelarjuego();
                }

                // Comprobamos si todas están ya muertas: si arrayMuertas contiene ya todas las casillas, se cancela el juego
                if (arrayMuertas.length == 62) {
                    cancelarjuego();
                }
            }
            i++;
        }
        while (i < numCasillas && arrayVivas.length != 0)

    }, 3000, "JavaScript");
}

/**
 * Función clear
 * Se para el temporizador
 */
function clear() {
    clearInterval(inter);
}

/**
 * Función cancelarjuego
 * Se para el temporizador, se borra el contenido de los arrays y se muestran o esconden elementos necesarios o innecesarios,
 * respectivamente, tras terminar el juego
 */
function cancelarjuego() {
    // Paramos el temporizador
    clear();

    // Marcamos el estado como false
    estado = false;

    // Borramos el contenido de los arrays
    arrayVivas = [];
    arrayMuertas = [];
    arrayConPlantas = [];

    // Mostramos la puntuación y volvemos a poner los botones de dificultad como seleccionables
    var nuevaPuntuacion = document.createElement("p");
    var nuevoTexto = document.createTextNode("Puntuación: " + contador);
    nuevaPuntuacion.appendChild(nuevoTexto);
    document.getElementById("puntuacion").appendChild(nuevaPuntuacion);
    document.getElementById("puntuacion").setAttribute("class", "buttonbox");
    document.getElementById("dificultad").setAttribute("class", "buttonbox");
    document.getElementById("instrucciones").setAttribute("class", "");

    // Escondemos el botón para rendirse
    document.getElementById("cancelarjuego").setAttribute("class", "buttonbox oculto");
}

/**
 * Función aleatorio
 * Calcula un número entero aleatorio entre dos números (primero incluido, segundo excluido)
 * @param min número inferior del intervalo
 * @param max número superior del intervalo
 */
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Evento de teclado que contiene la función del movimiento
 */
window.addEventListener("keyup", function (event) {
        if (event.keyCode == 68 || event.keyCode == 39) /* D */ {
            moverse("derecha");
        }
        if (event.keyCode == 83 || event.keyCode == 40) /* S */ {
            moverse("abajo");
        }
        if (event.keyCode == 65 || event.keyCode == 37) /* A */ {
            moverse("izquierda");
        }
        if (event.keyCode == 87 || event.keyCode == 38) /* W */ {
            moverse("arriba");
        }
}, false);

/**
 * Función moverse
 * Especifica qué ocurre con cada movimiento que se produce al pulsar alguna de las teclas WASD o flechas
 * @param lado determina hacia qué lado será el movimiento, según que tecla se pulsa
 */
function moverse(lado) {
    // Creamos las variables locales
    let posA = posicion;
    let posB = posicion;
    let condicion = false;
    let nuevaposInt = 0;
    let urlFarmer;

    // El audio se para antes de un nuevo movimiento
    audio.pause();
    audio.currentTime = 0;

    // Cada posible movimiento tendrá unas restriciones (condicion) y una suma de casillas (que será el movimiento en sí)
    if (lado == "derecha") {
        if (posA != 21 && posA != 64 && posA.substring(1, 2) != "7") {
            condicion = true;
        }
        nuevaposInt = 1;
        urlFarmer = "./img/farmerD.png";
    }
    if (lado == "abajo") {
        if (posA != 12 && posA != 55 && posA.substring(0, 1) != "7") {
            condicion = true;
        }
        nuevaposInt = 10;
        urlFarmer = "./img/farmerS.png";
    }
    if (lado == "izquierda") {
        if (posA != 23 && posA != 66 && posA.substring(1, 2) != "0") {
            condicion = true;
        }
        nuevaposInt = -1;
        urlFarmer = "./img/farmerA.png";
    }
    if (lado == "arriba") {
        if (posA != 32 && posA != 75 && posA.substring(0, 1) != "0") {
            condicion = true;
        }
        nuevaposInt = -10;
        urlFarmer = "./img/farmerW.png";
    }

    // Si un posible movimiento, según el lado, cumple con su condición, se genera el movimiento desde A a B
    // Además, solo te podrás mover si el estado es true
    if (condicion == true && estado == true) {
        // Determinamos hacia qué casilla nos vamos a mover
        posInt = parseInt(posA);
        posInt += nuevaposInt;

        // Si el número está entre 0 y 9, queremos que salga un string, pero con dos dígitos. Ej: "08"
        if (posInt > 9) {
            posB = posInt.toString();
        } else {
            posB = "0" + posInt.toString();
        }

        // Si la casilla hacia la que vamos contiene una planta, se ejecuta el código que la "recolecta"
        if (document.getElementById(posB).childNodes[0] != undefined 
        && document.getElementById(posB).childNodes[0] != null
        && document.getElementById(posB).childNodes[0].attributes["id"].nodeValue == "plant" 
        && arrayVivas.length > 0) {

            // Reproducimos el sonido de recolecta
            audio.play();

            // Borramos la planta de la casilla B y la casilla de arrayConPlantas
            document.getElementById(posB).removeChild(document.getElementById(posB).childNodes[0]);
            arrayConPlantas.splice(arrayConPlantas.indexOf(posB), 1);

            // Bucamos una casilla dentro de los terrenos "vivos", diferente a la casilla B o la A y 
            // que no tenga ya una planta, para que aparezca una nueva
            do {
                var h = aleatorio(0, arrayVivas.length);
            }
            while (arrayVivas[h] == posB || arrayVivas[h] == posA || arrayConPlantas.includes(arrayVivas[h]))
            id = arrayVivas[h];

            // Si la casilla es correcta, la añadimos a arrayConPlantas            
            arrayConPlantas.push(id);

            // Creamos la nueva planta en la casilla que hemos buscado
            var nuevaPlanta = document.createElement("img");
            nuevaPlanta.setAttribute("src", "./img/plant.png");
            nuevaPlanta.setAttribute("id", "plant");
            nuevaPlanta.setAttribute("class", "plant");
            document.getElementById(id).appendChild(nuevaPlanta);

            // Aumentamos el contador de puntuación en 1
            contador++;
        }

        // Borramos el granjero de la casilla de origen, la A
        document.getElementById(posA).removeChild(document.getElementById("farmer"));

        // Y creamos uno nuevo en la casilla B, hacia la que se va a producir el movimiento
        var nuevaPosicion = document.createElement("img");
        nuevaPosicion.setAttribute("src", urlFarmer);
        nuevaPosicion.setAttribute("id", "farmer");
        document.getElementById(posB).appendChild(nuevaPosicion);

        // La nueva casilla (B) se establece como la posicón del granjero
        posicion = posB;
    }
}