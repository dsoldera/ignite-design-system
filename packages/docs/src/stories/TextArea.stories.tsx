import { Box, TextAreaProps as OriginalTextAreaProps, Text, TextArea } from '@dsoldera-ignite-design-system/react';
import type { Meta, StoryObj } from '@storybook/react';

interface TextAreaProps extends OriginalTextAreaProps {
  children?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
}

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}