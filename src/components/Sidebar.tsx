import React from 'react'
import { Square, Circle, Triangle, Type, Layout, Menu, CreditCard, List, Table, Image, Sliders } from 'lucide-react'
import DraggableComponent from './DraggableComponent'

interface SidebarProps {
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode }) => {
  const categories = [
    {
      name: 'Layout',
      components: [
        { name: 'Container', icon: Layout, type: 'container' },
        { name: 'Grid', icon: Layout, type: 'grid' },
        { name: 'Flexbox', icon: Layout, type: 'flexbox' },
      ]
    },
    {
      name: 'UI Elements',
      components: [
        { name: 'Text', icon: Type, type: 'text' },
        { name: 'Button', icon: Square, type: 'button' },
        { name: 'Image', icon: Image, type: 'image' },
      ]
    },
    {
      name: 'Components',
      components: [
        { name: 'Navbar', icon: Menu, type: 'navbar' },
        { name: 'Card', icon: CreditCard, type: 'card' },
        { name: 'List', icon: List, type: 'list' },
        { name: 'Table', icon: Table, type: 'table' },
      ]
    },
    {
      name: 'Forms',
      components: [
        { name: 'Input', icon: Type, type: 'input' },
        { name: 'Checkbox', icon: Square, type: 'checkbox' },
        { name: 'Slider', icon: Sliders, type: 'slider' },
      ]
    },
  ]

  return (
    <div className={`w-64 border-r overflow-y-auto ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-800'}`}>
      {categories.map((category) => (
        <div key={category.name} className="mb-6">
          <h3 className={`px-4 py-2 text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{category.name}</h3>
          <div className="space-y-1">
            {category.components.map((component) => (
              <DraggableComponent
                key={component.name}
                name={component.name}
                type={component.type}
                icon={component.icon}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sidebar