import { useState } from "react";
import Check from "@/common/icons/check.svg";
import { Task } from "@/modules/Tasks/store/task";
import Favorited from "@/common/icons/favorited.svg";
import ToFavorite from "@/common/icons/toFavorite.svg";
import { Container, StatusButton, FavoriteButton } from "@/modules/Tasks/components/TaskItem/TaskItemStyles";

interface Props {
  task: Task;
  onTaskUpdate(task: Task): void;
}

export function TaskItem({ task, onTaskUpdate }: Props) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isComplete, setIsComplete] = useState(task.isComplete);

  const toggleStatus = () => {
    setIsComplete(!isComplete);
    task.isComplete = !isComplete;
    onTaskUpdate(task);
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    task.isFavorite = !isFavorited;
    onTaskUpdate(task);
  };

  return (
    <Container isComplete={isComplete}>
      <StatusButton
        onClick={toggleStatus}
        data-testid="taskStatusButton"
        className={isComplete ? "status-button--complete" : ""}
      >
        {isComplete ? <img src={Check} alt="Status" /> : null}
      </StatusButton>

      <span>{task.content}</span>

      <FavoriteButton onClick={toggleFavorite}>
        <img src={isFavorited ? Favorited : ToFavorite} alt="favorite" />
      </FavoriteButton>
    </Container>
  );
}
