    var score = document.getElementById("score");
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    /* if (snake.x < apple.x + apple.width &&
        snake.x + snake.width > apple.x &&
        snake.y < apple.y + apple.height &&
        snake.height + snake.y > apple.y) {
        var yposition = Math.floor(Math.random() * 400) + 1;
        var xposition = Math.floor(Math.random() * 400) + 1;
        apple.style.top = yposition + "px";
        apple.style.left = xposition + "px";
    } */
    btn.onclick = function () {
        modal.style.display = "block";
    }
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
