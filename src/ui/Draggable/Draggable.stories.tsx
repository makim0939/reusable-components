import type { Meta, StoryObj } from "@storybook/react";
import Draggable from "./Draggable";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Draggable",
  component: Draggable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Draggable>;

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
    Drag Me
  </div>
);
export const Default: Story = { args: { children: DefaultChildren } };
