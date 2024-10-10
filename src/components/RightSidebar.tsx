import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Input } from './ui/input'
import { Label } from './ui/label'

interface RightSidebarProps {
  darkMode: boolean;
  selectedComponent: any;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ darkMode, selectedComponent }) => {
  const [styles, setStyles] = useState({
    width: '100px',
    height: '100px',
    backgroundColor: '#ffffff',
    color: '#000000',
    fontSize: '16px',
    padding: '8px',
  })

  const handleStyleChange = (property: string, value: string) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [property]: value,
    }))
  }

  return (
    <div className={`w-64 border-l overflow-y-auto ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-200' : 'bg-white border-gray-200 text-gray-800'}`}>
      <Tabs defaultValue="design" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="data">Data</TabsTrigger>
        </TabsList>
        <TabsContent value="design">
          <div className="p-4 space-y-4">
            <h3 className="text-lg font-semibold">Design Properties</h3>
            {selectedComponent ? (
              <>
                <div>
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    value={styles.width}
                    onChange={(e) => handleStyleChange('width', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    value={styles.height}
                    onChange={(e) => handleStyleChange('height', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="backgroundColor">Background Color</Label>
                  <Input
                    id="backgroundColor"
                    type="color"
                    value={styles.backgroundColor}
                    onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="color">Text Color</Label>
                  <Input
                    id="color"
                    type="color"
                    value={styles.color}
                    onChange={(e) => handleStyleChange('color', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="fontSize">Font Size</Label>
                  <Input
                    id="fontSize"
                    value={styles.fontSize}
                    onChange={(e) => handleStyleChange('fontSize', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="padding">Padding</Label>
                  <Input
                    id="padding"
                    value={styles.padding}
                    onChange={(e) => handleStyleChange('padding', e.target.value)}
                  />
                </div>
              </>
            ) : (
              <p>Select a component to edit its properties</p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="data">
          <div className="p-4">
            <h3 className="text-lg font-semibold">Data Binding</h3>
            {selectedComponent ? (
              <p>Data binding options for {selectedComponent.name} will appear here</p>
            ) : (
              <p>Select a component to bind data</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default RightSidebar