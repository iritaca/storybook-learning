import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "@storybook/test";

import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "components/Modal",
  component: Modal,
  tags: ["autodocs"],
  args: {
    title: "Header",
    children: (
      <>
        <p>This is a paragraph inside the modal</p>
      </>
    ),
    buttons: {
      actions: {
        onPrimary: fn(),
        onSecondary: fn(),
        oncancel: fn(),
      },
      open: true,
    },
  },
  argTypes: {
    "buttons.variant": {
      control: "select",
      options: [undefined, "multiple"],
      mapping: {
        undefined: undefined,
        multiple: "multiple",
      },
      description:
        "Modifies the footer of the modal to display a single primary button (when undefined), and cancel and secondary are visible when the variant is set to multiple",
    },
    "buttons.actions.onSecondary": {
      if: { arg: "buttons.variant", truthy: "multiple" },
    },
    children: {
      control: false,
    },
    // disables a prop
    // internalProp: {
    //   table: {
    //     disable: true,
    //   },
    // },
  },
  parameters: {
    docs: {
      description: {
        component: `The **Modal** component is used to display content on top of the main interface, often for dialogs or confirmations.

### Button Variants

- \`undefined\` : Displays a sible **primary** button
- \`multiple\` : Displays **cancel**, **secondary** and **primary** buttons

### Accessibility & Keyboard Support
- Press **Esc** to close the modal
- Use **Tab** or **Shift + Tab** to navigate focus within the modal`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const SingleButton: Story = {
  args: {
    title: "Modal Header",
    buttons: { actions: { onPrimary: fn() } },
  },
};

export const MultipleButton: Story = {
  args: {
    title: "Modal Header",
    buttons: {
      variant: "multiple",
      actions: { onPrimary: fn(), onSecondary: fn(), onCancel: fn() },
    },
  },
};
