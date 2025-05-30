import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "@storybook/test";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  args: {
    label: "button",
    variant: "primary",
    onClick: fn(),
    href: "https://www.google.com",
    className: "special",
  },
  argTypes: {
    variant: {
      control: "select",
      option: ["primary", "secondary", "link", "icon", "ghost"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "secondary",
    variant: "secondary",
  },
};
export const Link: Story = {
  args: {
    label: "link",
    variant: "link",
  },
};
export const Icon: Story = {
  args: {
    label: "X",
    variant: "icon",
  },
};
export const Ghost: Story = {
  args: {
    label: "Ghost",
    variant: "ghost",
  },
};
