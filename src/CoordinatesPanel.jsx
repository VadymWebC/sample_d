// CoordinatesPanel.jsx
import React from "react"
import "./CoordinatesPanel.css"

function CoordinatesPanel({ x, y }) {
  return (
    <div className="coordinates-panel">
      <p>
        Mouse Coords: ({x}, {y})
      </p>
    </div>
  )
}

export default CoordinatesPanel
