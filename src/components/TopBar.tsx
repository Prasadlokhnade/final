import React from 'react'
import { Menu, ChevronDown, Users, Share2, Play, Moon, Sun } from 'lucide-react'

interface TopBarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopBar: React.FC<TopBarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <Menu className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`} />
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Untitled</span>
            <ChevronDown className={`w-4 h-4 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md flex items-center space-x-1">
            <Play className="w-4 h-4" />
            <span>Present</span>
          </button>
          <Users className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`} />
          <Share2 className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-500'}`} />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-1 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4 px-4 py-2 text-sm">
        <span className="text-blue-500">Design</span>
        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Prototype</span>
        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Inspect</span>
      </div>
    </div>
  )
}

export default TopBar