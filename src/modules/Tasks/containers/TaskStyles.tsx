import styled from "styled-components";
import { View } from "@/common/containers/View/View";

export const Container = styled(View)`
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
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
