import { CloseButton as KvibCloseButton, Stack as KvibStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCloseButton> = {
  title: "Komponenter/Close Button",
  component: KvibCloseButton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    size: {
      description: "Size of the Button",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    isDisabled: {
      description: "If true, the button will be disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibCloseButton>;

export const Preview: Story = {
  render: args => <KvibCloseButton {...args} />,
};

export const CloseButtonSizes: Story = {
  render: args => (
    <KvibStack direction="row" spacing={6}>
      <KvibCloseButton {...args} size="sm" />
      <KvibCloseButton {...args} size="md" />
      <KvibCloseButton {...args} size="lg" />
    </KvibStack>
  ),
};
