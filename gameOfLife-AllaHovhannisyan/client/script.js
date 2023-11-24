var socket = io();

var side = 25;


var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var qarArr = [];
var homeArr = [];

function addPredator() {
    socket.emit("addPredator")
}

function addGrasseater() {
    socket.emit("addGrasseater")
}
function addQar() {
   socket.emit("addQar")
}

function setup() {
    frameRate(15)
    createCanvas(30 * side, 30 * side)

    var canvas = document.querySelector('canvas');

    canvas.addEventListener('click', handleCanvasClick);
}

function handleCanvasClick(event) {
    var mouseX = event.clientX - canvas.getBoundingClientRect().left;
    var mouseY = event.clientY - canvas.getBoundingClientRect().top;

    console.log('Canvas clicked at', mouseX, mouseY);
}




function nkarel(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("darkgreen")
            } else if (matrix[y][x] == 2) {
                fill("magenta")
            } else if (matrix[y][x] == 3) {
                fill("red")
            } else if (matrix[y][x] == 4) {
                fill("navy")
            } else if (matrix[y][x] == 5) {
                fill("black")
            } else {
                fill("gray")
            }
            rect(x * side, y * side, side, side)
        }
    }
}
setInterval(
    function () {
        socket.on('send matrix', nkarel)
    }, 1000
)
function changeBackground(season) {
    var body = document.body;

    document.getElementById('spring').style.backgroundColor = '#aaffaa';
      document.getElementById('summer').style.backgroundColor = '#ffcc00';
      document.getElementById('autumn').style.backgroundColor = '#ff9933';
      document.getElementById('winter').style.backgroundColor = '#66ccff';

    switch (season) {
      case 'spring':
        body.style.backgroundColor = '#aaffaa';
        document.getElementById('spring').style.backgroundColor = 'lightgreen';
        break;
      case 'summer':
        body.style.backgroundColor = '#ffcc00';
        document.getElementById('summer').style.backgroundColor = 'yellow';
        break;
      case 'autumn':
        body.style.backgroundColor = '#ff9933';
        document.getElementById('autumn').style.backgroundColor = 'darkorange';
        break;
      case 'winter':
        body.style.backgroundColor = '#66ccff';
        document.getElementById('winter').style.backgroundColor = 'lightblue';
        break;
    }
  }