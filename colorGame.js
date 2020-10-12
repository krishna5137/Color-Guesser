let colors = generateRandomColors(6);

let squares = document.getElementsByClassName("square");
let targetColor = document.getElementById("targetColor");
let pickedColor = pickRandomColor(colors);
let displayMessage = document.querySelector("#displayMessage");
let heading = document.querySelector("h1");

targetColor.textContent = pickedColor;


for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    //to compare clickedColor with pickedColor
    squares[i].addEventListener("click", function() {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            displayMessage.textContent = "Correct!!";
            changeColor(clickedColor);

        } else {
            displayMessage.textContent = "Try Again!!";
            this.style.backgroundColor = "black";
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
