import { Footer as KvibFooter } from "@kvib/react/src/footer/Footer";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFooter> = {
  title: "Komponenter/Footer",
  component: KvibFooter,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    accessibilityUrl: {
      description: "Link to accessibility statement",
      control: "text",
    },
    excludeContactInfo: {
      description: "Exclude contact information",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    excludeHelp: {
      description: "Exclude help",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    excludeNews: {
      description: "Exclude news",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    excludeOpeningHours: {
      description: "Exclude opening hours",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    excludePrivacyLink: {
      description: "Exclude privacy link",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    excludeSocialMedia: {
      description: "Exclude social media",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    contactInfoEmailAddress: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibFooter>;

export const Preview: Story = {
  args: {
    accessibilityUrl: "/",
    excludeContactInfo: false,
    excludeHelp: false,
    excludeNews: false,
    excludeOpeningHours: false,
    excludePrivacyLink: false,
    excludeSocialMedia: false,
  },
  render: args => <KvibFooter {...args} />,
};

export const FooterNone: Story = {
  args: {
    accessibilityUrl: undefined,
    excludeContactInfo: true,
    excludeHelp: true,
    excludeNews: true,
    excludeOpeningHours: true,
    excludePrivacyLink: true,
    excludeSocialMedia: true,
  },
  render: args => <KvibFooter {...args} />,
};
