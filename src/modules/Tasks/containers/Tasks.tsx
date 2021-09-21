import { RootState } from "@/store";
import styled from "styled-components";
import { Task } from "@/modules/Tasks/store/task";
import { View } from "@/common/containers/View/View";
import { createAction } from "@/common/store/utils";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_TASK } from "@/modules/Tasks/store/actions";
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

const CompletedTag = styled.span`
  padding: 0 5px;
  margin: 10px 0;
  font-size: 12px;
  color: #778bdd;
  border-radius: 3px;
  display: inline-block;
  background-color: #262626;
`;

export function Tasks() {
  const IS_COMPLETE = true;
  const dispatch = useDispatch();
  const tasks = useSelector<RootState, Task[]>(({ tasksModule }) => tasksModule.tasks);

  const onTaskStatusChange = (task: Task) => {
    dispatch(createAction<Task>(UPDATE_TASK, task));
  };

  const renderTasks = (isComplete: boolean) => {
    return tasks.map((task, index) => {
      if (task.isComplete !== isComplete) {
        return null;
      }

      return <TaskItem onStatusChange={onTaskStatusChange} task={task} key={index} />;
    });
  };

  return (
    <Container>
      <ContainerHeader>
        <ContainerTitle>Tasks</ContainerTitle>
      </ContainerHeader>

      <TaskList>
        {tasks.length ? renderTasks(!IS_COMPLETE) : null}
        <CompletedTag>Completed</CompletedTag>
        {tasks.length ? renderTasks(IS_COMPLETE) : null}
      </TaskList>

      <AddTask />
    </Container>
  );
}
