let eleccionUsuario = 0;
let eleccionPC = 0;
let victoriasUsuario = 0;
let victoriasPC = 0;
let empate = 0;

function numeroAletorio(numMax, numMin) {
    return Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
}

function mostrarEleccion(eleccion) {
    let result = "";
    if (eleccion == 1) {
        result = "Piedra";
    } else if (eleccion == 2) {
        result = "Papel";
    } else if (eleccion == 3) {
        result = "Tijera";
    } else {
        result = "Perder :(";
    }

    return result;
}

function combatir() {

    if (eleccionUsuario == eleccionPC) {
        alert("Empate");
        empate++;
    } else if ((eleccionUsuario == 1 && eleccionPC == 3) || (eleccionUsuario == 3 && eleccionPC == 2) || (eleccionUsuario == 2 && eleccionPC == 1)) {
        alert("Ganaste");
        victoriasUsuario++;
    } else {
        alert("Perdiste");
        victoriasPC++;
    }
}

alert("Juego Piedra, Papel o Tijera. El mejor de 3");

while (victoriasUsuario < 3 && victoriasPC < 3) {

    eleccionUsuario = prompt("1. Piedra, 2. Papel, 3. Tijera");
    eleccionPC = numeroAletorio(3, 1);

    alert("Jugador eligió: " + mostrarEleccion(eleccionUsuario));
    alert("PC eligió: " + mostrarEleccion(eleccionPC));

    combatir();

}

alert("Victorias Usuario: " + victoriasUsuario + ". Victorias PC: " + victoriasPC + ". Empates: " + empate);