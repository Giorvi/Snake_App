//Giorvi
var snake = document.getElementById("snake"),
    apple = document.getElementById("apple"),
    grid = document.getElementById("container"),
    xpos = 0,
    ypos = 0,
    xstep = 0,
    ystep = 0,
    id = setInterval(frame, 5),

    // Danielle
    apple = document.getElementById("apple"),
    appleX = 200,
    appleY = 200,
    // appleX = 200,
    appleYpos = Math.floor(Math.random() * 350) + 1,
    appleXpos = Math.floor(Math.random() * 350) + 1;
    apple.style.top = appleYpos + "px";
    apple.style.left = appleXpos + "px";

// Giorvi
function drawSnake() {
    //Initially the body of the snake will be formed by 5 squares.
   var length = 4;
    snake = [];

    //Using a for loop we push the 5 elements inside the array(squares).
    //Every element will have x = 0 and the y will take the value of the index.
    for (var i = length; i >= 0; i--) {
        snake.push({
            x: i,
            y: 0
        });
    }
}

//Giorvi

function frame() {

    if (xpos > 350 || xpos < 0) {
        xstep = 0;
        ystep = 0;
    }
    if (ypos > 350 || ypos < 0) {
        ystep = 0;
        xstep = 0;
    }
    //if (xpos > appleX && ypos > appleY) {
    if (xpos > appleXpos && ypos < appleYpos) {
        apple.style.top = appleYpos + "px";
        apple.style.left = appleXpos + "px";
    }


    xpos = xpos + xstep;
    ypos = ypos + ystep;
    snake.style.top = ypos + 'px';
    snake.style.left = xpos + 'px';

    if (xpos < appleXpos + apple.style.width &&
        xpos + snake.style.width > appleXpos &&
        ypos < appleYpos + apple.style.height &&
        snake.style.height + ypos > appleYpos) {
        var yposition = Math.floor(Math.random() * 350) + 1;
        var xposition = Math.floor(Math.random() * 350) + 1;
        apple.style.top = appleYpos + "px";
        apple.style.left = appleXpos + "px";
    }

    if (xpos => appleXpos && xpos <= (appleXpos + apple.style.width)) {
        document.getElementById("match").innerHTML = 1;
    } else {
        document.getElementById("match").innerHTML = 0;
    }
    document.getElementById("snakexpos").innerHTML = xpos;
    document.getElementById("snakeypos").innerHTML = ypos;

    document.getElementById("applexpos").innerHTML = appleXpos;
    document.getElementById("appleypos").innerHTML = appleYpos;


}
/* (snake.x < apple.x + apple.width &&
        snake.x + snake.width > apple.x &&
        snake.y < apple.y + apple.height &&
        snake.height + snake.y > apple.y)

*/
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
    } else if (event, key === "r") {


    }
}
