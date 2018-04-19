window.onload = function () {
    var canvas = document.createElement('canvas'),
        canvasContext = canvas.getContext('2d'),
        score = 0,
        level = 0,
        direction = 0;

    // making the grid
    var grid = new Array(20);
    for (var i = 0; i < grid.length; i++) {
        grid[i] = new Array(20);
    }

    canvas.width = 204; //setting canvas width
    canvas.height = 224; // setting canvas height

    var body = document.getElementById('body')[0];
    body.appendChild(canvas); // the canvas object is now appended to the body

// Add the food
    grid = generateFood(grid);
    drawGame();

    function drawGame() {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        drawMain();

    }

    function drawMain() {
    canvasContext.lineWidth = 2; // border thickness is set to 2 pixels
    canvasContext.strokeStyle = 'black'; // border color is black

    /* the border will be moved to the rigt and up */
    canvasContext.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);

    canvasContext.font = '12px sans-serif';
    canvasContext.fillText('Score: ' + score + ' - Level: ' + level, 2, 12);
    }

function generateFood(grid) {
        // Generate a random position for the rows and the columns.
        var roundX = Math.round(Math.random() * 19),
            roundY = Math.round(Math.random() * 19);

        // We also need to watch so as to not place the food
        // on the a same matrix position occupied by a part of the
        // snake's body.
        while (grid[roundX][roundY] === 2) {
            roundX = Math.round(Math.random() * 19);
            roundY = Math.round(Math.random() * 19);
        }

        grid[roundX][roundY] = 1;

        return grid;
    }

};
