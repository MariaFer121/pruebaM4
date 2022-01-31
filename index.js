/**colores para los cuadrados  */
/*let colors = ["rgb(240, 14, 128)", "rgb(125, 60, 152)", "rgb(231, 76, 60)", "rgb(39, 174, 96)", "rgb(41, 128, 185)", "rgb(244, 208, 63)"]*/
/**a la variable colors se asigna el arreglo del generador randon de colores y se coloca el 6 por que tenemos 6 cuadrados */
let colors = generateRandomColors(6);
/**selecciona todos los cuadrados */
let squares = document.querySelectorAll(".square");
/**se debe igualarse a la funcion pickColor para que se genere un numero random de ganador */
let pickedColor = pickColour();
/**el querySelector devuelve el primer elemento */
let colorDisplay = document.querySelector("#colorDisplay");
/**se le coloca # por que es id no una clase */
let message = document.querySelector("#message");
/**con esta variable colaca el color del numero ganador en el h1 */
let h1 = document.querySelector("h1");
/**variables de facil y dificil */
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");
/**variable para evitar el bug */
let numSquares = 6

/**recorrido mediante for loop */
for (var i = 0; i < squares.length; i++) {
    /**agrega los colores a los cuadrados */
    squares[i].style.backgroundColor = colors[i]
}

/**textContent representa el contenido del texto de un nodo y sus dencendientes */
colorDisplay.textContent = pickedColor;

/**Verificador si se eligio el color correcto o incorrecto, si es incorrecto desaparecera */
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    /**evento click para cada cuadrado */
    squares[i].addEventListener("click", function () {
        /**tomara el color del cuadrado seleccionado */
        let clickedColour = this.style.backgroundColor;
        if (clickedColour === pickedColor) {
            /**mostrara en el id del span del message si es correcto */
            message.textContent = "¡Correcto!";
            /**el color aletorio sera mostrado en el pickedColor ya que es  */
            changeColors(clickedColour);
            /**una vez ganado aparecera este mensaje en el boton de nuevos colores pero pero desaperesera el mensaje cuando lo clicken y volvera el mensaje de Nuevos Colores */
            reset.textContent = "¿Jugar de nuevo?"
        } else {
            this.style.backgroundColor = "#232323";
            /**en caso de no ser el correcto mostrara este mensaje */
            message.textContent = "¡Intentalo nuevamente!";
        }

    });
}

/**funcion que cambia el color de los cuadros cuando se selecciona el correcto */
function changeColors(color) {
    h1.style.backgroundColor = color;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

/**esta funcion genera numeros randoms en el span del colorDisplay */
function pickColour() {
    let aleatorio = Math.floor(Math.random() * colors.length);
    return colors[aleatorio];
}

/**esta funcion genera los colores aleatorios entre el 0 y el 255 pero se coloca el 256 para que tome el 255 */
function randomColors() {
    let v1 = Math.floor(Math.random() * 256);
    let v2 = Math.floor(Math.random() * 256);
    let v3 = Math.floor(Math.random() * 256);
    let color = "rgb(" + v1 + ", " + v2 + ", " + v3 + ")";
    return color;
}

/**esta funcion da colores aleatoriamente en los cuadrados dependiendo si es facil o dificl*/
function generateRandomColors(opcion) {
    let arregloC = [];
    /**añade el numero de colores al arreglo */
    for (var i = 0; i < opcion; i++) {
        arregloC.push(randomColors());
    }
    return arregloC;
}
/**genera nuevos colores cuando se apreta el boton de reset */
reset.addEventListener("click", function () {
    colors = generateRandomColors(6);
    pickedColor = pickColour();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
    reset.textContent = "Nuevos Colores"
});
/**se genera 3 cuadrados cuando se apreta el boton de facil */
easy.addEventListener("click", function () {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    numSquares = 3
    pickedColor = pickColour();
    changeColors.textContent = pickedColor;
    /**con esto se dejan solo tres cuadrados en con el boton de facil */
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        if (i > 2) {
            squares[i].style.display = "none";
        }
    }
})
/**genera los 6 cuadrados cuando se apreta el boton dificil */
hard.addEventListener("click", function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    numSquares = 6
    pickedColor = pickColour();
    changeColors.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        if (squares[i].style.display === "none") {
            squares[i].style.display = "block";
        }
        squares[i].style.backgroundColor = colors[i];
    }
})