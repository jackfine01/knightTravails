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

function knightTravails(start, end){
    const startNode = new Node(start)
    const endNode = new Node(end)
    const visitedNodes = [startNode];
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
    function notVisited(node, visitedArr){
        for(let i = 0; i < visitedArr.length; i++){
            if(visitedArr[i] == node)
                return false;
        }
        return true;
    }
    function isValid(node, visitedArr){
        if(inBounds(node.position)&&notVisited(node, visitedArr)){
            return true;
        }
        return false;
    }
    function expandMoves(node){
        const  UUR = new Node([node.position+1,node.position+2])
        const  UUL = new Node([node.position-1,node.position+2])
        const  DDR = new Node([node.position+1,node.position-2])
        const  DDL = new Node([node.position-1,node.position-2])
        const  URR = new Node([node.position+2,node.position+1])
        const  ULL = new Node([node.position-2,node.position+1])
        const  DRR = new Node([node.position+2,node.position-1])
        const  DLL = new Node([node.position-2,node.position-1])

        const expandedMoves = [UUR,UUL,DDR,DDL,URR,ULL,DRR,DLL];
        for(let i = 0; i < node.children.length(); i++){
            let newMove = expandedMoves.shift();
            if(isValid(newMove)){
                node.addChild(newMove, index)
                visitedNodes.push(newMove);
            }else{
                node.addChild(null, index)
            }
        }
    }

    while(notVisited(endNode, visitedNodes)){
        const queue = [startNode];
        while(queue.length() > 0){
            let current = queue.shift()
            expandMoves(current);
            for(let i = 0; i < 8; current++){
                if(current.getChild(i)!=null){
                    let queueAddNode = current.getChild(i);
                    queue.push(queueAddNode);
                }
            }
        }
    }
    console.log(startNode)
}

// function idea: add childs to each of the children
    // Take a node
    // for each index, add a child and set that to the index.

