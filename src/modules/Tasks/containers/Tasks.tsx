import { RootState } from "@/store";
import { useMemo, useState } from "react";
import { TaskTypeProp } from "@/common/typing";
import { Task } from "@/modules/Tasks/store/task";
import { createAction } from "@/common/store/utils";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks } from "@/modules/Tasks/store/selectors";
import { AddTask } from "@/modules/Tasks/components/AddTask/AddTask";
import { TasksContext } from "@/modules/Tasks/containers/TasksContext";
import { TaskItem } from "@/modules/Tasks/components/TaskItem/TaskItem";
import { SET_ACTIVE_TASK, UPDATE_TASK } from "@/modules/Tasks/store/actions";
import { DetailsBar } from "@/modules/Tasks/components/DetailsBar/DetailsBar";
import { ContainerTitle } from "@/common/components/ContainerTitle/ContainerTitle";
import { ContainerHeader } from "@/common/components/ContainerHeader/ContainerHeader";
import { Container, TaskList, CompletedTag, DetailsSidebar } from "@/modules/Tasks/containers/TaskStyles";

interface Props extends TaskTypeProp {
  title: string;
}

export function Tasks({ tasksType, title }: Props) {
  const IS_COMPLETE = true;
  const dispatch = useDispatch();
  const [isDetailsActive, setIsDetailsActive] = useState(false);
  const tasks = useSelector<RootState, Task[]>(({ tasksModule }) => selectTasks(tasksModule.tasks, tasksType));
  const hasCompletedTasks = useMemo(() => tasks.some((task) => task.isComplete), [tasks]);

  const onTaskUpdate = (task: Task) => {
    dispatch(createAction<Task>(UPDATE_TASK, task));
  };

  const onClickTask = (task: Task) => {
    setIsDetailsActive(true);
    dispatch(createAction<Task>(SET_ACTIVE_TASK, task));
  };

  const renderTasks = (isComplete: boolean) => {
    return tasks.map((task) => {
      if (task.isComplete !== isComplete) {
        return null;
      }

      return <TaskItem task={task} key={task.id} isDetails={false} onClick={onClickTask} onTaskUpdate={onTaskUpdate} />;
    });
  };

  return (
    <TasksContext.Provider value={{ tasksType }}>
      <Container className={isDetailsActive ? "tasks--active-details" : ""}>
        <ContainerHeader>
          <ContainerTitle tasksType={tasksType}>{title}</ContainerTitle>
        </ContainerHeader>

        <TaskList data-testid="listOfTasks">
          {!!tasks.length && renderTasks(!IS_COMPLETE)}

          {hasCompletedTasks && (
            <>
              <CompletedTag tasksType={tasksType}>Completed</CompletedTag>
              {renderTasks(IS_COMPLETE)}
            </>
          )}
        </TaskList>

        <AddTask />
      </Container>
      <DetailsSidebar className={isDetailsActive ? "tasks-details--active" : ""}>
        <DetailsBar onClose={() => setIsDetailsActive(false)} />
      </DetailsSidebar>
    </TasksContext.Provider>
  );
}
