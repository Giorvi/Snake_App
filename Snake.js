//Giorvi
var snake = document.getElementById("snake");
var grid = document.getElementById("container")
var xpos = 0;
var ypos = 0;
var xstep = 0;
var ystep = 0;
var id = setInterval(frame, 5);

 function drawSnake() {
        //Initially the body of the snake will be formed by 5 squares.
        var length = 4;
        snake = [];

        //Using a for loop we push the 5 elements inside the array(squares).
        //Every element will have x = 0 and the y will take the value of the index.
        for (var i = length; i>=0; i--) {
        snake.push({x:i, y:0});
          }
        }


function frame() {

    if (xpos > 475 || xpos < 0) {
        xstep = 0;
        ystep = 0;
    }
    if (ypos >  475 || ypos < 0) {
        ystep = 0;
        xstep = 0;
    }

    xpos = xpos + xstep;
    ypos = ypos + ystep;
    snake.style.top = ypos + 'px';
    snake.style.left = xpos + 'px';
}
window.addEventListener("keypress", changeThingColor);

function changeThingColor(event) {

    if (event.key === "a" && xstep != 1) {
        xstep = -1;

        ystep = 0;
    } else if (event.key === "d" && xstep != -1) {
        xstep = 1;
        ystep = 0;

    } else if (event.key === "w" && ystep != 1) {
        ystep = -1;
        xstep = 0;

    } else if (event.key === "s" && ystep != -1) {
        ystep = 1;
        xstep = 0;

    }
    else if (event.key === "l") {

    }
    }

//
