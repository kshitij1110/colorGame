var numsSquare = 6;
var colors = generateRandomColor(numsSquare);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")

var easyButton = document.querySelector("#easy")
var hardButton = document.querySelector("#hard")


colorDisplay.textContent = pickedColor;

easyButton.addEventListener("click", function () {
    easyButton.classList.add("selected")
    numsSquare = 2;
    hardButton.classList.remove("selected")
    colors = generateRandomColor(numsSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++) {
        // add initial colors to squares
        if (colors[i]) {
            squares[i].style.background = colors[i];

        }
        else {
            squares[i].style.display = "none";
        }



    }

})
hardButton.addEventListener("click", function () {

    hardButton.classList.add("selected")
    easyButton.classList.remove("selected")
    numsSquare = 6;
    colors = generateRandomColor(numsSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {

        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }

    console.log(colors);






})


resetButton.addEventListener("click", function () {

    // generate all new color
    h1.style.background = "steelblue";

    colors = generateRandomColor(numsSquare);
    // pick a new random color from array
    pickedColor = pickColor();
    // chnage color color display to match

    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {

        squares[i].style.background = colors[i];

    }


    messageDisplay.textContent = " "
})


for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.background = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked squares
        var clickedColor = this.style.background;
        //compare color to pickedColor
        console.log(clickedColor, pickColor);

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "CORRECT!"
            resetButton.textContent = "Play Again ?"

            changeColors(clickedColor)
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323"
            messageDisplay.textContent = "TRY AGAIN!!"
        }
    });
}

function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.background = color

    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColor(num) {
    // make an array 
    var arr = [];
    // repeat num times

    for (var i = 0; i <= num; i++) {

        arr.push(randomColor());

        // get a rondom color through a funtion
    }
    //return  an array

    return arr;
}


function randomColor() {

    //picked a 'red' color
    var r = Math.floor(Math.random() * 255)

    //picked a 'green' color
    var g = Math.floor(Math.random() * 255)
    //picked a 'blue' color
    var b = Math.floor(Math.random() * 255)


    return "rgb(" + r + ", " + g + ", " + b + ")";
}