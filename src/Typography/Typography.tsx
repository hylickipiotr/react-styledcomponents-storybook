import React from "react";
import styled from "styled-components";
import { getFontSize } from "./utils/getFontSize";

export type Tag = "span" | "p" | "h1" | "h2" | "h3";

export type Props = React.HTMLProps<HTMLDivElement> & {
  children: React.ReactNode;
  tag?: Tag;
};

const StyledTypography = styled.div<Props>`
  font-size: ${(props) => getFontSize(props.tag)};
`;

const Typography: React.FC<Props> = ({ tag = "span", children, ...props }) => {
  return <StyledTypography as={tag}>{children}</StyledTypography>;
};

export default Typography;
