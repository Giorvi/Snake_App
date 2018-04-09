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
    // test
}

document.addEventListener('keydown', move);
