// src/App.jsx
import React, { useState } from "react"
import "./App.css"
import CoordinatesPanel from "./CoordinatesPanel"

function App() {
  const [dots, setDots] = useState([])
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 })

  const handleDrawing = (e) => {
    if (e.buttons !== 1) return
    const newDot = { x: e.clientX, y: e.clientY }
    setDots((prevDots) => [...prevDots, newDot])
  }

  const handleMouseMove = (e) => {
    setMouseCoords({ x: e.clientX, y: e.clientY })
  }

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <div
        className="drawing-area"
        onMouseMove={handleDrawing}
        onMouseDown={handleDrawing}
      >
        {dots.map((dot, index) => (
          <div
            key={index}
            className="dot"
            style={{ left: `${dot.x}px`, top: `${dot.y}px` }}
          ></div>
        ))}
      </div>
      <CoordinatesPanel x={mouseCoords.x} y={mouseCoords.y} />
    </div>
  )
}

export default App
