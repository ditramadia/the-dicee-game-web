let rollBtn = document.querySelector("button");
let dice1 = document.querySelector("#dice1");
let dice2 = document.querySelector("#dice2");
let text = document.querySelector("h2");

function changeDiceImg(player, number) {
    let img = "./assets/images/dice" + number.toString() + ".png";

    if (player === 1) {
        dice1.setAttribute("src", img);
    }
    if (player === 2) {
        dice2.setAttribute("src", img);
    }
}

function rollDice() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    changeDiceImg(1, dice1);
    changeDiceImg(2, dice2);

    if (dice1 > dice2) {
        text.textContent = "Player 1 wins!";
    } else if (dice2 > dice1) {
        text.textContent = "Player 2 wins!";
    } else {
        text.textContent = "Draw!";
    }

    console.log("tes");
}

rollBtn.onclick = () => {
    rollDice();
}