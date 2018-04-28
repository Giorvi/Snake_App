   var score = document.getElementById('point'),
       modal = document.getElementById('myModal'),
       btn = document.getElementById('myBtn'),
       span = document.getElementsByClassName("close")[0];

   function Snake(xpos, ypos, width, height, xstep, ystep, id) {
       this.xpos = xpos;
       this.ypos = ypos;
       this.width = width;
       this.height = height;
       this.xstep = xstep;
       this.ystep = ystep;
       this.id = id;
       var elem = document.getElementById(this.id);
       this.render = function () {
           elem.style.top = this.ypos + 'px';
           elem.style.left = this.xpos + 'px';
           elem.style.width = this.width + 'px';
           elem.style.height = this.height + 'px';
       }

       this.changeDirection = function (direction) {
           if (direction === "up") {
               this.ystep = -1;
               this.xstep = 0;
           }
           if (direction === "down") {
               this.ystep = 1;
               this.xstep = 0;
           }
           if (direction === "right") {
               this.xstep = 1;
               this.ystep = 0;
           }
           if (direction === "left") {
               this.xstep = -1;
               this.ystep = 0;
           }
           if (direction === "up"){

           }

       }
   }

   function Apple(appleX, appleY, width, height, appleid) {
       this.appleX = appleX;
       this.appleY = appleY;
       this.width = width;
       this.height = height;
       this.appleid = appleid;
       var elem1 = document.getElementById(this.appleid);
       this.render1 = function () {
           elem1.style.top = this.appleY + 'px';
           elem1.style.left = this.appleX + 'px';
           elem1.style.height = this.height + 'px';
           elem1.style.width = this.width + 'px';
       }
   }

   var randomX = Math.floor(Math.random() * 350) + 1;
   var randomY = Math.floor(Math.random() * 350) + 1;

   var snake = new Snake(55, 300, 50, 50, 0, 0, "animation1");
   var apple = new Apple(randomX, randomY, 50, 50, "animation2");


   var id = setInterval(frame, 5);

   function frame() {
       apple.render1();
       checkCollideBorder();
       checkEatApple();
   }

function addPoint () {
    var startPoint = Number(document.getElementById('point').innerHTML);
    startPoint++;
            document.getElementById('point').innerHTML = score;

}

   function checkEatApple() {
       if (snake.xpos < apple.appleX + apple.width && snake.xpos + snake.width > apple.appleX && snake.ypos < apple.appleY + apple.height && snake.height + snake.ypos > apple.appleY) {

           apple.appleX = Math.floor(Math.random() * 350) + 1;
           apple.appleY = Math.floor(Math.random() * 350) + 1;

           addPoint();
       }
   }

   function checkCollideBorder() {
       if (snake.xpos > 350 || snake.xpos < 0) {
           snake.xstep = 0;
           snake.ystep = 0;
       }
       if (snake.ypos > 350 || snake.ypos < 0) {
           snake.xstep = 0;
           snake.ystep = 0;
       }

       snake.xpos = snake.xpos + snake.xstep;
       snake.ypos = snake.ypos + snake.ystep;
       snake.render();
   }


   function checkCollideTail() {

   }

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


   window.addEventListener("keypress", movesnake);

   function movesnake(event) {
       if (event.key === "w") {
           snake.changeDirection("up");
       }
       if (event.key === "s") {
           snake.changeDirection("down");
       }
       if (event.key === "a") {
           snake.changeDirection("left");
       }
       if (event.key === "d") {
           snake.changeDirection("right");
       }
   }
