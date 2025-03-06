class Node{
    constructor(position){
        this.position           = position;
        this.UpTwoRightOne      = [this.position[0]+1,this.position[1]+2]; 
        this.UpTwoLeftOne       = [this.position[0]-1,this.position[1]+2];
        this.UpOneRightTwo      = [this.position[0]+2,this.position[1]+1];
        this.UpOneLeftTwo       = [this.position[0]-2,this.position[1]+1];
        this.DownTwoRightOne    = [this.position[0]+1,this.position[1]-2];
        this.DownTwoLeftOne     = [this.position[0]-1,this.position[1]-2];
        this.DownOneRightTwo    = [this.position[0]+2,this.position[1]-1];
        this.DownOneLeftTwo     = [this.position[0]-1,this.position[1]-1];
    }
};                    

function inBounds(position){
    if(position[0] < 0 || position[0] < 0){
        return false;
    } else if(position[0] > 7 || position[0] > 7){
        return false;
    } else if(position[1] < 0 || position[1] < 0){
        return false;
    } else if(position[1] > 7 || position[1] > 7){
        return false;
    } else
        return true;
}

function notVisited(node, visited){
    for(let i = 0; i < visited.length; i++){
        if(visited[i] === node.position)
            return false;
    }
    return true;
}

let visited = [];

function buildTree(root){
    visited.push(root.position)
    if(inBounds(root.UpTwoRightOne)&&notVisited(root.UpTwoRightOne)){
        const UUR = new Node(root.UpTwoRightOne)
        buildTree(UUR);
    }
    if(inBounds(root.UpTwoLeftOne)&&notVisited(root.UpTwoLeftOne)){
        const UUL = new Node(root.UpTwoLeftOne)
        buildTree(UUL);
    }
    if(inBounds(root.UpOneRightTwo&&notVisited(root.UpOneRightTwo))){
        const URR = new Node(root.UpOneRightTwo)
        buildTree(URR);
    }
    if(inBounds(root.UpOneLeftTwo&&notVisited(root.UpOneLeftTwo))){
        const ULL = new Node(root.UpOneLeftTwo)
        buildTree(ULL);
    }
    if(inBounds(root.DownTwoRightOne&&notVisited(root.DownTwoRightOne))){
        const DDR = new Node(root.DownTwoRightOne)
        buildTree(DDR);
    }
    if(inBounds(root.DownTwoLeftOne&&notVisited(root.DownTwoLeftOne))){
        const DDL = new Node(root.UpTwoLeftOne)
        buildTree(DDL);
    }
    if(inBounds(root.DownOneRightTwo&&notVisited(root.DownOneRightTwo))){
        const DRR = new Node(root.DownOneRightTwo)
        buildTree(DRR);
    }
    if(inBounds(root.DownOneLeftTwo&&notVisited(root.DownOneLeftTwo))){
        const DLL = new Node(root.DownOneLeftTwo)
        buildTree(DLL);
    }

}

class Tree {
    constructor(root){
        this.root = root;
    };
    levelOrder(callBack){

    };
    
    height(node){
    
    };
}