import { Heading, HeadingProps as OriginalHeadingProps } from '@dsoldera-ignite-design-system/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
    },
    argTypes: {
      size: {
        options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
        control: {
          type: 'inline-radio',
        },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

interface HeadingProps extends OriginalHeadingProps {
  children?: React.ReactNode;
}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}