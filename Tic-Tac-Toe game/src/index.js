document.querySelector('.btn').addEventListener("click", (e) => {

    Swal.fire({
        title: 'Enter player names',
        html:
            '<label for="x">X:</label>' +
            '<input id="swal-input1" name="x" class="swal2-input"></br>' +
            '<label for="o">O:</label>' +
            '<input id="swal-input2" name="o" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value
            ]
        }
    }).then((input) => {
        if (input.isConfirmed) {
            document.querySelector('.table').style.display = 'grid';
            e.target.parentElement.style.display = "none";
            restartGame(input.value[0], input.value[1]);
        }
    })

})

function restartGame(x, o) {
    blue = x || "Blue";
    red = o || "Red";

    for (let i = 0; i < fields.length; i++) {
        if (fields[i].classList.contains("cross")) {
            fields[i].classList.remove("cross");
        }
        if (fields[i].classList.contains("circle")) {
            fields[i].classList.remove("circle");
        }
    }
    table = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    turnCount = 0;
    winner = {
        circle: `${red} wins!`,
        cross: `${blue} wins!`,
        tie: "It's a tie!"
    };
}

function checkWin(elClass, elIndex) {
    table[elIndex] = elClass;
    for (combo of winCombo) {
        if (table[combo[0]] === table[combo[1]] && table[combo[1]] === table[combo[2]]) {
            return winner[elClass]
        }
    }
    return winner.tie;
}

const fields = document.querySelectorAll('.field');
let turn = ["cross", "circle"];
let turnCount = 0
let winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];
let table = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener("click", () => {

        if (fields[i].classList.contains('cross') || fields[i].classList.contains('circle')) {
            return;
        }

        fields[i].classList.add(turn[turnCount % 2]);
        let win = checkWin(turn[turnCount % 2], i)
        if (turnCount == 8 || win != winner.tie) {
            turnCount = 0;
            Swal.fire(win).then(() => {
                restartGame(blue, red);
            });
            return;
        }
        turnCount++;
    });
}