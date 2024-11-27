import type { Meta, StoryObj } from "@storybook/react";
import KeepVisualScale from "./KeepVisualScale";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "KeepVisualScale",
  component: KeepVisualScale,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof KeepVisualScale>;

export default meta;
type Story = StoryObj<typeof meta>;
const DefaultChildren = (
  <div
    style={{
      width: "fit-content",
      padding: "16px",
      borderRadius: "8px",
      backgroundColor: "skyblue",
    }}
  >
    Pinch-in-out on mobile device
  </div>
);
export const Default: Story = { args: { children: DefaultChildren } };
