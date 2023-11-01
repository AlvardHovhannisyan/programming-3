function matrixGenerator(matrixSize,grass,grassEater,predator,qar,home) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
        matrix[i].push(0)
        
        }
    }


    for (let i = 0; i < grass; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1
        
    }

    for (let i = 0; i < grassEater; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2
        
    }
    


    for (let i = 0; i < predator; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3

        
    }

    for (let i = 0; i < qar; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4
    }
    for (let i = 0; i < home; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5
    }
    return matrix
}

var matrix = matrixGenerator(30,40,15,5,7,25)
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

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
       
           if(matrix[y][x] == 1){
                var gr = new Grass(x,y)
                grassArr.push(gr)
           }else  if(matrix[y][x] == 2){
            var grEat = new GrassEater(x,y)
            grassEaterArr.push(grEat)
           }else if(matrix[y][x] == 3){
            var pred = new Predator(x,y)
                predatorArr.push(pred)
            }else if(matrix[y][x] == 4){
                var qar = new Qar(x,y)
                    qarArr.push(qar)
        }else if(matrix[y][x] == 5){
            var home = new Home(x,y)
                homeArr.push(home)
        }
    }
    }
}



function draw() {
    
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
      for(let i in  grassArr){
            grassArr[i].mul()
      }
      for(let i in  grassEaterArr){
        grassEaterArr[i].eat()
      }
     for(let i in predatorArr){
         predatorArr[i].eat()
    }
     for(let i in qarArr){
        qarArr[i].eat()
     }
     for(let i in homeArr){
        homeArr[i].eat()
     }


     console.log(predatorArr);
    }

