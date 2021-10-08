import styled from "styled-components";

interface ContainerProps {
  size: string;
}

export const Container = styled.button.attrs((props: ContainerProps) => props)`
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  margin-right: 14px;
  justify-content: center;
  border: 2px solid #8e8e8e;
  background-color: transparent;
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  &.status-button--complete {
    border-color: #778bdd;
    background-color: #778bdd;
  }

  img {
    width: 8px;
  }
`;
