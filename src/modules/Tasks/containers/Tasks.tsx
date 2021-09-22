import { useMemo, useState } from "react";
import { RootState } from "@/store";
import { Task } from "@/modules/Tasks/store/task";
import { createAction } from "@/common/store/utils";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_TASK } from "@/modules/Tasks/store/actions";
import { AddTask } from "@/modules/Tasks/components/AddTask/AddTask";
import { TaskItem } from "@/modules/Tasks/components/TaskItem/TaskItem";
import { DetailsBar } from "@/modules/Tasks/components/DetailsBar/DetailsBar";
import { ContainerTitle } from "@/common/components/ContainerTitle/ContainerTitle";
import { ContainerHeader } from "@/common/components/ContainerHeader/ContainerHeader";
import { Container, TaskList, CompletedTag, DetailsSidebar } from "@/modules/Tasks/containers/TaskStyles";

export function Tasks() {
  const IS_COMPLETE = true;
  const dispatch = useDispatch();
  const [isDetailsActive, setIsDetailsActive] = useState(false);
  const tasks = useSelector<RootState, Task[]>(({ tasksModule }) => tasksModule.tasks);
  const hasCompletedTasks = useMemo(() => tasks.some((task) => task.isComplete), [tasks]);

  const onTaskUpdate = (task: Task) => {
    dispatch(createAction<Task>(UPDATE_TASK, task));
  };

  const onClickTask = () => {
    setIsDetailsActive(!isDetailsActive);
  };

  const renderTasks = (isComplete: boolean) => {
    return tasks.map((task, index) => {
      if (task.isComplete !== isComplete) {
        return null;
      }

      return (
        <TaskItem onClick={onClickTask} onBlur={onClickTask} onTaskUpdate={onTaskUpdate} task={task} key={index} />
      );
    });
  };

  return (
    <>
      <Container className={isDetailsActive ? "tasks--active-details" : ""}>
        <ContainerHeader>
          <ContainerTitle>Tasks</ContainerTitle>
        </ContainerHeader>

        <TaskList data-testid="listOfTasks">
          {tasks.length ? renderTasks(!IS_COMPLETE) : null}

          {hasCompletedTasks ? (
            <>
              <CompletedTag>Completed</CompletedTag>
              {renderTasks(IS_COMPLETE)}
            </>
          ) : null}
        </TaskList>

        <AddTask />
      </Container>
      <DetailsSidebar className={isDetailsActive ? "tasks-details--active" : ""}>
        <DetailsBar />
      </DetailsSidebar>
    </>
  );
}
