var snake = document.getElementById("snake");
var xpos = 0;
var ypos = 0;
var xstep = 0;
var ystep = 0;
var id = setInterval(frame, 5);

function frame() {


    if (xpos > 350 || xpos < 0) {
        xstep = 0;
        ystep = 0;
    }
    if (ypos > 350 || ypos < 0) {
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
    if (event.key === "a") {
        xstep = -1;
        ystep = 0;
    } else if (event.key === "d") {
        xstep = 1;
        ystep = 0;

    } else if (event.key === "w") {
        ystep = -1;
        xstep = 0;

    } else if (event.key === "s") {
        ystep = 1;
        xstep = 0;

    }
}
