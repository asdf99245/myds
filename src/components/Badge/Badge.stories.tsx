import styled from '@emotion/styled';
import type { Meta, StoryObj } from '@storybook/react';
import Badge from '.';

/**
 * ### Badge는 상태 또는 속성을 표시하기 위한 컴포넌트입니다.
 * - 사용자에게 부가적인 정보를 강조하고 주목도를 높이는 기능을 합니다.
 * - Badge는 일반적으로 숫자나 텍스트를 콘텐츠로 가지지만 콘텐츠가 없는 dot 형태 또한 제공됩니다.
 */
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '뱃지를 표시해줄 기본 요소를 설정합니다. 설정 시 뱃지가 요소의 우측상단 가장자리에 표시됩니다.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    label: {
      description: '뱃지 안에 표시할 콘텐츠를 설정합니다.',
      control: { type: 'number' },
    },
    color: {
      description: '뱃지의 배경 색상을 설정합니다.',
      table: {
        defaultValue: { summary: 'colors.primary' },
      },
      control: { type: 'color' },
    },
    dot: {
      description: '점 형태의 뱃지를 표시합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
    showZero: {
      description: '라벨의 카운트가 0일 때 뱃지를 표시합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

/**
 * label 값을 전달하지 않은 뱃지는 기본적으로 표시되지 않습니다.
 */
export const Default: Story = {
  render: (args) => (
    <Badge {...args}>
      <Circle />
    </Badge>
  ),
};

/**
 * 점 형태의 뱃지를 표시합니다. 새로운 정보가 있음을 알려주는 용도로 사용됩니다.
 */
export const Dot: Story = {
  render: (args) => (
    <Badge dot {...args}>
      <Circle />
    </Badge>
  ),
};

/**
 * label 값으로 1자리의 숫자를 전달하면 표시됩니다.
 */
export const SingleDigit: Story = {
  render: (args) => (
    <Badge label={1} {...args}>
      <Circle />
    </Badge>
  ),
};

/**
 * label 값으로 2자리의 숫자를 전달하면 표시됩니다.
 */
export const TwoDigit: Story = {
  render: (args) => (
    <Badge label={22} {...args}>
      <Circle />
    </Badge>
  ),
};

/**
 * label 값으로 3자리 이상의 숫자를 전달하면 표시됩니다.
 */
export const MultipleDigit: Story = {
  render: (args) => (
    <Badge label={322} {...args}>
      <Circle />
    </Badge>
  ),
};

/**
 * label 값으로 999보다 큰 숫자를 전달하면 999+가 표시됩니다.
 */
export const MaxNumber: Story = {
  render: (args) => (
    <Badge label={10000} {...args}>
      <Circle />
    </Badge>
  ),
};

/**
 * label값으로 텍스트를 전달하면 표시됩니다.
 */
export const TextLabel: Story = {
  render: (args) => <Badge label='텍스트라벨' {...args} />,
};

/**
 * 사용자가 커스텀하게 뱃지의 색상을 지정할 수 있습니다.
 */
export const CustomColor: Story = {
  render: (args) => (
    <Badge color='sienna' label={1} {...args}>
      <Circle />
    </Badge>
  ),
};

/**
 * label 값이 정수형 0일 때도 뱃지를 표시합니다.
 */
export const ShowZero: Story = {
  render: (args) => (
    <Badge label={0} showZero {...args}>
      <Circle />
    </Badge>
  ),
};

const Circle = styled.div`
  width: 48px;
  height: 48px;
  background-color: #575757;
  border-radius: 50%;
`;
