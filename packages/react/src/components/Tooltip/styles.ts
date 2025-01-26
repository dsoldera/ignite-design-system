import { styled } from '../../styles'
import { Text } from '../Text'

export const TooltipContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '5px',
  color: '$gray100',
  padding: '12px 16px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: 'max-content',
  position: 'absolute',
  bottom: '0',
  left: '202%',
  transform: 'translateX(-50%)',

  boxShadow: '0px 5px 10px rgba(0,0,0,.25)',

  '&:after': {
    content: '',
    width: '16px',
    height: '16px',
    position: 'absolute',
    top: '25%',
    left: '0',
    transform: 'translateX(-50%)',
    backgroundColor: 'inherit',

    borderTopLeftRadius: 999,
    rotate: '45deg',
  },
})

export const TextContent = styled(Text, {
  color: '$gray200',
})
