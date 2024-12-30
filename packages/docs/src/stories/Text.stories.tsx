import type { Meta, StoryObj } from '@storybook/react';

import { TextProps as OriginalTextProps, Text } from '@ignite-design-system/react';

interface TextProps extends OriginalTextProps {
  children?: React.ReactNode;
}

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Cupcake ipsum dolor sit amet chupa chups carrot cake cupcake. I love jelly beans sweet donut dessert chupa chups pie jelly beans. Ice cream gummi bears jelly lollipop cheesecake pastry.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}