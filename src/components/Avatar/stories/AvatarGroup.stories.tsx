import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from '@components/Avatar';

/**
 * ### AvatarGroup은 여러개의 아바타를 나열하여 표시합니다.
 */
const meta: Meta<typeof AvatarGroup> = {
  title: 'Components/Avatar/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '아바타 그룹 내 표시할 아바타 컴포넌트입니다.',
      table: {
        type: { summary: 'ReactElement<AvatarProps> | ReactElement<AvatarProps>[]' },
      },
    },
    variant: {
      dsecription: '아바타 그룹 내 아바타 모양을 결정합니다.',
      table: {
        type: { summary: 'AvatarVariant' },
      },
      options: ['circle', 'square', 'rounded'],
      control: { type: 'select' },
    },
    size: {
      description: '아바타 그룹 내 아바타의 크기를 설정합니다.',
      control: { type: 'number' },
    },
    max: {
      description: '아바타 그룹 내 표시할 최대 아바타 개수를 설정합니다.',
      control: { type: 'number' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

/**
 * 여러개의 아바타를 나열하여 표시합니다.
 */
export const Default: Story = {
  render: (args) => (
    <AvatarGroup size={60} {...args}>
      <Avatar variant='circle' imgsrc='/src/assets/profile-dummy.png' />
      <Avatar variant='circle' imgsrc='/src/assets/profile-dummy.png' />
      <Avatar variant='circle' imgsrc='/src/assets/profile-dummy.png' />
      <Avatar variant='circle' imgsrc='/src/assets/profile-dummy.png' />
      <Avatar variant='circle' imgsrc='/src/assets/profile-dummy.png' />
    </AvatarGroup>
  ),
};

/**
 * max props를 설정하여 최대 표시할 아바타 개수를 제한할 수 있습니다.
 * 나머지 개수는 더미 아바타에 표시됩니다.
 */
export const OverMaxLimit: Story = {
  render: (args) => (
    <AvatarGroup max={3} size={60} {...args}>
      <Avatar variant='circle' imgsrc='/src/assets/profile-dummy.png' />
      <Avatar variant='circle' imgsrc='/src/assets/profile-dummy.png' />
      <Avatar variant='circle' imgsrc='/src/assets/profile-dummy.png' />
      <Avatar variant='circle' imgsrc='/src/assets/profile-dummy.png' />
      <Avatar variant='circle' imgsrc='/src/assets/profile-dummy.png' />
    </AvatarGroup>
  ),
};
