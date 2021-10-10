function pullElements(element) {
    return document.getElementById(element);
}
let
    setTargetTextColor = pullElements("color-text"),
    setTargetColor = pullElements("color"),
    leftSquare = pullElements("left-square"),
    rightSquare = pullElements("right-square"),
    result = pullElements("result"),
    arrowPlay = pullElements("arrow-play"),
    btnClicked = pullElements("button"),
    playerScore = pullElements("score"),
    scoreLine = pullElements("score-Line");

let state = "";
let currentColor;
let playing = true;
let wins = 0,
    plays = 0,
    score = ``;

startGame();

function startGame() {
    btnClicked.addEventListener("click", () => {
        playing = true;
    });
    leftSquare.style.backgroundImage = `url("../IMAGES/question-mark.jpg")`;
    rightSquare.style.backgroundImage = `url("../IMAGES/question-mark.jpg")`;
    result.classList.add("hide");
    arrowPlay.classList.add("hide");
    currentColor = randomColor();

    setTargetTextColor.innerHTML = currentColor;
    setTargetTextColor.style.color = currentColor;
    setTargetColor.style.backgroundColor = currentColor;
    setTargetColor.style.color = currentColor;
    //limit plays to 20
    if (plays == 20) {
        wins = 0;
        plays = 0;
    }
}

function checkGameResult(box) {
    if (playing == true) {
        playing = false;

        leftSquare.style.backgroundImage = "none";
        rightSquare.style.backgroundImage = "none";
        state = setBoxes(currentColor);
        // console.log(state);
        // console.log(box);
        if (box === "left") {
            if (state == "win") {
                displayResult("correct");
                wins += 1;
                plays += 1;
            } else {
                displayResult("incorrect");
                plays += 1;
            }

        } else if (box === "right") {
            if (state == "lose") {
                displayResult("correct");
                wins += 1;
                plays += 1;
            } else {
                displayResult("incorrect");
                plays += 1;
            }
        }

        setTimeout(resetGame, 10000);
        clearTimeout();
    }
    score = `You guessed: ${wins} correct of: ${plays} Games`;
    scoreLine.classList.remove("hide");
    playerScore.innerHTML = score;
    //console.log(`You guessed ${wins} correct of ${plays} Games`);
}

function displayResult(outcome) {
    if (outcome == "correct") {
        result.classList.remove("hide");
        arrowPlay.classList.remove("hide");
        result.style.color = "blue";
        result.innerHTML = "Correct Guess!!! <br> Click to Play again";
    } else {
        result.classList.remove("hide");
        arrowPlay.classList.remove("hide");
        result.style.color = "red";
        result.innerHTML = "You Guesssed Wrong <br> Click to Play again";
    }
}

function setBoxes(color) {
    let boxChoice = getRandom();
    let randColor = randomColor();
    let result;

    if (boxChoice == 1) {
        leftSquare.style.backgroundColor = color;
        if (randColor !== color) {
            rightSquare.style.backgroundColor = randColor;
        } else {
            rightSquare.style.backgroundColor = "blueviolet";
        }
        result = "win";
    } else {
        rightSquare.style.backgroundColor = color;
        if (randColor !== color) {
            leftSquare.style.backgroundColor = randColor;
        } else {
            leftSquare.style.backgroundColor = "blueviolet";
        }
        result = "lose";
    }

    return result;
}

function getRandom() {
    return Math.floor(Math.random() * 2);
}

function randomColor() {
    let selector = Math.floor(Math.random() * 6);
    let ranColor = "blue";
    switch (selector) {
        case 1:
            ranColor = "red";
            break;
        case 2:
            ranColor = "green";
            break;
        case 3:
            ranColor = "yellow";
            break;
        case 4:
            ranColor = "orange";
            break;
        case 5:
            ranColor = "black";
            break;
        case 6:
            ranColor = "blue";
            break;
    }
    return ranColor;
}

function resetGame() {
    leftSquare.style.backgroundImage = `url("../IMAGES/question-mark.jpg")`;
    rightSquare.style.backgroundImage = `url("../IMAGES/question-mark.jpg")`;
}