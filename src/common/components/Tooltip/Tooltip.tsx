import { BaseProps } from "@/common/typing";
import styled from "styled-components";

const Container = styled.div`
  right: 0;
  padding: 14px;
  border-radius: 5px;
  position: absolute;
  border: 1px solid #5a5455;
  background-color: #30292b;
`;

export function Tooltip({ children }: BaseProps) {
  return <Container>{children}</Container>;
}
