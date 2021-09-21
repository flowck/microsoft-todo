import { useState } from "react";
import Check from "@/common/icons/check.svg";
import { Task } from "@/modules/Tasks/store/task";
import Favorited from "@/common/icons/favorited.svg";
import ToFavorite from "@/common/icons/toFavorite.svg";
import { Container, StatusButton, FavoriteButton } from "@/modules/Tasks/components/TaskItem/TaskItemStyles";

interface Props {
  task: Task;
  onStatusChange(task: Task): void;
}

export function TaskItem({ task, onStatusChange }: Props) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isComplete, setIsComplete] = useState(task.isComplete);

  const toggleStatus = () => {
    setIsComplete(!isComplete);
    task.isComplete = !isComplete;
    onStatusChange(task);
  };

  return (
    <Container isComplete={isComplete}>
      <StatusButton onClick={toggleStatus} className={isComplete ? "status-button--complete" : ""}>
        {isComplete ? <img src={Check} alt="Status" /> : null}
      </StatusButton>

      <span>{task.content}</span>

      <FavoriteButton onClick={() => setIsFavorited(!isFavorited)}>
        <img src={isFavorited ? Favorited : ToFavorite} alt="favorite" />
      </FavoriteButton>
    </Container>
  );
}
