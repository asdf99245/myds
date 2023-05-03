import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '.';

/**
 * ### Icon은 아이콘을 표시하기 위한 컴포넌트입니다.
 * - Icon은 SVG 형태의 아이콘을 표시합니다.
 */
const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: '표시할 아이콘을 설정합니다.',
      table: {
        type: { summary: 'IconType' },
      },
    },
    color: {
      description: '아이콘의 색상을 설정합니다.',
      table: {
        type: { summary: "CSSProperties['color']" },
      },
      control: { type: 'color' },
    },
    size: {
      description: '아이콘의 크기를 설정합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

/**
 * 사용자 아이콘
 */
export const User: Story = {
  args: {
    icon: 'user',
  },
};
