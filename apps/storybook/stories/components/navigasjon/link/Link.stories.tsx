import { VStack } from "@chakra-ui/react";
import { Link as KvibLink } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibLink> = {
  title: "Komponenter/Link",
  component: KvibLink,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    children: {
      description: "This is the linktext",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    isExternal: {
      description: "If true, an icon will be included.",
      table: {
        type: { summary: "Boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    href: {
      description: "This is the link.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibLink>;

export const Preview: Story = {
  args: {
    children: "Dette er en lenke",
    href: "/?path=/",
  },
  render: args => <KvibLink {...args}>{args.children}</KvibLink>,
};

export const LinkStates: Story = {
  args: {
    colorScheme: "blue",
  },
  render: args => (
    <VStack>
      <KvibLink href="/?path=/" {...args}>
        Dette er en intern lenke
      </KvibLink>
      <KvibLink isExternal href="https://chakra-ui.com/docs/components" {...args}>
        Dette er en ekstern lenke
      </KvibLink>
    </VStack>
  ),
};

export const LinkColorscheme: Story = {
  args: {
    children: "Dette er en lenke",
    href: "/?path=/",
  },
  render: args => (
    <VStack>
      <KvibLink {...args}>{args.children}</KvibLink>
      <KvibLink colorScheme="blue" {...args}>
        {args.children}
      </KvibLink>
    </VStack>
  ),
};
