import { RootState } from "@/store";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Task } from "@/modules/Tasks/store/task";
import { View } from "@/common/containers/View/View";
import { AddTask } from "@/modules/Tasks/components/AddTask/AddTask";
import { TaskItem } from "@/modules/Tasks/components/TaskItem/TaskItem";
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

function renderTasks(tasks: Task[]) {
  return tasks.length ? tasks.map((task, index) => <TaskItem task={task} key={index} />) : null;
}

export function Tasks() {
  const tasks = useSelector<RootState, Task[]>(({ tasksModule }) => tasksModule.tasks);

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

      <TaskList>{renderTasks(tasks)}</TaskList>

      <AddTask />
    </Container>
  );
}
