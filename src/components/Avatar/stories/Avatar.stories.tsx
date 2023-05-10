import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@components/Icon';
import Avatar from '../Avatar';

/**
 * ### Avatar는 사용자나 객체를 표현하기 위한한 개체입니다.
 * - 주로 프로필을 표시하기 위한 용도로 사용되며 그림, 사진, 텍스트 이니셜로 이루어져 있습니다.
 * - 콘텐츠로는 이미지, 아이콘, 텍스트가 포함될 수 있으며 아무것도 전달하지 않을 시 fallback 아이콘이 표시됩니다.
 */
const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '아바타의 모양을 결정합니다.',
      table: {
        type: { summary: 'AvatarVariant' },
      },
      options: ['circle', 'square', 'rounded'],
      control: { type: 'select' },
    },
    size: {
      description: '아바타의 크기를 설정합니다.',
      control: { type: 'number' },
    },
    color: {
      description: '아바타의 색상을 설정합니다.',
      control: { type: 'color' },
    },
    imgsrc: {
      description: '아바타의 배경이미지를 설정합니다.',
      control: { type: 'text' },
    },
    name: {
      description: '아바타의 콘텐츠로 사용할 텍스트를 설정합니다.',
      control: { type: 'text' },
    },
    icon: {
      description: '아바타의 콘텐츠로 사용할 아이콘을 설정합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

/**
 * circle 모양의 아바타입니다.
 * 아바타는 기본적으로 fallback 아이콘(유저)을 표시합니다.
 */
export const Fallback: Story = {
  args: {
    variant: 'circle',
  },
};

/**
 * square 모양의 아바타입니다.
 */
export const Square: Story = {
  args: {
    variant: 'square',
  },
};

/**
 * rounded 모양의 아바타입니다.
 */
export const Rounded: Story = {
  args: {
    variant: 'rounded',
  },
};

/**
 * 사용자가 크기를 커스텀하게 설정할 수 있습니다.
 */
export const CustomSize: Story = {
  args: {
    size: 60,
  },
};

/**
 * 사용자가 색상을 커스텀하게 설정할 수 있습니다.
 */
export const CustomColor: Story = {
  args: {
    color: '#F5A110',
    size: 60,
  },
};

/**
 * 배경이미지를 설정하여 프로필 사진을 표시할 수 있습니다.
 */
export const ProfileImage: Story = {
  args: {
    variant: 'circle',
    size: 60,
    imgsrc: '/src/assets/profile-dummy.png',
  },
};

/**
 * 텍스트를 설정하면 텍스트 이니셜을 표시합니다.
 */
export const WithName: Story = {
  args: {
    variant: 'circle',
    size: 60,
    name: 'Kent Docc',
  },
};

/**
 * 사용자 정의 아이콘을 콘텐츠로 설정할 수 있습니다.
 */
export const WithIcon: Story = {
  args: {
    variant: 'circle',
    size: 60,
    icon: <Icon icon='user' />,
  },
};
