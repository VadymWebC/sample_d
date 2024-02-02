import React, { useState } from "react"
import "./App.css"

function App() {
  const [dots, setDots] = useState([])

  const handleDrawing = (e) => {
    if (e.buttons !== 1) return // Check if the left mouse button is clicked (buttons: 1)

    const newDot = { x: e.clientX, y: e.clientY }
    setDots((prevDots) => [...prevDots, newDot])
  }

  return (
    <div className="App">
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
    </div>
  )
}

export default App
