import React from 'react';

var Board = function(props) {
  // console.log(props.current)
  return (
    <div className='grid-container'>
    <div className="grid-item">{props.current[0][0]}</div>
    <div className="grid-item">{props.current[0][1]}</div>
    <div className="grid-item">{props.current[0][2]}</div>
    <div className="grid-item">{props.current[1][0]}</div>
    <div className="grid-item">{props.current[1][1]}</div>
    <div className="grid-item">{props.current[1][2]}</div>
    <div className="grid-item">{props.current[2][0]}</div>
    <div className="grid-item">{props.current[2][1]}</div>
    <div className="grid-item">{props.current[2][2]}</div>
    </div>
  )
  
   
}

export default Board;