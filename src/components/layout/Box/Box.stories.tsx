import { useTheme } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from './Box';

/**
 * ### Box는 레이아웃을 위한 기본 컴포넌트로 대부분 요소들의 Wrapper로 사용됩니다.
 * - Box는 기본적으로 "div" HTML 요소를 렌더링합니다.
 */
const meta: Meta<typeof Box> = {
  title: 'Components/Layout/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    as: {
      description: 'HTML 요소를 설정합니다.',
      table: {
        type: { summary: 'React.ElementType' },
        defaultValue: { summary: 'div' },
      },
    },
    children: {
      description: '컴포넌트의 자식 요소를 설정합니다.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

/**
 * 기본적인 Box 컴포넌트입니다.
 * style props를 통해 커스텀 스타일을 적용할 수 있습니다.
 */
export const Default: Story = {
  render: (args) => {
    const { colors } = useTheme();

    return (
      <Box
        style={{
          backgroundColor: colors.primary,
          width: '100px',
          height: '100px',
        }}
        {...args}
      />
    );
  },
};

/**
 * as prop을 통해 HTML 요소를 설정할 수 있습니다.
 * 설정된 HTML 요소가 가지는 props를 모두 포함합니다.
 */
export const CustomHTMLElement: Story = {
  render: (args) => {
    const { colors } = useTheme();

    return (
      <Box
        as='button'
        onClick={() => alert('Hello, World!')}
        style={{
          backgroundColor: colors.primary,
          color: colors.white,
          width: '100px',
          height: '50px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
        {...args}
      >
        Box As Button
      </Box>
    );
  },
};
