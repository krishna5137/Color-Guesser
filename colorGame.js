let colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
];

let squares = document.getElementsByClassName("square");
let targetColor = document.getElementById("targetColor");
let pickedColor = colors[4];
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
