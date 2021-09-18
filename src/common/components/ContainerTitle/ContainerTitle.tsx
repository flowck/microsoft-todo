import styled from "styled-components";

export const ContainerTitle = styled.h1<Record<string, string>>`
  font-size: 24px;
  margin-bottom: 14px;
  font-family: var(--font-bold);
  color: ${({ color }) => (color ? color : "#778BDD")};
`;
