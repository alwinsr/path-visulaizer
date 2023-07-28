import { useState } from 'react';
import Node from './Node.jsx';
import './Board.css';

const Board = () => {
  const numRows = 25; // Number of rows in the board
  const numCols = 65; // Number of columns in the board


  const initialNodeStates = Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, () => ({isWall: false, isStart: false, isFinish: false}))
  );

  initialNodeStates[10][10].isStart = true;
  initialNodeStates[10][50].isFinish = true;

  const [nodeStates, setNodeStates] = useState(initialNodeStates);
  const [isMouseDown, setIsMouseDown] = useState(false);

    
  const handleNodeClick = (row, col) => {
    console.log(`Clicked node key: ${row}-${col}`);

    const updatedNodeStates = [...nodeStates];
    // updatedNodeStates[row][col] = !updatedNodeStates[row][col];
    updatedNodeStates[row][col].isWall = !updatedNodeStates[row][col].isWall;
    setNodeStates(updatedNodeStates);
  };

  const handleNodeMouseOver = (row, col) => {
    if (isMouseDown) {
      const updatedNodeStates = [...nodeStates];
      updatedNodeStates[row][col].isWall = true;
      setNodeStates(updatedNodeStates);
    }
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const nodes = [];
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (col < numCols - 1) {
        const { isWall, isStart, isFinish} = nodeStates[row][col];
        let nodeStyle = { backgroundColor: 'white' };
        if (isStart) {
          nodeStyle = { background: 'red' };
        } else if (isFinish) {
          nodeStyle = { backgroundColor: 'green' };
        } else if(isWall){
          nodeStyle = { backgroundColor: 'blue' };
        }

        nodes.push(
          <Node
            nodeStyle={nodeStyle}
            onClick={() => handleNodeClick(row, col)}  
            onMouseOver={() => handleNodeMouseOver(row, col)}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            key={`${row}-${col}`}
          />
        );
      }
    }
  }

  return <div className="grid">{nodes}</div>;
};

export default Board;
