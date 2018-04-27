//Giorvi
var snake = document.getElementById("snake"),
    apple = document.getElementById("apple"),
    grid = document.getElementById("container"),
    xpos = 0,
    ypos = 0,
    xstep = 0,
    ystep = 0,
    id = setInterval(frame, 1);
//Danielle

var startingPoints = document.getElementById('point').innerHTML;
var startingPoints = 0;
var apple = document.getElementById("apple");
var appleYpos = Math.floor(Math.random() * 350) + 1;
var appleXpos = Math.floor(Math.random() * 350) + 1;
var appleX = appleXpos;
var appleY = appleYpos;
apple.style.top = appleY + "px";
apple.style.left = appleX + "px";

function randomApple() {
    appleYpos = Math.floor(Math.random() * 350) + 1;
    appleXpos = Math.floor(Math.random() * 350) + 1;
    appleX = appleXpos;
    appleY = appleYpos;
    apple.style.top = appleY + "px";
    apple.style.left = appleX + "px";
}

//Giorvi

function frame() {

    if (xpos > 370 || xpos < 0) {
        xstep = 0;
        ystep = 0;
    }
    if (ypos > 370 || ypos < 0) {
        ystep = 0;
        xstep = 0;
    }
    // Danielle
    if ((xpos = appleX) && (ypos = appleY)) {
        randomApple();
        startingPoints++;

    }
    /* if (snake.x < apple.x + apple.width && snake.x + snake.width > apple.x && snake.y < apple.y + apple.height && snake.height + snake.y > apple.y) {
        var yposition = Math.floor(Math.random() * 400) + 1;
        var xposition = Math.floor(Math.random() * 400) + 1;
       apple.style.top = yposition + "px";
        apple.style.left = xposition + "px";
    } */

    xpos = xpos + xstep;
    ypos = ypos + ystep;
    snake.style.top = ypos + 'px';
    snake.style.left = xpos + 'px';


    if (xpos => appleX && xpos <= (appleX + apple.style.width)) {
        document.getElementById("match").innerHTML = 1;
    } else {
        document.getElementById("match").innerHTML = 0;
    }
    document.getElementById("snakexpos").innerHTML = xpos;
    document.getElementById("snakeypos").innerHTML = ypos;

    document.getElementById("applexpos").innerHTML = appleXpos;
    document.getElementById("appleypos").innerHTML = appleYpos;


}
//Giorvi
window.addEventListener("keypress", moveSnake);

function moveSnake(event) {

    if (event.key === "a" && xstep != 1) {
        xstep = -.75;

        ystep = 0;
    } else if (event.key === "d" && xstep != -1) {
        xstep = .75;
        ystep = 0;

    } else if (event.key === "w" && ystep != 1) {
        ystep = -.75;
        xstep = 0;

    } else if (event.key === "s" && ystep != -1) {
        ystep = .75;
        xstep = 0;



    }
}
