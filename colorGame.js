let noOfSquares = 6;
let colors = [];
let pickedColor;

let squares = document.getElementsByClassName("square");
let targetColor = document.getElementById("targetColor");
let displayMessage = document.querySelector("#displayMessage");
let heading = document.querySelector("h1");
let resetButton = document.querySelector("#resetBtn");
let levels = document.querySelectorAll(".mode");

init();

function init() {
    initializeLevels();
    initializeSquares();
    setUpResetBtn();
    reset();    
}

function initializeLevels() {
    for (let i = 0; i < levels.length; i++) {
        levels[i].addEventListener("click", function() {
            levels[0].classList.remove("selected");
            levels[1].classList.remove("selected");
            this.classList.add("selected");
            noOfSquares = this.textContent === "Easy" ? 3 : 6;
            reset();
        });
    }
}

function initializeSquares() {
    for(var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                displayMessage.textContent = "Correct!!";
                changeColor(clickedColor);
                resetButton.textContent = "Play Again?"
            } else {
                displayMessage.textContent = "Try Again!!";
                this.style.backgroundColor = "black";
                resetButton.textContent = "New Colors";
            }
        });
    }
}

function setUpResetBtn() {
    resetButton.addEventListener("click", function() {
        reset();
    });
}

function reset() {
    displayMessage.textContent = "";
    heading.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    colors = generateRandomColors(noOfSquares);
    //change the picked color
    pickedColor = pickRandomColor(colors);
    targetColor.textContent = pickedColor;
    fillSquares();
}

function changeColor(color) {
    heading.style.backgroundColor = color;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function fillSquares() {
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function pickRandomColor (array) {
    //pick a random number between [0, 6) 6 is exclusive
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

/**
 * fills colors array with random rgb values
 */
function generateRandomColors(number) {
    let arr = [];
    for (var i = 0; i < number; i++) {
        arr.push(generateElements());
    }  
    return arr;
}

/**
 * generates random rgb values
 */
function generateElements () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);  
    return "rgb" + "(" + r + ", " + g + ", " + b + ")";
}
