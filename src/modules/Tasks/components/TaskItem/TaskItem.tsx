import Check from "@/common/icons/check.svg";
import { Task } from "@/modules/Tasks/store/task";
// import Favorited from "@/common/icons/favorited.svg";
// import ToFavorite from "@/common/icons/toFavorite.svg";
import { getMainColor } from "@/modules/Tasks/utils/colors";
import { ImportantIcon } from "@/common/icons/ImportantIcon";
import { MouseEvent, useContext, useEffect, useState } from "react";
import { TasksContext } from "@/modules/Tasks/containers/TasksContext";
import { StatusButton } from "@/common/components/StatusButton/StatusButton";
import { Container, FavoriteButton } from "@/modules/Tasks/components/TaskItem/TaskItemStyles";

interface Props {
  task: Task;
  isDetails: boolean;
  onClick?(task: Task): void;
  onTaskUpdate(task: Task): void;
}

export function TaskItem({ task, onTaskUpdate, onClick, isDetails }: Props) {
  const [isImportant, setIsImportant] = useState(task.isImportant);
  const [isComplete, setIsComplete] = useState(task.isComplete);
  const { tasksType } = useContext(TasksContext);

  // Watch changes on task.isImportant property
  useEffect(() => setIsImportant(task.isImportant), [task.isImportant, setIsImportant]);

  const toggleStatus = () => {
    setIsComplete(!isComplete);
    task.isComplete = !isComplete;
    onTaskUpdate(task);
  };

  const toggleFavorite = (event: MouseEvent) => {
    event.stopPropagation();

    task.isImportant = !isImportant;
    setIsImportant(!isImportant);
    onTaskUpdate(task);
  };

  const onTaskClicked = (event: MouseEvent) => {
    if (onClick) {
      onClick(task);
    }
  };

  return (
    <Container
      tabIndex={-1}
      tasksType={tasksType}
      isDetails={isDetails}
      isComplete={isComplete}
      onClick={onTaskClicked}
    >
      <StatusButton
        size="16px"
        tasksType={tasksType}
        onClick={toggleStatus}
        isComplete={isComplete}
        data-testid="taskStatusButton"
      >
        {isComplete ? <img src={Check} alt="Status" /> : null}
      </StatusButton>

      <span>{task.content}</span>

      <FavoriteButton onClick={toggleFavorite}>
        <ImportantIcon filled={isImportant} color={getMainColor(tasksType)} />
      </FavoriteButton>
    </Container>
  );
}
