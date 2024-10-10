import React, { useState } from 'react'
import TopBar from './components/TopBar'
import Sidebar from './components/Sidebar'
import Canvas from './components/Canvas'
import RightSidebar from './components/RightSidebar'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedComponent, setSelectedComponent] = useState(null)

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} flex flex-col`}>
        <TopBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar darkMode={darkMode} />
          <Canvas darkMode={darkMode} setSelectedComponent={setSelectedComponent} />
          <RightSidebar darkMode={darkMode} selectedComponent={selectedComponent} />
        </div>
      </div>
    </DndProvider>
  )
}

export default App