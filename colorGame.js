let noOfSquares = 6;
let colors = generateRandomColors(noOfSquares);

let squares = document.getElementsByClassName("square");
let targetColor = document.getElementById("targetColor");
let pickedColor = pickRandomColor(colors);
let displayMessage = document.querySelector("#displayMessage");
let heading = document.querySelector("h1");
let resetButton = document.querySelector("#resetBtn");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    noOfSquares = 3;
    colors = generateRandomColors(noOfSquares);
    pickedColor = pickRandomColor(colors);
    targetColor.textContent = pickedColor;
    //fill 3 squares and hide the rest
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
});

hardBtn.addEventListener("click", function() {
    noOfSquares = 6;
    colors = generateRandomColors(noOfSquares);
    pickedColor = pickRandomColor(colors);
    targetColor.textContent = pickedColor;
    //fill 3 squares and hide the rest
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
});

resetButton.addEventListener("click", function() {
    displayMessage.textContent = "";
    heading.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    //generate random colored array
    colors = generateRandomColors(noOfSquares);
    //change the picked color
    pickedColor = pickRandomColor(colors);
    targetColor.textContent = pickedColor;
    //fill the squares with new colors array
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});

targetColor.textContent = pickedColor;


for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    //to compare clickedColor with pickedColor
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

function changeColor(color) {
    heading.style.backgroundColor = color;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
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
