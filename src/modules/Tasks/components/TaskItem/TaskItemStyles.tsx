import styled from "styled-components";
import { getMainColor } from "@/modules/Tasks/utils/colors";
import { TaskContainerType, TaskTypeProp } from "@/common/typing";

interface ContainerProps extends TaskTypeProp {
  isDetails: boolean;
  isComplete?: boolean;
}

export const Button = styled.button`
  width: 16px;
  height: 16px;
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Container = styled.article.attrs((props: ContainerProps) => props)`
  color: #fff;
  display: flex;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  margin-bottom: 1px;
  align-items: center;
  background-color: #323232;
  padding: 14px ${({ isDetails }) => (isDetails ? 0 : "14px")};

  span {
    flex-grow: 1;
    color: ${(props) => (props.isComplete ? "#9b9b9b" : "#fff")};
    text-decoration: ${(props) => (props.isComplete ? "line-through" : "none")};
  }
`;

export const StatusButton = styled(Button)`
  border-radius: 50%;
  margin-right: 14px;
  border: 2px solid #8e8e8e;

  &.status-button--complete {
    border-color: ${({ tasksType }: TaskTypeProp) => getMainColor(tasksType as TaskContainerType)};
    background-color: ${({ tasksType }: TaskTypeProp) => getMainColor(tasksType as TaskContainerType)};
  }

  img {
    width: 8px;
  }
`;

export const FavoriteButton = styled(Button)`
  width: 20px;
  height: 20px;

  svg {
    width: 16px;
    height: 16px;
  }
`;
