import { Button, Tooltip, TooltipProps } from '@dsoldera-ignite-design-system/react'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    text: "Testando o elemento Tooltip",
  },
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false)
      
      return (
        <Button onClick={() => setIsOpen(!isOpen)} style={{ position: 'relative' }}>
            Button Click me
            {isOpen && Story()}
        </Button>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}