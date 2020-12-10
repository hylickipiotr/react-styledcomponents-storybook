import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Typography, { Props } from "./Typography";

export default {
  component: Typography,
  title: "Examples / Typography",
} as Meta;

export const Span = (args: Props) => <Typography {...args} />;
Span.args = { children: "Span" } as Props;

export const Paragraph = (args: Props) => <Typography {...args} />;
Paragraph.args = { children: "Paragraph", tag: "p" } as Props;

export const Header1 = (args: Props) => <Typography {...args} />;
Header1.args = { children: "Header", tag: "h1" } as Props;

export const Header2 = (args: Props) => <Typography {...args} />;
Header2.args = { children: "Header", tag: "h2" } as Props;

export const Header3 = (args: Props) => <Typography {...args} />;
Header3.args = { children: "Header", tag: "h3" } as Props;
