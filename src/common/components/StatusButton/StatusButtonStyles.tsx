import styled from "styled-components";
import { getMainColor } from "@/modules/Tasks/utils/colors";
import { TaskTypeProp } from "@/common/typing";

interface ContainerProps extends TaskTypeProp {
  size: string;
}

export const StatusButtonContainer = styled.button.attrs((props: ContainerProps) => props)`
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
    border-color: ${({ tasksType }) => getMainColor(tasksType)};
    background-color: ${({ tasksType }) => getMainColor(tasksType)};
  }

  img {
    width: 8px;
  }
`;
