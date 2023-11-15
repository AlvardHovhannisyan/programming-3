var socket = io()

var side = 25


var grassArr = []
var grassEaterArr = []
var predatorArr = [] 
var qarArr = []
var homeArr = []

function addPredator() {
    for (let i = 0; i < 7; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
 if (matrix[y][x]==0) {
     matrix[y][x]  = 3
                var pred = new Predator(x,y)
                predatorArr.push(pred)
 }
    }
}

function addGrasseater() {
    for (let i = 0; i < 6; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
 if (matrix[y][x]==0) {
     matrix[y][x]  = 4
                var grassEater = new GrassEater(x,y)
                grassEaterArr.push(grassEater)
    }
}
}
function addQar() {
    for (let i = 0; i < 8; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
 if (matrix[y][x]==0) {
     matrix[y][x]  = 2
                var qar = new Qar(x,y)
                qarArr.push(qar)
    }
}
}

function setup() {
    frameRate(15)
   createCanvas(matrix[0].length * side ,matrix.length * side)
}



function nkarel() {
    
      for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
          
                if(matrix[y][x] == 1){
                     fill ("darkgreen")
                }else if (matrix[y][x] == 2){
                    fill ("magenta")
                }else if(matrix[y][x] == 3){
                            fill ("red")
                }else if(matrix[y][x] == 4){
                    fill ("navy")
                }else if(matrix[y][x] == 5){
                    fill ("black") 
                }else{
                    fill ("gray")
                }
                rect (x * side , y * side ,side,side)
        }
    }
}
    setInterval(
        function () {
        socket.on('send matrix', nkarel)
        },1000
    )
