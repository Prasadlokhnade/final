import React from 'react'
import { useDrag } from 'react-dnd'
import { Square, Circle, Triangle, Type, Layout, Menu, CreditCard, List, Table, Image, Sliders } from 'lucide-react'

interface CanvasComponentProps {
  component: {
    id: number;
    name: string;
    type: string;
    position: { x: number; y: number };
  };
  darkMode: boolean;
  setSelectedComponent: React.Dispatch<React.SetStateAction<any>>;
}

const CanvasComponent: React.FC<CanvasComponentProps> = ({ component, darkMode, setSelectedComponent }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'canvasComponent',
    item: component,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  const getIcon = () => {
    switch (component.type) {
      case 'container':
      case 'grid':
      case 'flexbox':
        return Layout
      case 'text':
        return Type
      case 'button':
        return Square
      case 'image':
        return Image
      case 'navbar':
        return Menu
      case 'card':
        return CreditCard
      case 'list':
        return List
      case 'table':
        return Table
      case 'input':
        return Type
      case 'checkbox':
        return Square
      case 'slider':
        return Sliders
      default:
        return Square
    }
  }

  const Icon = getIcon()

  return (
    <div
      ref={drag}
      className={`absolute cursor-move p-2 rounded ${
        darkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'
      } ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      style={{
        left: component.position.x,
        top: component.position.y,
      }}
      onClick={() => setSelectedComponent(component)}
    >
      <div className="flex items-center space-x-2">
        <Icon className="w-4 h-4" />
        <span className="text-xs">{component.name}</span>
      </div>
    </div>
  )
}

export default CanvasComponent