import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "@storybook/test";

import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "components/Modal",
  component: Modal,
  args: {
    title: "Header",
    children: <div>Modal body content</div>,
    buttons: {
      actions: {
        onPrimary: fn(),
        onSecondary: fn(),
        oncancel: fn(),
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
