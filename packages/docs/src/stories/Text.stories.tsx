import type { Meta, StoryObj } from '@storybook/react';

import { TextProps as OriginalTextProps, Text } from '@ignite-design-system/react';

interface TextProps extends OriginalTextProps {
  children?: React.ReactNode;
}

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Cupcake ipsum dolor sit amet chupa chups carrot cake cupcake. I love jelly beans sweet donut dessert chupa chups pie jelly beans. Ice cream gummi bears jelly lollipop cheesecake pastry.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}