import { MouseEvent, useEffect, useState } from "react";
import Check from "@/common/icons/check.svg";
import { Task } from "@/modules/Tasks/store/task";
import Favorited from "@/common/icons/favorited.svg";
import ToFavorite from "@/common/icons/toFavorite.svg";
import { Container, StatusButton, FavoriteButton } from "@/modules/Tasks/components/TaskItem/TaskItemStyles";

interface Props {
  task: Task;
  isDetails: boolean;
  onClick?(task: Task): void;
  onTaskUpdate(task: Task): void;
}

export function TaskItem({ task, onTaskUpdate, onClick, isDetails }: Props) {
  const [isFavorite, setIsFavorite] = useState(task.isFavorite);
  const [isComplete, setIsComplete] = useState(task.isComplete);

  // Watch changes on task.isFavorite property
  useEffect(() => setIsFavorite(task.isFavorite), [task.isFavorite, setIsFavorite]);

  const toggleStatus = () => {
    setIsComplete(!isComplete);
    task.isComplete = !isComplete;
    onTaskUpdate(task);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    task.isFavorite = !isFavorite;
    onTaskUpdate(task);
  };

  const onTaskClicked = (event: MouseEvent) => {
    const targetTagName = (event.target as HTMLElement).tagName;
    if (targetTagName.match(/img|button/i)) {
      return undefined;
    }

    if (onClick) {
      onClick(task);
    }
  };

  return (
    <Container isDetails={isDetails} isComplete={isComplete} onClick={onTaskClicked} tabIndex={-1}>
      <StatusButton
        onClick={toggleStatus}
        data-testid="taskStatusButton"
        className={isComplete ? "status-button--complete" : ""}
      >
        {isComplete ? <img src={Check} alt="Status" /> : null}
      </StatusButton>

      <span>{task.content}</span>

      <FavoriteButton onClick={toggleFavorite}>
        <img src={isFavorite ? Favorited : ToFavorite} alt="favorite" />
      </FavoriteButton>
    </Container>
  );
}
