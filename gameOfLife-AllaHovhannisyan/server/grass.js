let LivingCreature = require('./LivingCreature')

module.exports = class Grass extends LivingCreature {
        mul() {
                this.multiply++;
                var newCell = random(this.chooseCell(0));
                if (this.multiply >= 8 && newCell) {
                }
        }
        mul() {
                this.multiply++
                var emptyCell = this.chooseCell(0)
                var newCell = random(emptyCell)

                let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
                console.log(newCell, 'GRASSSSS');
                if (this.multiply >= 4 && newCell) {
                        var newX = newCell[0]
                        var newY = newCell[1]

                        matrix[newY][newX] = 1
                        let gr = new Grass(newX, newY)
                        grassArr.push(gr)
                        this.multiply = 0
                }
        }
}
