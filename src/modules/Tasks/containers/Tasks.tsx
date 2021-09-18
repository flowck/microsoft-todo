import styled from "styled-components";
import { Task } from "@/common/components/Task/Task";
import { View } from "@/common/containers/View/View";
import { AddTask } from "@/common/components/AddTask/AddTask";
import { ContainerTitle } from "@/common/components/ContainerTitle/ContainerTitle";

const Container = styled(View)`
  background-color: #1e1e1e;
`;

export function Tasks() {
  return (
    <Container>
      <ContainerTitle>Tasks</ContainerTitle>

      <Task></Task>
      <Task></Task>
      <Task></Task>

      <AddTask></AddTask>
    </Container>
  );
}
