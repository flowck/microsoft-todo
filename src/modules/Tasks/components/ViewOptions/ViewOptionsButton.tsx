import styled from "styled-components";
import { BaseProps } from "@/common/typing";

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: 42px;
  height: 28px;
  border: none;
  display: flex;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
  background-color: #262626;

  &:hover {
    background-color: #242424;
  }

  span {
    display: block;
    position: relative;
    margin-left: 15px;

    &,
    &::before,
    &::after {
      width: 2.5px;
      height: 2.5px;
      border-radius: 50%;
      background-color: #778bdd;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
    }

    &::before {
      left: 5px;
    }

    &::after {
      left: 10px;
    }
  }
`;

export function ViewOptionsButton({ children }: BaseProps) {
  return (
    <Container>
      <Button>
        <span></span>
      </Button>
      {children}
    </Container>
  );
}
