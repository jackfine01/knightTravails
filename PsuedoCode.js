// PsuedoCode:

    //Set up series of nodes (chessboard)
        //Nodes of 0,0 to 7,7 are possible.

    //Set up knightMoves (move the knight to selected node on a chessboard)
        //knightMoves function: THE END GOAL
            //Takes a current position and a future position.
                //knightMoves should start by looking at all its valid moves from its current position.
                //Intitalize an array: POSSIBLE PATHS.
                        // Calculate Valid Move Count.

                        // For each valid move, do the following:

                            // Intialize an array PATH: [current position].

                                //While we are not at the goal, do the following

                                        // Calculate valid moves 
                                            // ==>  If a valid move results in going to the goal, go there 

                                            // ==>  If no valid move results in getting to the goal, 
                                                                            // go to best(???) node.

                                            // Push that node to the PATH array.

                                // Push that PATH array to the Possible Paths Array.
                        // Compare path lengths, pick the path with the smallest length.
                        // print out that path in console.

            
    //Set up Logic for valid moves.
        // Possible moves in terms of adjusting by 1 and 2: Up / Right = +, Down / Left = -
            // [1,2]  Right 1, Up 2     ++
            // [-1,2] Left 1, Up 2      -+
            // [1,-2] Right 1, Down 2   +-
            // [-1,-2] Left 1, Down 2   --

            // [2,1] Right 2, Up 1      ++
            // [-2,1] Left 2, Up 1      -+
            // [2,-1] Right 2, Down 1   +-
            // [-2,-1] Left 2, Down 1   --
        // Valid Moves are moves that adjust the knight's current position by the valid moves,
                                                        //  so long as it is not out of bounds.  (>0, <7).

    //Set up Logic for best node to travel to.
        // We have a current position
            // we have other available positions
                // at some point we are connected to the final position via these other available positions
                    // we also never need to go back over our current position ==>  
                        // Therefore when looking we can remove current position as an option
                            // Add to invalid move list. ==> Create an invalid move list.
                        // So given current position, go to a valid move, 
                            // add current position and prior position to invalid move list.
                        // A Valid move is a move that:
                            // Is not the current position or a prior position
                            // Is not out of bounds.
                        
                        // To pick the best path, look at all the valid moves, see if any result in destination.
                            //  If is does not, call knightMoves on each of the valid moves?



    //Set up Logic for path picking
        //We have an array of paths of different lengths and we want to print the smallest.
            // Intialize a current variable as possPaths[0]
            // for(let i = 0; i < possPaths.length; i++){
            //      if(possPaths[i].length<current.length){
            //          current = possPaths[i]            
            //      }
            //  }
            // Print current.


// Different Approach: Breadth First Search to solve.
    // What is Breadth First Search in this case?
        // We have a height function that goes all the way down a tree and measures the height.
        // We have a levelOrder function that traverses a tree in a Breadth First Search
        // We have a buildTree function which builds a tree out of the available moves from a given location.
        // We build a Tree out of the available set of set of moves, then we build a tree out of each of those set of moves.
            // When creating this tree, eliminate moves that are out of bounds, or are that already exist.
                // Example:  
                    // Build a Tree from Root
                    // eliminate root node from places to go.
                        // Build Trees from new nodes.
                    // Repeat process until there are no more possible nodes.



