import React, { useState } from "react"
import "./App.css"

function App() {
  const [dots, setDots] = useState([])

  const handleDrawing = (e) => {
    const newDot = { x: e.clientX, y: e.clientY }
    setDots((prevDots) => [...prevDots, newDot])
  }

  return (
    <div className="App" onMouseMove={handleDrawing}>
      <div className="drawing-area">
        {dots.map((dot, index) => (
          <div
            key={index}
            className="dot"
            style={{ left: `${dot.x}px`, top: `${dot.y}px` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default App
