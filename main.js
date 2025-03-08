class Node{
    constructor(position){
        this.position           = position;
        this.UpTwoRightOne      = null; 
        this.UpTwoLeftOne       = null;
        this.UpOneRightTwo      = null;
        this.UpOneLeftTwo       = null;
        this.DownTwoRightOne    = null;
        this.DownTwoLeftOne     = null;
        this.DownOneRightTwo    = null;
        this.DownOneLeftTwo     = null;
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
    for(let i = 0; i < visited.length; i++){
        if(visited[i] === node.position)
            return false;
    }
    return true;
}

let visited = [];


// function buildTree(root){
//     let x = root.position[0];
//     let y = root.position[1];
//     if(inBounds([x+1,y+2])&&notVisited([x+1,y+2], visited)&&visited.length<64){
//             const UUR = new Node([x+1,y+2])
//             root.UpTwoRightOne = UUR;
//             visited.push(UUR.position)
//             buildTree(UUR);
//     };
//     if(inBounds([x-1,y+2])&&notVisited([x-1,y+2], visited)&&visited.length<64){
//             const UUL = new Node([x-1,y+2])
//             root.UpTwoLeftOne = UUL;
//             visited.push(UUL.position)
//             buildTree(UUL);
//     };
//     if(inBounds([x+2,y+1])&&notVisited([x+2,y+1], visited)&&visited.length<64){
//             const URR = new Node([x+2,y+1])
//             root.UpOneRightTwo = URR;
//             visited.push(URR.position)
//             buildTree(URR);
//     };
//     if(inBounds([x-2,y+1])&&notVisited([x-2,y+1], visited)&&visited.length<64){
//             const ULL = new Node([x-2,y+1])
//             root.UpOneLeftTwo = ULL;
//             visited.push(ULL.position)
//             buildTree(ULL);
//     };
//     if(inBounds([x+1,y-2])&&notVisited([x+1,y-2], visited)&&visited.length<64){
//             const DDR = new Node([x+1,y-2])
//             root.DownTwoRightOne = DDR;
//             visited.push(DDR.position)
//             buildTree(DDR);
//     };
//     if(inBounds([x-1,y-2])&&notVisited([x-1,y-2], visited)&&visited.length<64){
//             const DDL = new Node([x-1,y-2])
//             root.DownTwoLeftOne = DDL;
//             visited.push(DDL.position)
//             buildTree(DDL);
//     };
//     if(inBounds([x+2,y-1])&&notVisited([x+2,y-1], visited)&&visited.length<64){
//             const DRR = new Node([x+2,y-1])
//             root.DownOneRightTwo = DRR;
//             visited.push(DRR.position)
//             buildTree(DRR);
//     };
//     if(inBounds([x-2,y-1])&&notVisited([x-2,y-1], visited)&&visited.length<64){
//             const DLL = new Node([x-2,y-1])
//             root.DownOneLeftTwo = DLL;
//             visited.push(DLL.position)
//             buildTree(DLL);
//     };
//     return root;
// }

function buildTree(root, end){
    console.log(root)
    console.log(end)
    let x = root.position[0];
    let y = root.position[1];

    let endX = end.position[0];
    let endY = end.position[1];

        if(inBounds([x+1,y+2])){
                const UUR = new Node([x+1,y+2])
                root.UpTwoRightOne = UUR;
        };
        if(inBounds([x-1,y+2])){
                const UUL = new Node([x-1,y+2])
                root.UpTwoLeftOne = UUL;
        };
        if(inBounds([x+2,y+1])){
                const URR = new Node([x+2,y+1])
                root.UpOneRightTwo = URR;
        };
        if(inBounds([x-2,y+1])){
                const ULL = new Node([x-2,y+1])
                root.UpOneLeftTwo = ULL;
        };
        if(inBounds([x+1,y-2])){
                const DDR = new Node([x+1,y-2])
                root.DownTwoRightOne = DDR;
        };
        if(inBounds([x-1,y-2])){
                const DDL = new Node([x-1,y-2])
                root.DownTwoLeftOne = DDL;
        };
        if(inBounds([x+2,y-1])){
                const DRR = new Node([x+2,y-1])
                root.DownOneRightTwo = DRR;
        };
        if(inBounds([x-2,y-1])){
                const DLL = new Node([x-2,y-1])
                root.DownOneLeftTwo = DLL;
        };
}

class Tree {
    constructor(root, end){
        this.root = buildTree(root, end);
    };
    levelOrder(callBack){

    };
    
    height(node){
    
    };
}

const startNode = new Node([0,0]);
const endNode = new Node([3,3]);
const decisionTree = new Tree(startNode, endNode); 