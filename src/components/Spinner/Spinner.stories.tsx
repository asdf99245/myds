import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

/**
 * ### Spinner는 특정 액션이 처리되고 있을 때 로딩상태를 표시하기 위한 컴포넌트입니다.
 */
const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: 'Spinner의 크기를 설정합니다.',
      table: {
        defaultValue: { summary: '20px' },
      },
    },
    thick: {
      description: 'Spinner border의 굵기를 설정합니다.',
      table: {
        defaultValue: { summary: '2px' },
      },
    },
    color: {
      description: 'Spinner의 색상을 설정합니다.',
      table: {
        defaultValue: { summary: 'colors.primary' },
      },
      control: { type: 'color' },
    },
    speed: {
      description: 'Spinner의 회전속도를 설정합니다.',
      table: {
        defaultValue: { summary: '0.75s' },
      },
      control: { type: 'text' },
    },
    as: {
      table: { disable: true },
    },
    theme: {
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

/**
 * 기본 Spinner입니다.
 */
export const Default: Story = {
  args: {},
};

/**
 * Spinner의 크기를 설정할 수 있습니다.
 */
export const CustomSize: Story = {
  args: {
    size: 40,
  },
};

/**
 * Spinner border의 굵기를 설정할 수 있습니다.
 */
export const CustomThick: Story = {
  args: {
    ...CustomSize.args,
    thick: 4,
  },
};

/**
 * Spinner의 색상을 설정할 수 있습니다.
 */
export const CustomColor: Story = {
  args: {
    color: '#4870E8',
  },
};

/**
 * Spinner의 회전속도를 설정할 수 있습니다.
 */
export const CustomSpeed: Story = {
  args: {
    speed: '0.5s',
  },
};
