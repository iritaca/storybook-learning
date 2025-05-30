import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "@storybook/test";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"], // this shows the documentation
  args: {
    label: "button",
    variant: "primary",
    onClick: "",
    className: "special",
  },
  argTypes: {
    label: {
      control: "text",
      defaultValue: "click me",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "link", "icon", "ghost"],
    },
    onClick: {
      action: "clicked",
      if: { arg: "variant", neq: "link" }, // hide onClick when using link variant
    },
    disabled: {
      control: "boolean",
      description:
        "changes the look of the button to display the disabled state",
    },
    href: {
      if: { arg: "variant", eq: "link" }, // shows href only if the variant is 'link'
    },
  },
  parameters: {
    docs: {
      description: {
        component: `The **Button** trigger actions on navigates to links.
        It supports several multiple visual styles for different use cases:

        ### Variants

- \`primary\` : Main call to action
- \`secondary\` : Secondary action
- \`ghost\` : Low-emphasis alternative
- \`link\` : Custom styled link; requires \`href\`
- \`icon\` : For icon-only buttons (use with a single character or icon)

### Behavior

- Use \`onClick\` for actions
- Use  \`href\` for navigation`,
      },
    },
    a11y: {
      config: {
        rules: [{ id: "color-contrast", enabled: false }],
      },
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
export const ClickedButton: Story = {
  args: {
    label: "click me",
    variant: "primary",
    onClick: action("button-clicked"),
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    console.log("Button was clicked");
  },
};
