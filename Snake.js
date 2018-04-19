var snake = document.getElementById('snake');
var xpos = 0;
var ypos = 0;
var id = setInterval(frame, 5);

function frame() {

    if (xpos == 350)
        clearInterval(id);
}
else {
    xpos++;
    ypos++;
    snake.style.top = ypos + 'px';

}


function move(event) {
        var snake= document.getElementById('snake');
       var snk = {
            updown: function () {
                // takes a string and returns integers => the y vlues of the snake object.
                var y = parseInt(getComputedStyle(snake).top);
                if (event.keyCode == 38) {
                    y = y - 1;
                } else if (event.keyCode == 40) {
                    ++y;
                }

                return y;
            },

            leftright: function () {
                var x = parseInt(getComputedStyle(snake).left);
                if (event.keyCode == 37) {
                    --x;
                } else if (event.keyCode == 39) {
                    ++x;
                }

                return x;
            }
        };

    snake.style.top = (snk.updown()) + "px";
    snake.style.left = (snk.leftright()) + "px";
    // test #2
}

document.addEventListener('keydown', move);
