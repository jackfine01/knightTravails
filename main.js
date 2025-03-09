class Node{
    constructor(position){
        this.position = position;
        this.children = new Array(8).fill(null)
    }
    addChild(node, index){
        if(index > 0 && index < 8){
            this.children[index] = node;
        } else {
            console.log('child out of bounds')
        }
    }
    getChild(index){
        if(index > 0 && index < 8){
            return this.children[index];
        } else {
            console.log('child out of bounds')
        }
    }
};                    

function inBounds(position){
    let x = position[0]
    let y = position[1]
    let yHigh   = (y > 7);
    let yLow    = (y < 0);
    let xHigh   = (x > 7);
    let xLow    = (x < 0);

    if(!yHigh&&!yLow&&!xHigh&&!xLow){
        return true;
    } else
        return false;
}

function notVisited(node, visited){
    console.log(node)
    for(let i = 0; i < visited.length; i++){
        if(visited[i] === node.position)
            return false;
    }
    return true;
}
let visited = [];
