import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import CanvasComponent from './CanvasComponent'

interface CanvasProps {
  darkMode: boolean;
  setSelectedComponent: React.Dispatch<React.SetStateAction<any>>;
}

const Canvas: React.FC<CanvasProps> = ({ darkMode, setSelectedComponent }) => {
  const [components, setComponents] = useState([])

  const [, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item: { name: string; type: string }, monitor) => {
      const offset = monitor.getClientOffset()
      const newComponent = {
        id: Date.now(),
        ...item,
        position: { x: offset.x, y: offset.y },
      }
      setComponents((prevComponents) => [...prevComponents, newComponent])
    },
  }))

  return (
    <div
      ref={drop}
      className="flex-1 overflow-auto relative"
      style={{
        backgroundImage: `
          linear-gradient(to right, ${darkMode ? '#4B5563' : '#D1D5DB'} 1px, transparent 1px),
          linear-gradient(to bottom, ${darkMode ? '#4B5563' : '#D1D5DB'} 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0',
      }}
    >
      {components.map((component) => (
        <CanvasComponent
          key={component.id}
          component={component}
          darkMode={darkMode}
          setSelectedComponent={setSelectedComponent}
        />
      ))}
    </div>
  )
}

export default Canvas