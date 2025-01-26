import { ElementType } from 'react'
import { TextContent, TooltipContainer } from './styles'

export interface TooltipProps {
  as?: ElementType
  text: string
}

export const Tooltip = ({ as: Component = 'span', text }: TooltipProps) => {
  return (
    <TooltipContainer>
      <Component>
        <TextContent>{text}</TextContent>
      </Component>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tolltip'
