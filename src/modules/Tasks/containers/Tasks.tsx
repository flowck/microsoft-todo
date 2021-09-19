import styled from "styled-components";
import { Task } from "@/common/components/Task/Task";
import { View } from "@/common/containers/View/View";
import { AddTask } from "@/common/components/AddTask/AddTask";
// import { Tooltip } from "@/common/components/Tooltip/Tooltip";
// import { ViewOptionsButton } from "../components/ViewOptions/ViewOptionsButton";
import { ContainerTitle } from "@/common/components/ContainerTitle/ContainerTitle";
import { ContainerHeader } from "@/common/components/ContainerHeader/ContainerHeader";

const Container = styled(View)`
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
`;

const TaskList = styled.div`
  flex-grow: 1;
`;

export function Tasks() {
  return (
    <Container>
      <ContainerHeader>
        <ContainerTitle>Tasks</ContainerTitle>
        {/* <ViewOptionsButton>
          <Tooltip>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iusto
            corporis id impedit dignissimos praesentium quasi libero mollitia
            maxime aut, excepturi tempora a, non nam voluptatum voluptas.
            Labore, laborum eos.
          </Tooltip>
        </ViewOptionsButton> */}
      </ContainerHeader>

      <TaskList>
        <Task></Task>
        <Task></Task>
        <Task></Task>
      </TaskList>

      <AddTask></AddTask>
    </Container>
  );
}
