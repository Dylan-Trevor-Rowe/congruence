
import React from 'react'
import { useState } from 'react'
import './App.css';
import Body from  './illust57-4505.jpg'


function App() {

// const [localState, setLocalState] = useState({

// })  


const handleControlledInputChange = (e) => {
var x = e.clientX;
var y = e.clientY; 
var coor = "X coords: " + x + ", Y coords: " + y;
console.log(coor)
 }

  return (
    <div onMouseMove={handleControlledInputChange} className="fullScreen">
    <img className="bodyImage" src={Body}></img>
 
    </div>
  );
}

export default App;
