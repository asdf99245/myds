import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

/**
 * ### 다양한 종류의 텍스트를 표시하기 위한 컴포넌트입니다.
 * - 텍스트의 사용 용도에 따라 여러가지 variant를 제공합니다.
 * - 글자 크기, 굵기, 색상, 기본 태그를 커스텀하게 지정할 수 있습니다.
 */
const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '표시할 텍스트 콘텐츠를 설정합니다.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    variant: {
      description: '텍스트의 종류를 설정합니다.',
      table: {
        type: { summary: 'FontVariant' },
        defaultValue: { summary: 'body1' },
      },
      options: [
        'display',
        'heading1',
        'heading2',
        'heading3',
        'heading4',
        'heading5',
        'title',
        'subTitle',
        'body1',
        'body2',
        'caption',
      ],
      control: { type: 'select' },
    },
    fontSize: {
      description: '텍스트의 크기를 설정합니다.',
      control: { type: 'text' },
    },
    fontWeight: {
      description: '텍스트의 굵기를 설정합니다.',
      control: { type: 'number' },
    },
    as: {
      description: '텍스트의 태그를 설정합니다.',
      control: { type: 'text' },
    },
    color: {
      description: '텍스트의 색상을 설정합니다.',
      control: { type: 'color' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

/**
 * Display, Heading1, Heading2, Heading3, Heading4, Heading5, Title, SubTitle, Body1, Body2, Caption 총 11가지의 variant를 제공합니다.
 */
export const Default: Story = {
  render: () => (
    <>
      <Typography variant='display'>Display</Typography>
      <Typography variant='heading1'>Heading1</Typography>
      <Typography variant='heading2'>Heading2</Typography>
      <Typography variant='heading3'>Heading3</Typography>
      <Typography variant='heading4'>Heading4</Typography>
      <Typography variant='heading5'>Heading5</Typography>
      <Typography variant='title'>Title</Typography>
      <Typography variant='subTitle'>SubTitle</Typography>
      <Typography variant='body1'>Body1</Typography>
      <Typography variant='body2'>Body2</Typography>
      <Typography variant='caption'>Caption</Typography>
    </>
  ),
};

/**
 * 가장 중요하면서 heading1보다 큰 크기의 텍스트를 의미합니다.
 */
export const Display: Story = {
  args: {
    variant: 'display',
    children: 'Display',
  },
};

/**
 * 가장 중요한 텍스트를 의미합니다.
 */
export const Heading1: Story = {
  args: {
    variant: 'heading1',
    children: 'Heading1',
  },
};

/**
 * heading1 다음으로 중요한 텍스트를 의미합니다.
 */
export const Heading2: Story = {
  args: {
    variant: 'heading2',
    children: 'Heading2',
  },
};

/**
 * heading2 다음으로 중요한 텍스트를 의미합니다.
 */
export const Heading3: Story = {
  args: {
    variant: 'heading3',
    children: 'Heading3',
  },
};

/**
 * heading3 다음으로 중요한 텍스트를 의미합니다.
 */
export const Heading4: Story = {
  args: {
    variant: 'heading4',
    children: 'Heading4',
  },
};

/**
 * heading4 다음으로 중요한 텍스트를 의미합니다.
 */
export const Heading5: Story = {
  args: {
    variant: 'heading5',
    children: 'Heading5',
  },
};

/**
 * 제목을 의미합니다.
 */
export const Title: Story = {
  args: {
    variant: 'title',
    children: 'Title',
  },
};

/**
 * 부제목을 의미합니다.
 */
export const SubTitle: Story = {
  args: {
    variant: 'subTitle',
    children: 'SubTitle',
  },
};

/**
 * 일반 텍스트를 의미합니다.
 */
export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body1',
  },
};

/**
 * body1보다 작은 크기의 일반 텍스트를 의미합니다.
 */
export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body2',
  },
};

/**
 * 간단한 설명 텍스트를 의미합니다.
 */
export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption',
  },
};

/**
 * 글자 크기를 커스텀하게 설정할 수 있습니다.
 */
export const CustomFontSize: Story = {
  args: {
    fontSize: '2rem',
    children: 'Custom Font Size',
  },
  parameters: {
    docs: {
      description: {
        story: '글자 크기를 커스텀하게 설정할 수 있습니다.',
      },
    },
  },
};

/**
 * 글자 굵기를 커스텀하게 설정할 수 있습니다.
 */
export const CustomFontWeight: Story = {
  args: {
    fontWeight: 100,
    children: 'Custom Font Weight',
  },
  parameters: {
    docs: {
      description: {
        story: '글자 굵기를 커스텀하게 설정할 수 있습니다.',
      },
    },
  },
};

/**
 * 글자 색상을 커스텀하게 설정할 수 있습니다.
 */
export const CustomColor: Story = {
  args: {
    color: 'violet',
    children: 'Custom Color',
  },
  parameters: {
    docs: {
      description: {
        story: '글자 색상을 커스텀하게 설정할 수 있습니다.',
      },
    },
  },
};

/**
 * 텍스트의 기본 태그를 커스텀하게 설정할 수 있습니다.
 */
export const OverrideElement: Story = {
  args: {
    as: 'del',
    children: 'Override Element',
  },
  parameters: {
    docs: {
      description: {
        story: '텍스트의 기본 태그를 커스텀하게 설정할 수 있습니다.',
      },
    },
  },
};
