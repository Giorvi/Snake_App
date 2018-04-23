var apple = document.getElementById("apple");
var ypos =  Math.floor(Math.random()*400) + 1;
var xpos = Math.floor(Math.random()*400) + 1;
apple.style.top = ypos + "px";
apple.style.left = xpos + "px";
 if (snake.x < apple.x + apple.width &&
   snake.x + snake.width > apple.x &&
   snake.y < apple.y + apple.height &&
   snake.height + snake.y > apple.y) {
    var yposition =  Math.floor(Math.random()*400) + 1;
    var xposition = Math.floor(Math.random()*400) + 1;
    apple.style.top = yposition + "px";
    apple.style.left = xposition + "px";
}
