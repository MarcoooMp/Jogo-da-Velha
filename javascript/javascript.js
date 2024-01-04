var player = "X";

function play(cell) {
    if (cell.innerHTML === "") {
        cell.innerHTML = player;

        // Use a comparação de igualdade estrita "==="
        if (player === "X") {
            player = "O";
        } else {
            player = "X";
        }
    }
}

function restart() {
    player = "X";
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
    document.getElementById("restart").innerHTML = "";
}

