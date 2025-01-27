import { Box, TextInputProps as OriginalTextInput, Text, TextInput } from '@dsoldera-ignite-design-system/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

interface TextInputProps extends OriginalTextInput {
  children?: React.ReactNode;
  placeholder?: string;
  size?: string;
  disabled?: boolean;
}

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'prefix-call-example.com/',
    placeholder: 'your-username',
  },
}