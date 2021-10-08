import styled from "styled-components";
import { View } from "@/common/containers/View/View";

export const Container = styled(View)`
  display: flex;
  flex-direction: column;
  transition: width 0.2s;
  background-color: #1e1e1e;

  &.tasks--active-details {
    width: calc(100% - 250px);
  }
`;

export const TaskList = styled.div`
  flex-grow: 1;
`;

export const CompletedTag = styled.span`
  padding: 0 5px;
  margin: 10px 0;
  font-size: 12px;
  color: #778bdd;
  border-radius: 3px;
  display: inline-block;
  background-color: #262626;
`;

export const DetailsSidebar = styled.div`
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  position: fixed;
  transition: transform 0.2s;
  transform: translateX(250px);

  &.tasks-details--active {
    transform: translateX(0px);
  }
`;
