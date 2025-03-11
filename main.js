class Node{
    constructor(position){
        this.position = position;
        this.children = new Array(8).fill(null)
    }
    addChild(node, index){
        if(index >= 0 && index <= 8){
            this.children[index] = node;
        } else {
            console.log('child out of bounds')
        }
    }
    getChild(index){
        if(index >= 0 && index <= 8){
            return this.children[index];
        } else {
            console.log('child out of bounds')
        }
    }
    toString(){
        let str = ` [${this.position}] `;
        return str;
    }
};
class boardNode {
    constructor(position){
        this.visited = false;
        this.position = position;
    }
    visit(){
        this.visited = true;
    }
    
}                    
class Gameboard {
    constructor(){
        this.board = this.createBoard();
    }
    createBoard(){
        let nodeList = [];
        let matrix = [
            [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],
            [0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],
            [0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],
            [0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],
            [0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],
            [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],
            [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],
            [0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7]
        ];
        while(matrix.length>0){
            let newNode = new boardNode(matrix.shift())
            nodeList.push(newNode)
        }
        return nodeList;
    };
    find(position){
        let index = 0;
        for(let i = 0; i < 64 ;i++){
            let current = this.board[index].position;
            if(current[0]==position[0]&&current[1]==position[1]){
                return index;
            }
            index++;
        };
    }; 
    visit(position){
        let index = 0;
        for(let i = 0; i < 64 ;i++){
            let current = this.board[index].position;
            if(current[0]==position[0]&&current[1]==position[1]){
                this.board[index].visit();
            }
            index++;
        };
    };
    visited(position){
        let index = 0;
        for(let i = 0; i < 64 ;i++){
            let current = this.board[index].position;
            if(current[0]==position[0]&&current[1]==position[1]){
                return this.board[index].visited;
            }
            index++;
        };
    }
}
function levelOrder(callback, node){
    if(typeof callback !== 'function'){
        throw new Error('Not a function');
    }
    let queue = [node];
        while(queue.length > 0){
            const current = queue.shift();
            console.log(current.position)
            callback(current);
            for(let i = 0; i <= 7; i++){
                let queuePush = current.getChild(i);
                if(queuePush){
                    console.log(queuePush.position)
                    queue.push(queuePush);
                }
            }
        };
}

function knightTravails(start, end){
    const startNode = new Node(start)
    const endNode = new Node(end)
    const gameboard = new Gameboard();
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
    function isValid(node){
        if(inBounds(node.position)&&gameboard.visited(node.position)==false){
            return true;
        }
        return false;
    }
    function expandMoves(node){
        const  UUR = new Node([node.position[0]+1,node.position[1]+2])
        const  UUL = new Node([node.position[0]-1,node.position[1]+2])
        const  DDR = new Node([node.position[0]+1,node.position[1]-2])
        const  DDL = new Node([node.position[0]-1,node.position[1]-2])
        const  URR = new Node([node.position[0]+2,node.position[1]+1])
        const  ULL = new Node([node.position[0]-2,node.position[1]+1])
        const  DRR = new Node([node.position[0]+2,node.position[1]-1])
        const  DLL = new Node([node.position[0]-2,node.position[1]-1])

        let expandedMoves = [UUR,UUL,DDR,DDL,URR,ULL,DRR,DLL];
        for(let i = 0; i < 8; i++){
            let newMove = expandedMoves.shift();
            if(isValid(newMove)){
                gameboard.visit(newMove.position)
                node.addChild(newMove, i);
            }
        }
    }
    const endIndex = gameboard.find(endNode.position);
    console.log(endIndex)
    let queue = [startNode];
    while(queue.length>0&&gameboard.board[endIndex].visited == false){
        console.log(queue)
        let shiftedNode = queue.shift();
        console.log('Expanding: '+ shiftedNode.position)
        if(shiftedNode){
            console.log('Expanding: '+ shiftedNode.position)
            expandMoves(shiftedNode)
            for(let i = 0; i <= 7; i++){
                let queuePush = shiftedNode.getChild(i);
                if(queuePush){
                    console.log(gameboard.board[endIndex].visited == false)
                    console.log('Pushing: '+ queuePush.position)
                    queue.push(queuePush);
                }
            }
        }
    }
    // console.log(gameboard)
    // console.log(startNode)
    let nodes = [];
    levelOrder(node => nodes.push(node.toString()), startNode)
    // console.log(nodes)
    // console.log(nodes.toString())
    let finalString = `${startNode}`;
    while(nodes.includes(endNode.toString())){
        if(nodes.shift()){
            finalString = finalString + "->" + nodes.shift()
        }

    }
    console.log(finalString)
}
knightTravails([3,3],[4,3])
