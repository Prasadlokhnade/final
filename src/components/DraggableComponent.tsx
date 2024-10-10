import React from 'react'
import { useDrag } from 'react-dnd'
import { LucideIcon } from 'lucide-react'

interface DraggableComponentProps {
  name: string;
  type: string;
  icon: LucideIcon;
  darkMode: boolean;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({ name, type, icon: Icon, darkMode }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'component',
    item: { name, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={`flex items-center space-x-3 px-4 py-2 cursor-move ${
        darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
      } ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      title={name}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm">{name}</span>
    </div>
  )
}

export default DraggableComponent